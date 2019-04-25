// MovingEntity

// Entity which can walk, traverse stairs, [, jump, fly]
// Like e.g. player.
// For entity to do anything certain movement functions must be called
// moveRight, moveLeft, moveDown, moveUp (like stairs) and moveJump

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');
var consts = global.get('consts');
var AnimatingEntity = global.get('class/AnimatingEntity');

// [[movements]] is an object with the possible movements of the entity
// and the sprite positions to be used for each
// E.g.
// {
//		'still' : { 'positions' : 0 },
//		['walk' : { 'positions' : [0,1,2,1,0,3,4,3], 'distance' : 30 },
// 		'stairs' : { 'positions' : [6,7], 'distance' : 60 },
//		'jump' : { 'positions' : 5 },
//      'swim' : { 'positions' : [4,5,6], 'distance' : 60 },
//      'fly' : { 'positions' : [11,12], 'distance' : 90 }]
// }
// Where position and positions are the sprite positions to be used for each animation (see Sprite.js)
// And distance is how many pixels it takes to change animation
// [[speedX]] and [[speedY]] is the speed in X or Y direction. Typical values would be
// [[speedX]] = 0.2 and [[speedY]] = 0 (gravity and jumping will change y speed)
// [[moveThroughScenes]] is true if we can move to the next scene, false if we die on moving out of scene
// [[onEntityCollision]] is a function which handles collision with entity and will receive
//   the colliding entity as an argument. Should return true if you want to not be able to move through
//   the entity and false otherwise.
// [[JUMPSPEED]] is an optional argument (although necessary if entity can jump) of a singular
//   increase in -y direction on a jump command (e.g. 0.4)
function MovingEntity(
	sprite,
	posX, posY,
	affectedByGravity,
	movements,
	speedX, speedY,
	moveThroughScenes,
	onEntityCollision,
	JUMPSPEED
) {
	AnimatingEntity.call(this, sprite, posX, posY, affectedByGravity);

	// Add our movement animations and set our flags (e.g. this.walks, this.jumps, this.flies, this.climbsStairs)
	this.walks = this.climbsStairs = this.jumps = this.swims = this.flies = false; // becomes true if supplied with movements
	for (var move in movements) {
		// set our flags (this.jumps etc.) and find out which distance metric to use in case of multiple sprite animation
		var distanceMetric;
		switch (move) {
			case 'walk':
				this.walks = true;
				distanceMetric = 'distanceX';
				break;
			case 'stairs':
				this.climbsStairs = true;
				distanceMetric = 'distanceY';
				break;
			case 'jump':
				this.jumps = true;
				distanceMetric = 'distanceXY'; // not executed if jump is single sprite
				break;
			case 'swim':
				this.swims = true;
				distanceMetric = 'distanceXY';
				break;
			case 'fly':
				this.flies = true;
				distanceMetric = 'distanceXY';
				break
			default:
				distanceMetric = 'distanceX';
				break;
		}

		if (typeof(movements[move].positions) === 'number') {
			// single sprite animation (e.g. no animation)
			this._addAnimation(move, movements[move].positions, undefined, undefined, 'singleSprite');
		} else {
			// multiple sprite movement
			this._addAnimation(move, movements[move].positions, movements[move].distance, 'sequential', distanceMetric);
		}
	}

	this.moveThroughScenes = moveThroughScenes;
	this._handleEntityCollision = onEntityCollision; // function
	this.orientation = 'right'; // 'left'

	this.speedX = speedX;
	this.speedY = speedY;
	if (this.jumps) {
		this.JUMPSPEED = JUMPSPEED || config.DEFAULTJUMPSPEED;
	}
	this.accelerationY = config.GRAVITYCONSTANT;
	// maximum speed character can go in y+ direction through acceleration of gravity
	this.TERMINALSPEED = config.DEFAULTTERMINALSPEED;

	// status variables
	this.onGround = false; // start in the air (can also take value of the block underneath, REGBLOCK, etc.)
	this.isStationary = false;
	this.inStairs = false;
	this.disableJump = false; // used for stairs for example, temporary flag, not allow player to jump
	// set as true when we hit a wall while in air ('regBlockInAir') and then
	// reset anytime our x changes or we hit ground
	this.upAgainstWall = false;

	this.movingLeft = false;
	this.movingUp = false;
	this.movingRight = false;
	this.movingDown = false;
	this.movingJump = false;
}

MovingEntity.prototype = Object.create(AnimatingEntity.prototype);

MovingEntity.prototype.update = function (dt) {
	AnimatingEntity.prototype.update.call(this, dt); // updates animations
	this._chooseAnimation();

	var oldX = this.x;
	var oldY = this.y;
	var nextX = this._findNextX(dt);
	var nextY = this._findNextY(dt);

	if (nextX === this.x && nextY === this.y && this.onGround && this.affectedByGravity) {
		this.isStationary = true;
	} else {
		this.isStationary = false;
	}

	// reset stairs
	if (this.inStairs) {
		this.speedY = 0.0;
		this.inStairs = false; // if we are still in stairs, this should be set back to true during collision check
		this.onGround = this.isOnGround(); // need to check for this here
	}
	// reset water
	if (this.inWater) {
		this.affectedByGravity = false;
		this.inWater = false; // should get set back to true if we are still in water on collision check
	} else {
		if (!config.snakeMode) {
			this.affectedByGravity = true;
		}
	}

	// collision is false if no collision, otherwise object with 
	// {'bgCollision': {.block, .gridX and .gridY}, 'entityCollision' : entity (or false)}
	var collision = this.isColliding(nextX, nextY);
	if (collision) {
		var bgCollision = this._handleBackgroundCollision(collision.bgCollision, nextX, nextY);
		var entCollision = this._handleEntityCollision(collision.entityCollision);
		if (!bgCollision && !entCollision) {
			collision = false;
		}
	}
	// move if no collision or collision with something which set us as no collision
	if (!this.isStationary && !collision && !this.upAgainstWall) {
		this._updatePos(nextX, nextY);
	}
	// we hit a regblock on either side (with feet) but are still in air, meaning
	// we want only to stop in x direction
	// (also doesn't work in snake mode)
	if (this.upAgainstWall) {
		this._updatePos(this.x, nextY);
	}

	if (config.gravity && this.affectedByGravity && !this.inStairs) {
		// only check when we move if we are not on ground anymore (check background under us for collision)
		// also check if we are pressing down (so we can move down stairs)
		if (!this.isStationary) {
			if (this.onGround && collision) {
				this.clipToGround();
			}
			// Don't check for ground if we are moving up!
			if (!(nextY < oldY)) {
				this.onGround = this.isOnGround(); // returns false, or the block we're on (1,2,5 (or REGBLOCK, etc..))
				if (this.onGround) {
					this.upAgainstWall = false;
				}
			}
		}

		// update speedY with acceleration
		if (!this.onGround) {
			this.speedY = this._updateSpeed(this.speedY, this.accelerationY, dt);
		}

		// jump !
		if (!this.disableJump && this.onGround && this.movingJump) {
			this.speedY -= this.JUMPSPEED;
			this.onGround = false;
			this.movingJump = false; // jump is single hit (hit once, activates it)
		}

		// reallow jump if we move in x coordinate (for coming up from stairs)
		// and realize we are not against wall anymore
		if (oldX !== this.x) {
			this.disableJump = false;
			this.upAgainstWall = false;
		}

		if (!collision) {
			this.upAgainstWall = false;
		}
	}

	if (this.moveThroughScenes) {
		// let's not move if we can't get another scene
		if (!this._checkForSceneChange()) {
			this.x = oldX;
			this.y = oldY;
		}
	} else {
		// if we can't move through scenes, we die on going out of bounds
		if (this._offScreen()) {
			global.get('entityManager').destroy(this.id);
		}
	}

	this._resetMoves();
};

MovingEntity.prototype.draw = function () {
	if (this.orientation === 'right') {
		this.sprite.draw(this.x, this.y, this.spritePosition);
	} else {
		this.sprite.drawMirrored(this.x, this.y, this.spritePosition);
	}

	this._drawBoundingBox();
};

MovingEntity.prototype.moveLeft = function () {
	this.movingLeft = true;
};
MovingEntity.prototype.moveUp = function () {
	this.movingUp = true;
};
MovingEntity.prototype.moveRight = function () {
	this.movingRight = true;
};
MovingEntity.prototype.moveDown = function () {
	this.movingDown = true;
};
MovingEntity.prototype.moveJump = function () {
	this.movingJump = true;
};
// set all possible moves as false
MovingEntity.prototype._resetMoves = function () {
	this.movingLeft = false;
	this.movingUp = false;
	this.movingRight = false;
	this.movingDown = false;
	this.movingJump = false;
};

// Depending on our state, select which sprite animation to display
MovingEntity.prototype._chooseAnimation = function () {
	if (this.jumps && !this.onGround && this.affectedByGravity && !this.inStairs) {
		this._setAnimation('jump');
	} else if (this.isStationary && this.affectedByGravity && !this.inStairs) {
		this._setAnimation('still');
	} else if (this.walks && !this.isStationary && this.affectedByGravity && !this.inStairs) {
		this._setAnimation('walk');
	} else if (this.climbsStairs && this.inStairs && this.affectedByGravity) {
		this._setAnimation('stairs');
	} else if (this.inWater) {
		this._setAnimation('swim');
	} else if (this.flies && !this.affectedByGravity) {
		this._setAnimation('fly');
	} else {
		util.warn('Warning, no animation possible for ' + this.name);
	}
};

MovingEntity.prototype._findNextX = function (dt) {
	var nextX = this.x;
	if (this.movingRight) {
		nextX = this.x + Math.floor(this.speedX * dt);
		this.orientation = 'right';
	} 
	if (this.movingLeft) {
		nextX = this.x - Math.floor(this.speedX * dt);
		this.orientation = 'left';
	}
	return nextX;
};

MovingEntity.prototype._findNextY = function (dt) {
	var nextY = this.y;
	// snake mode and stairs
	if (!this.affectedByGravity || this.inStairs) {
		this.speedY = this.speedX;
		if (this.movingUp) {
			nextY = this.y - Math.floor(this.speedY * dt);
		} 
		if (this.movingDown) {
			nextY = this.y + Math.floor(this.speedY * dt);
		}
	}
	// allow down movement if we are on top of stairs or top of water
	if (this.onGround === consts.STAIRTOPBLOCK || this.disableJump || 
		this.onGround === consts.WATERTOPBLOCK) {
		if (this.movingDown) {
			this.inStairs = true;
			this.speedY = this.speedX;
			nextY = this.y + Math.floor(this.speedY * dt);
		}
	}
	// normal gravity
	if (config.gravity && this.affectedByGravity && !this.inStairs) {
		nextY = this._applyAcceleration(this.y, this.speedY, this.accelerationY, dt);
	}
	return nextY;
};

MovingEntity.prototype._handleBackgroundCollision = function (collision, nextX, nextY) {
	// Handle all the different blocks we could be colliding with.
	if (!collision) {
		return false;
	} else if (collision.block === consts.REGBLOCK) {
		// check if we are colliding on either side, then we return 'regBlockInAir' (e.g. stairs or wall)
		// this is to prevent being able do press right/left and get stuck in air
		var bg = global.get('background');
		var leftGridX = util.pixelToGrid(nextX, nextY, bg.getGridWidth(), bg.getGridHeight()).gridX;
		var rightGridX = util.pixelToGrid(nextX + this.width, nextY, bg.getGridWidth(), bg.getGridHeight()).gridX;
		var forwardGridX = this.orientation === 'right' ? rightGridX : leftGridX;
		if (!this.onGround && !config.snakeMode &&
			forwardGridX === collision.gridX) {
			// now make sure we are also not bumping our head into regblock (so check that collision.gridY
			// is not our head and that we are not going up at the same time)
			var playerGridY = util.pixelToGrid(nextX, nextY, bg.getGridWidth(), bg.getGridHeight()).gridY;
			if (playerGridY !== collision.gridY || (playerGridY === collision.gridY && this.y < nextY)) {
				this.upAgainstWall = true;
				return false;
			}
		}
		// halt
		this.speedY = 0;
	} else if (	collision.block === consts.PLATFORMBLOCK || collision.block === consts.STAIRTOPBLOCK ||
				collision.block === consts.WATERTOPBLOCK) {
		// check for top of stairs block
		if (collision.block === consts.STAIRTOPBLOCK && (this.movingUp || this.movingDown)) {
			this.inStairs = true;
			this.disableJump = true; // so we don't jump directly out of stairs, is reset on x movement
		}
		if (collision.block === consts.WATERTOPBLOCK && (this.movingUp || this.movingDown)) {
			this.inWater = true;
		}

		var gridX = collision.gridX;
		var gridY = collision.gridY;
		var bg = global.get('background');
		// only count this as collision if we are coming from above the block and on our way down (and not in stairs)
		if (!this.inStairs && !this.inWater
			&& this.y + this.height <= util.gridToPixel(gridX, gridY, bg.getGridWidth(), bg.getGridHeight()).y
			&& this.y < nextY) {
			// halt
			this.speedY = 0;
		} else {
			// treat as 'no collision'
			return false
		}

	} else if (collision.block === consts.STAIRBLOCK || collision.block === consts.WATERBLOCK) {
		// only treat player as in stairs if he's moving up or down
		if (this.movingUp || this.movingDown) {
			this.inStairs = true;
		}
		if (collision.block === consts.WATERBLOCK) {
			this.inWater = true; // for the animation
		}
		// treat as 'no collision'
		return false;
	} else if (	collision.block === consts.TELEBLOCK || collision.block === consts.SECONDARYTELEBLOCK ||
				collision.block === consts.TERTIARYTELEBLOCK) {
		// TELEBLOCKS only teleport you to next scene if your feet are touching it
		// check if y grid coordinate of our feet match the y grid coordinate of the collision
		var bg = global.get('background');
		if (util.pixelToGrid(this.x, this.y + this.height, bg.getGridWidth(), bg.getGridHeight()).gridY === collision.gridY) {
			var direction;
			switch (collision.block) {
				case consts.SECONDARYTELEBLOCK:
					direction = 'secondary-special';
					break;
				case consts.TERTIARYTELEBLOCK:
					direction = 'tertiary-special';
					break;
				default:
					direction = 'special';
					break;
			}
			global.get('background').requestNextScene(this, direction);
		} else {
			// treat as 'no collision'
			return false;
		}
	} else if (collision.block === consts.WATERBLOCK && this.swims) {
		// swimming anyone?
		this.inWater = true;
		//return false;
	} else {
		util.warn('Warning, unhandled bgcollision, treating like no collision.');
		return false;
	}

	return true;
};

MovingEntity.prototype._checkForSceneChange = function () {
	var canvas = global.get('canvas');
	var background = global.get('background');
	var sceneChangeSuccess = true;
	if (this.x > canvas.width) {
		sceneChangeSuccess = background.requestNextScene(this, 'right');
	} else if (this.x < 0) {
		sceneChangeSuccess = background.requestNextScene(this, 'left');
	} else if (this.y > canvas.height - this.height) {
		// when moving down, teleport the moment we hit bottom with our feet
		sceneChangeSuccess = background.requestNextScene(this, 'down');
	} else if (this.y < -this.height) {
		// when moving up, teleport the moment our feet leave the frame
		sceneChangeSuccess = background.requestNextScene(this, 'up');
	}
	return sceneChangeSuccess;
};

// Returns true iff we are off screen (not visible)
MovingEntity.prototype._offScreen = function () {
	var canvas = global.get('canvas');
	return this.x > canvas.width || this.x + this.width < 0 || this.y > canvas.height || this.y + this.height < 0;
};

MovingEntity.prototype.getSpeedY = function () {
	return this.speedY;
};

// value === true or false
MovingEntity.prototype.setAsFlying = function (value) {
	this.affectedByGravity = !value;
};

global.set('class/MovingEntity', MovingEntity);

}());