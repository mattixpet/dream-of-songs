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
const STILLMARGIN = sprite_data.player.STILLMARGIN;
const FLYINGMARGINX = sprite_data.player.FLYINGMARGINX;
const FLYINGMARGINY = sprite_data.player.FLYINGMARGINY;
const ANIMATIONDISTANCE = sprite_data.player.ANIMATIONDISTANCE;
sprite_data = undefined;

function Player(posX, posY) {
	this.name = 'player';

	var movements = {
		'still' : {
			'positions' : STOP,
		},
		'walk' : {
			'positions' : [STOP, MOVE1, MOVE2, MOVE1, STOP, MOVE3, MOVE4, MOVE3],
			'distance' : ANIMATIONDISTANCE
		},
		'jump' : {
			'positions' : JUMP
		},
		'stairs' : {
			'positions' : [STAIR1, STAIR2],
			'distance' : ANIMATIONDISTANCE * 2
		},
		'fly' : {
			'positions' : [FLYING1, FLYING2],
			'distance' : ANIMATIONDISTANCE * 3
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

	// collision width/height
	this.width = this.sprite.getWidth() - COLLISIONWIDTHREDUCTION;
	this.height = this.sprite.getHeight() - COLLISIONHEIGHTREDUCTION;

	this.timeStill = 0; // how long have we been standing still?
	 // set this as true only when drawing the still animations specifically (not stop e.g)
	this.inStillAnimation1 = false;
	this.inStillAnimation2 = false;

	this.numChests = 0;
	this.numHiddenChests = 0;
}

Player.prototype = Object.create(MovingEntity.prototype);

// Overwrite MovingEntities default .draw function to do our thing uninterrupted
Player.prototype.draw = function () {
	if (this.isStationary) {
		this._drawStillAnimation();
	}

	// do sprite shifting to draw, so it makes sense compared to different animations
	// and the bounding box fits our body and not e.g. our wings
	var x = this.x;
	var y = config.snakeMode ? this.y - FLYINGMARGINY : this.y;
	if (this.orientation === 'right') {
		x -= this.inStairs ? STAIRMARGIN : 0;
		x -= this.inStillAnimation1 ? STILLMARGIN : 0;
		x -= config.snakeMode ? FLYINGMARGINX : 0;
		this.sprite.draw(x - COLLISIONXDELTA, y, this.spritePosition);
	} else {
		x += this.inStairs ? STAIRMARGIN : 0;
		x += this.inStillAnimation2 ? STILLMARGIN : 0;
		x += config.snakeMode ? FLYINGMARGINX : 0;
		this.sprite.drawMirrored(x - MIRROREDMARGIN - COLLISIONXDELTA, y, this.spritePosition);
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

	if (this.isStationary) {
		this.timeStill += dt;
	} else {
		this.timeStill = 0;
	}
};

Player.prototype._handleInput = function () {
	var keys = global.get('keys');

	if (keys[consts.KEY_RIGHT] || keys[consts.KEY_D]) {
		this.moveRight();
	}
	if (keys[consts.KEY_LEFT] || keys[consts.KEY_A]) {
		this.moveLeft();
	}
	if (keys[consts.KEY_UP] || keys[consts.KEY_W]) {
		this.moveJump(); // jump and up are same keys for us
		this.moveUp();
	}
	if (keys[consts.KEY_DOWN] || keys[consts.KEY_S]) {
		this.moveDown();
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
	if (chestY === playerY && !chest.isLooted()) {
		var songName = chest.loot(); // get that loot!

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
			// also make the audio player visible
			global.get('audioGui').showControls();
			global.get('notificationMenu').notify('first-chest');
			global.get('notificationMenu').display();

		} else if (this.numChests > 0) {
			// display general new chest congratulations popup
			global.get('notificationMenu').notify('general-chest', [this.numChests + 1, songName], 
													this.x, this.y, this.width, this.height);
		}

		this.numChests++;
	}
};

global.set('class/Player', Player); // export

}());
