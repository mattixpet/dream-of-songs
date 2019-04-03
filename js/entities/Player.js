// Player class

(function () {

'use strict';

// imports
var config = global.get('config');
var consts = global.get('consts');
var draw = global.get('draw');
var util = global.get('util');
var Entity = global.get('class/Entity');

// LOCAL CONSTS
// animations
const STOP = 0;
const MOVE1 = 1;
const MOVE2 = 2;
const MOVE3 = 3;
const MOVE4 = 4;
const JUMP = 5;
const STAIR1 = 6;
const STAIR2 = 7;

// since everything starts from top left, this is the offset for collision
// meaning not count the first COLLISIONXDELTA pixels of the player sprite for collision
var sprite_data = global.get('sprite-data');
const COLLISIONXDELTA = sprite_data.player.COLLISIONXDELTA;
// how much to reduce the collision width of the player sprite
const COLLISIONWIDTHREDUCTION = sprite_data.player.COLLISIONWIDTHREDUCTION;
// how much to move the mirrored sprite to the left, so bounding box fits sprite display
const MIRROREDMARGIN = sprite_data.player.MIRROREDMARGIN;

const COLLISIONHEIGHTREDUCTION = sprite_data.player.COLLISIONHEIGHTREDUCTION;
// how much to shift drawing of sprite if in stairs, because of how I crop it from the spritesheet man
const STAIRMARGIN = sprite_data.player.STAIRMARGIN;
sprite_data = undefined;

function Player(posX, posY) {
	this.name = 'player';
	this.sprite = global.get('imageHandler').getSprite(this.name);
	this.x = posX;
	this.y = posY;
	this.speedX = 0.2;
	this.speedY = 0.0;
	this.accelerationY = config.GRAVITYCONSTANT;
	this.JUMPSPEED = 0.4;
	this.TERMINALSPEED = config.DEFAULTTERMINALSPEED; // maximum speed character can go in y+ direction through acceleration of gravity
	// collision width/height
	this.width = this.sprite.getWidth() - COLLISIONWIDTHREDUCTION;
	this.height = this.sprite.getHeight() - COLLISIONHEIGHTREDUCTION;
	// status variables
	this.onGround = false; // start in the air (can also take value of the block underneat, REGBLOCK, etc.)
	this.isStationary = false;
	this.inStairs = false;
	this.disableJump = false; // used for stairs for example, temporary flag, not allow player to jump
	this.currentSprite = STOP;
	this.orientation = 'right'; // 'left'
	// for sprite animations, keep record of distance traveled
	this.distanceTraveledX = 0;
	this.distanceTraveledY = 0;
	this.ANIMATIONDISTANCE = 30; // swap animations every X pixels in x or y direction
	// array of order of sprite animations to use for walking
	this.WALKINGANIMATIONS = [STOP, MOVE1, MOVE2, MOVE1, STOP, MOVE3, MOVE4, MOVE3];
	this.STAIRSANIMATIONS = [STAIR1, STAIR2];
}

Player.prototype = Object.create(Entity.prototype);

Player.prototype.draw = function () {
	// sprite calculations
	if (!this.onGround) {
		// always do same animation in air
		this.currentSprite = JUMP;
	} else if (this.isStationary) {
		this.currentSprite = STOP;
	} else {
		this.currentSprite = this.WALKINGANIMATIONS[
								Math.floor(
									this.distanceTraveledX / this.ANIMATIONDISTANCE
								)	% this.WALKINGANIMATIONS.length
							 ];
	}

	if (this.inStairs) {
		// update stair sprite twice as slow as walking sprite (the / 2)
		this.currentSprite = this.STAIRSANIMATIONS[
								Math.floor(
									this.distanceTraveledY / this.ANIMATIONDISTANCE / 2
								)	% this.STAIRSANIMATIONS.length
							 ];
	}

	var x = this.x;
	if (this.orientation === 'right') {
		x -= this.inStairs ? STAIRMARGIN : 0;
		this.sprite.draw(x - COLLISIONXDELTA, this.y, this.currentSprite);
	} else {
		x += this.inStairs ? STAIRMARGIN : 0;
		this.sprite.drawMirrored(x - MIRROREDMARGIN - COLLISIONXDELTA, this.y, this.currentSprite);
	}

	if (config.drawBoundingBoxes) {
		draw.drawBox(global.get('ctx'), this.x, this.y, this.width, this.height, 'red');
	}
};

Player.prototype.update = function (dt) {
	var oldX = this.x;
	var oldY = this.y;
	var nextX = this._findNextX(dt);
	var nextY = this._findNextY(dt);

	if (nextX === this.x && nextY === this.y && this.onGround) {
		this.isStationary = true;
	} else {
		this.isStationary = false;
	}

	// reset stairs
	if (this.inStairs) {
		this.speedY = 0.0;
		this.inStairs = false; // if we are still in stairs, this should be set back to true during collision check
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
	if (!this.isStationary && !collision) {
		this._updatePos(nextX, nextY);
	}


	// Do all updates !
	if (config.gravity && !this.inStairs) {
		// only check when we move if we are not on ground anymore (check background under us for collision)
		// also check if we are pressing down (so we can move down stairs)
		if (!this.isStationary) {
			if (this.onGround && collision) {
				this.clipToGround();
			}
			// Don't check for ground if we are moving up!
			if (!(nextY < oldY)) {
				this.onGround = this.isOnGround(); // returns false, or the block we're on (1,2,5 (or REGBLOCK, etc..))
			}
		}

		// update speedY with acceleration
		if (!this.onGround) {
			this.speedY = this._updateSpeed(this.speedY, this.accelerationY, dt);
		}

		// jump !
		if (!this.disableJump && this.onGround && (util.eatKey(consts.KEY_UP) || util.eatKey(consts.KEY_W))) {
			this.speedY -= this.JUMPSPEED;
			this.onGround = false;
		}
	}

	// check for scene change
	var canvas = global.get('canvas');
	var background = global.get('background');
	var sceneChangeSuccess = true;
	if (this.x >= canvas.width) {
		sceneChangeSuccess = background.requestNextScene(this, 'right');
	} else if (this.x <= -this.width) {
		sceneChangeSuccess = background.requestNextScene(this, 'left');
	} else if (this.y >= canvas.height) {
		sceneChangeSuccess = background.requestNextScene(this, 'down');
	} else if (this.y <= -this.height) {
		sceneChangeSuccess = background.requestNextScene(this, 'up');
	}
	// let's not move if we can't get another scene
	if (!sceneChangeSuccess) {
		this.x = oldX;
		this.y = oldY;
	}
};

Player.prototype._handleBackgroundCollision = function (collision, nextX, nextY) {
	// Handle all the different blocks we could be colliding with.
	if (!collision) {
		return false;
	} else if (collision.block === consts.REGBLOCK) {
		// halt
		if (config.gravity) {
			this.speedY = 0;
		}
	} else if (collision.block === consts.PLATFORMBLOCK || collision.block === consts.STAIRTOPBLOCK) {
		// check for top of stairs block
		if (collision.block === consts.STAIRTOPBLOCK && this._isUpOrDownPressed()) {
			this.inStairs = true;
			this.disableJump = true; // so we don't jump directly out of stairs, is reset on x movement
		}

		var gridX = collision.gridX;
		var gridY = collision.gridY;
		var bg = global.get('background');
		// only count this as collision if we are coming from above the block and on our way down (and not in stairs)
		if (!this.inStairs
			&& this.y + this.height < util.gridToPixel(gridX, gridY, bg.getGridWidth(), bg.getGridHeight())[1]
			&& this.y < nextY) {
			// halt
			if (config.gravity) {
				this.speedY = 0;
			}
		} else {
			// treat as 'no collision'
			return false
		}

	} else if (collision.block === consts.STAIRBLOCK) {
		// only treat player as in stairs if he's using up or down key
		if (this._isUpOrDownPressed()) {
			this.inStairs = true;
		}		
		// treat as 'no collision'
		return false;
	} else if (collision.block === consts.TELEBLOCK || collision.block === consts.SECONDARYTELEBLOCK) {
		// TELEBLOCK/SECONDARYTELEBLOCK only teleports you to next scene if your feet are touching it
		// check if y grid coordinate of our feet match the y grid coordinate of the collision
		var bg = global.get('background');
		if (util.pixelToGrid(this.x, this.y + this.height, bg.getGridWidth(), bg.getGridHeight())[1] === collision.gridY) {
			var direction = collision.block === consts.TELEBLOCK ? 'special' : 'secondary-special';
			global.get('background').requestNextScene(this, direction);
		} else {
			// treat as 'no collision'
			return false;
		}
	} else {
		util.warn('Warning, unhandled bgcollision, treating like no collision.');
		return false;
	}

	return true;
};

Player.prototype._handleEntityCollision = function (entity) {
	if (entity) {
		if (entity.getName() === 'chest') {
			// only handle as we really collided with this chest if our feet are touching it 
			// (so you can't jump and open them with your hat :P )
			// do that using our handy grid coordinates
			var bg = global.get('background');
			var gridWidth = bg.getGridWidth();
			var gridHeight = bg.getGridHeight();
			var chestY = util.pixelToGrid(entity.getX() + entity.getWidth(), entity.getY() + entity.getHeight(), 
										  gridWidth, gridHeight)[1];
			var playerY = util.pixelToGrid(this.x + this.width, this.y + this.height, gridWidth, gridHeight)[1];
			if (chestY === playerY) {
				entity.loot(); // get that loot!
			}
		}
		// else we don't know how to handle any more entities
	}

	return false;
};

Player.prototype._findNextX = function (dt) {
	var keys = global.get('keys');

	var nextX = this.x;
	if (keys[consts.KEY_RIGHT] || keys[consts.KEY_D]) {
		nextX = this.x + Math.floor(this.speedX * dt);
		this.orientation = 'right';
	} 
	if (keys[consts.KEY_LEFT] || keys[consts.KEY_A]) {
		nextX = this.x - Math.floor(this.speedX * dt);
		this.orientation = 'left';
	}
	return nextX;
};

Player.prototype._findNextY = function (dt) {
	var keys = global.get('keys');

	var nextY = this.y;
	// snake mode and stairs
	if (config.snakeMode || this.inStairs) {
		this.speedY = this.speedX;
		if (keys[consts.KEY_UP] || keys[consts.KEY_W]) {
			nextY = this.y - Math.floor(this.speedY * dt);
		} 
		if (keys[consts.KEY_DOWN] || keys[consts.KEY_S]) {
			nextY = this.y + Math.floor(this.speedY * dt);
		}
	}
	// allow down movement if we are on top of stairs
	if (this.onGround === consts.STAIRTOPBLOCK || this.disableJump) {
		if (keys[consts.KEY_DOWN] || keys[consts.KEY_S]) {
			this.inStairs = true;
			this.speedY = this.speedX;
			nextY = this.y + Math.floor(this.speedY * dt);
		}
	}
	// normal gravity
	if (config.gravity && !this.inStairs) {
		nextY = this._applyAcceleration(this.y, this.speedY, this.accelerationY, dt);
	}
	return nextY;
};

// Helper function to move player (update x,y)
Player.prototype._updatePos = function (nextX, nextY) {
	this.distanceTraveledX += Math.abs(nextX - this.x);
	this.distanceTraveledY += Math.abs(nextY - this.y);
	// reallow jump if we move in x coordinate (for coming up from stairs)
	if (this.x !== nextX) {
		this.disableJump = false;
	}

	this.x = nextX;
	this.y = nextY;
};

Player.prototype.getSpeedY = function () {
	return this.speedY;
};

// true if either w, s, up or down are being pressed (trying to move player up or down)
Player.prototype._isUpOrDownPressed = function () {
	return global.get('keys')[consts.KEY_W] || global.get('keys')[consts.KEY_S]
			|| global.get('keys')[consts.KEY_UP] || global.get('keys')[consts.KEY_DOWN];
};

Player.prototype._isDownPressed = function () {
	return global.get('keys')[consts.KEY_S] || global.get('keys')[consts.KEY_DOWN];
}

global.set('class/Player', Player); // export

}());
