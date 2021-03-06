// Player class

(function () {

'use strict';

// imports
var config = global.get('config');
var consts = global.get('consts');
var draw = global.get('draw');
var util = global.get('util');
var MovingEntity = global.get('class/MovingEntity');

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
const STILLRIGHT1 = 8;
const STILLRIGHT2 = 9;
const STILLLEFT1 = STILLRIGHT2; // makes sense because it is mirrored
const STILLLEFT2 = 10;
const FLYING1 = 11;
const FLYING2 = 12;

function Player(posX, posY) {
	this.name = 'player';

	// sets all our sprite/resolution dependant stuff like COLLISIONDELTAS
	// and ANIMATIONDISTANC
	this._setSpriteExtraInfo();

	var movements = {
		'still' : {
			'positions' : STOP,
		},
		'walk' : {
			'positions' : [STOP, MOVE1, MOVE2, MOVE1, STOP, MOVE3, MOVE4, MOVE3],
			'distance' : this.ANIMATIONDISTANCE
		},
		'jump' : {
			'positions' : JUMP
		},
		'stairs' : {
			'positions' : [STAIR1, STAIR2],
			'distance' : this.ANIMATIONDISTANCE * 2
		},
		'swim' : {
			'positions' : [STOP, MOVE1, MOVE2, MOVE1, STOP, MOVE3, MOVE4, MOVE3], // same as walking
			'distance' : this.ANIMATIONDISTANCE
		},
		'fly' : {
			'positions' : [FLYING1, FLYING2],
			'distance' : this.ANIMATIONDISTANCE * 3
		}
	};
	MovingEntity.call(
		this, 
		global.get('imageHandler').getSprite(this.name),
		posX,
		posY,
		true, // affected by gravity
		movements,
		0.2, // speedX
		0, // speedY
		true, // move through scenes (go to next scene if we can)
		this._handleEntityCollision,
		0.4 // jump speed (singular increase in -y velocity on jump command)
	);

	this.gogglesSprite = global.get('imageHandler').getSprite('player-goggles');

	// collision width/height
	this.width = this.sprite.getWidth() - this.COLLISIONWIDTHREDUCTION;
	this.height = this.sprite.getHeight() - this.COLLISIONHEIGHTREDUCTION;

	this.timeStill = 0; // how long have we been standing still?
	 // set this as true only when drawing the still animations specifically (not stop e.g)
	this.inStillAnimation1 = false;
	this.inStillAnimation2 = false;

	this.numChests = 0;
	this.numHiddenChests = 0;

	this.noMoreSongs = false;
}

Player.prototype = Object.create(MovingEntity.prototype);

// Overwrite MovingEntities default .draw function to do our thing uninterrupted
Player.prototype.draw = function () {
	if (this.stationary) {
		this._drawStillAnimation();
	}

	// do sprite shifting to draw, so it makes sense compared to different animations
	// and the bounding box fits our body and not e.g. our wings
	var x = this.x;
	var y = config.snakeMode ? this.y - this.FLYINGMARGINY : this.y;
	if (this.orientation === 'right') {
		x -= this.inStairs ? this.STAIRMARGIN : 0;
		x -= this.inStillAnimation1 ? this.STILLMARGIN : 0;
		x -= config.snakeMode ? this.FLYINGMARGINX : 0;
		this.sprite.draw(x - this.COLLISIONXDELTA, y, this.spritePosition);
	} else {
		x += this.inStairs ? this.STAIRMARGIN : 0;
		x += this.inStillAnimation2 ? this.STILLMARGIN : 0;
		x += config.snakeMode ? this.FLYINGMARGINX : 0;
		this.sprite.drawMirrored(x - this.MIRROREDMARGIN - this.COLLISIONXDELTA, y, this.spritePosition);
	}

	// if we're in water or on scenes with only water display our swimming goggles !
	if (this.inWater || consts['FULLWATERSCENES'].indexOf(global.get('background').getCurrentScene()) >= 0) {
		if (this.orientation === 'right') {
			this.gogglesSprite.draw(x - this.gogglesRelativePos.x, y - this.gogglesRelativePos.y);
		} else {
			var margin = this.MIRROREDMARGIN;
			this.gogglesSprite.drawMirrored(x - this.gogglesRelativePos.x + margin, y - this.gogglesRelativePos.y);
		}
	}

	this._drawBoundingBox();
};

Player.prototype._drawStillAnimation = function () {
	// let's not start yet ! time until our first animation and time between our animations
	var startTime = 13000; // after this time we start still animation
	var waitTime = 13000;
	if (this.timeStill > startTime) {
		var delta = (this.timeStill - startTime) % waitTime;
		var totalAnimationTime = 1000; // 1 'second' for total thing (ball from one side to other)

		this.inStillAnimation1 = false;
		this.inStillAnimation2 = false;

		// depending on where we are, we draw the parts of the still animation
		if (delta < totalAnimationTime / 4) {
			// first step, show still animation 1
			this.spritePosition = this.orientation === 'right' ? STILLRIGHT1 : STILLLEFT1;
			this.inStillAnimation1 = true;
		} else if (delta >= totalAnimationTime / 4 && delta < 3 * totalAnimationTime / 4) {
			// second step, show normal stop animation
			this.spritePosition = STOP;
		} else if (delta >= totalAnimationTime && delta < 5 * totalAnimationTime / 4) {
			// third and final step, show still animation 2
			this.spritePosition = this.orientation === 'right' ? STILLRIGHT2 : STILLLEFT2;
			this.inStillAnimation2 = true;
		} else {
			// while waiting for next animation
			this.spritePosition = STOP;
		}

		if (delta < totalAnimationTime) {
			// depending on time, we also draw the correct ball placement
			var data = global.get('sprite-data').player;
			var n = data.stillAnimationNumPoints;
			var thick = data.stillAnimationThickness;
			var r = data.stillAnimationRadius;
			var c = data.stillAnimationColor;
			var bC = data.stillAnimationBorderColor;
			// the ball movement center is at our sprite center
			var x = this.orientation === 'right' ? 
						this.x + Math.floor(this.width / 4) : this.x + Math.floor(this.width / 1.5);
			var y = this.y + Math.floor(this.height / 6);
			// now to get our index in the draw.drawCirclePoint (position in circle)
			// we get it as a ratio of totalAnimationTime and numPoints / 2
			// and offset by numPoints / 2 because we start after half the circle movement
			// (starts at 0 radians and goes clockwise, so we start at pi radians)
			var ourN = Math.floor(n/2);
			// this little humpty dumpty because we want e.g. from 13-23 and then 0
			// instead of 12-23 as index
			var relativeIndex = Math.floor(delta / totalAnimationTime * ourN);
			var index = relativeIndex === ourN - 1 ? 0 : ourN + relativeIndex + 1;

			draw.drawCirclePointWithShadow(x, y, n, index, thick, r, c, bC);
		}
	}
};

Player.prototype.update = function (dt) {
	this._handleInput(); // call this.moveLeft, moveJump, etc. if player is pressing the right keys

	MovingEntity.prototype.update.call(this, dt);

	if (this.stationary) {
		this.timeStill += dt;
	} else {
		this.timeStill = 0;
	}
};

Player.prototype._handleInput = function () {
	if (util.eatKey(consts.KEY_RIGHT) || util.eatKey(consts.KEY_D)) {
		this.moveRight();
	}
	if (util.eatKey(consts.KEY_LEFT) || util.eatKey(consts.KEY_A)) {
		this.moveLeft();
	}
	if (util.eatKey(consts.KEY_UP) || util.eatKey(consts.KEY_W)) {
		this.moveJump(); // jump and up are same keys for us
		this.moveUp();
	}
	if (util.eatKey(consts.KEY_DOWN) || util.eatKey(consts.KEY_S)) {
		this.moveDown();
	}
};

// Called by tools/input.js on a keyup
// if the keyup is one of our controls lets initiate a stop for that movement
Player.prototype.notifyKeyup = function (e) {
	if (e.keyCode === consts.KEY_RIGHT || e.keyCode === consts.KEY_D) {
		this.moveRight(true); // passing true here will stop the movement
	}
	if (e.keyCode === consts.KEY_LEFT || e.keyCode === consts.KEY_A) {
		this.moveLeft(true);
	}
	if (e.keyCode === consts.KEY_UP || e.keyCode === consts.KEY_W) {
		//this.moveJump(true); // jump and up are same keys for us
		this.moveUp(true);
	}
	if (e.keyCode === consts.KEY_DOWN || e.keyCode === consts.KEY_S) {
		this.moveDown(true);
	}
};

Player.prototype._handleEntityCollision = function (entity) {
	if (entity) {
		if (entity.getName() === 'chest') {
			this._handleChestCollision(entity);
		} else if (entity.getName() === 'raven') {
			this._handleRavenCollision(entity);
		}
		// else - we don't handle any more entities
	}

	return false;
};

Player.prototype._handleRavenCollision = function (raven) {
	var bg = global.get('background');
	var gridWidth = bg.getGridWidth();
	var gridHeight = bg.getGridHeight();
	var ravenY = util.pixelToGrid(raven.getX() + raven.getWidth(), raven.getY() + raven.getHeight(), 
								  gridWidth, gridHeight).gridY;
	var playerY = util.pixelToGrid(this.x + this.width, this.y + this.height, gridWidth, gridHeight).gridY;
	// if we have a collision (our bounding box touching his) then we chase him away
	// if our feet are touching his or even further
	if (playerY <= ravenY) {
		raven.chaseAway();
	}
};

Player.prototype._handleChestCollision = function (chest) {
	// only handle as we really collided with this chest if our feet are touching it 
	// (so you can't jump and open them with your hat :P )
	// do that using our handy grid coordinates
	var bg = global.get('background');
	var gridWidth = bg.getGridWidth();
	var gridHeight = bg.getGridHeight();
	var chestY = util.pixelToGrid(chest.getX() + chest.getWidth(), chest.getY() + chest.getHeight(), 
								  gridWidth, gridHeight).gridY;
	var playerY = util.pixelToGrid(this.x + this.width, this.y + this.height, gridWidth, gridHeight).gridY;
	 // special case for when swimming or flying, open chest if we collide anywhere (the !this.affectedByGravity part)
	if ((!this.affectedByGravity || util.almostEqual(chestY, playerY, 1)) && !chest.isLooted()) {
		var songName = chest.loot(); // get that loot! (songName is undefined if we are out of songs)
		if (songName) {
			if (chest.isHidden() && this.numHiddenChests === 0) {
				// display first hidden chest notification
				this.numHiddenChests++;
				// skip this notification if chest already has message which will be displayed
				// in the rare chance that is players first hidden chest
				if (!chest.containsMessage()) {
					global.get('notificationMenu').notify('first-hidden-chest');
					global.get('notificationMenu').display();
				}
			} else if (chest.isHidden() && this.numHiddenChests > 0) {
				// display hidden chest popup
				this.numHiddenChests++;
				global.get('notificationMenu').notify('hidden-chest', [this.numHiddenChests, songName], 
														this.x, this.y, this.width, this.height);
			} else if (this.numChests === 0 && !chest.containsMessage()) {
				// display first chest notification, unless the chest has a message
				// (super unlikely that is players first chest, but just in case)
				global.get('audioGui').showControls(); // display the player in case user turned on fade before first chest
				global.get('notificationMenu').notify('first-chest');
				global.get('notificationMenu').display();

			} else if (this.numChests > 0) {
				// display general new chest congratulations popup
				global.get('notificationMenu').notify('general-chest', [this.numChests + 1, songName], 
														this.x, this.y, this.width, this.height);
			}

			this.numChests++;

			if (this.numChests >= consts.NUMCHESTS) {
				global.get('notificationMenu').notify('won-game');
				global.get('notificationMenu').display();

				if (config.sendAnalytics) {
					global.get('postToDb')({'type':'milestone', 'value':'beatgame'});
				}
			} else if (this.numChests === 51 && config.sendAnalytics) {
				global.get('postToDb')({'type':'milestone', 'value':'over50songs'});
			} else if (this.numChests === 101 && config.sendAnalytics) {
				global.get('postToDb')({'type':'milestone', 'value':'over100songs'});
			}
		} else {
			// no song ! display message only once
			if (!this.noMoreSongs) {
				global.get('notificationMenu').notify('no-song');
				global.get('notificationMenu').display();
				this.noMoreSongs = true;
			}
		}
	}
};

Player.prototype._setSpriteExtraInfo = function () {
	// since everything starts from top left, this is the offset for collision
	// meaning not count the first this.COLLISIONXDELTA pixels of the player sprite for collision
	var sprite_data = global.get('sprite-data');
	this.COLLISIONXDELTA = sprite_data.player.COLLISIONXDELTA;
	// how much to reduce the collision width of the player sprite
	this.COLLISIONWIDTHREDUCTION = sprite_data.player.COLLISIONWIDTHREDUCTION;
	// how much to move the mirrored sprite to the left, so bounding box fits sprite display
	this.MIRROREDMARGIN = sprite_data.player.MIRROREDMARGIN;

	this.COLLISIONHEIGHTREDUCTION = sprite_data.player.COLLISIONHEIGHTREDUCTION;
	// how much to shift drawing of sprite if in stairs, because of how I crop it from the spritesheet man
	this.STAIRMARGIN = sprite_data.player.STAIRMARGIN;
	this.STILLMARGIN = sprite_data.player.STILLMARGIN;
	this.FLYINGMARGINX = sprite_data.player.FLYINGMARGINX;
	this.FLYINGMARGINY = sprite_data.player.FLYINGMARGINY;
	this.ANIMATIONDISTANCE = sprite_data.player.ANIMATIONDISTANCE;

	// other data
	this.gogglesRelativePos = sprite_data.player.gogglesRelativePos;
};

Player.prototype.resetResolution = function (ratio) {
	MovingEntity.prototype.resetResolution.call(this, ratio);

	this._setSpriteExtraInfo();
};

global.set('class/Player', Player); // export

}());
