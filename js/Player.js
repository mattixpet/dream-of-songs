// Player class

(function () {

'use strict';

// imports
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

// magic numbers WOOOO
// since everything starts from top left, this is the offset for collision
// meaning not count the first COLLISIONXDELTA pixels of the player sprite for collision
const COLLISIONXDELTA = 10;
const COLLISIONWIDTHREDUCTION = 30; // how much to reduce the collision width of the player sprite
const MIRROREDMARGIN = 10; // how much to move the mirrored sprite to the left, so bounding box fits sprite display

function Player(posX, posY) {
	this.sprite = global.get('imageHandler').getSprite('player');
	this.x = posX;
	this.y = posY;
	this.speedX = 0.2;
	this.speedY = 0.0;
	this.accelerationY = 0.001; // gravity
	this.JUMPSPEED = 0.4;
	this.TERMINALSPEED = 0.5; // maximum speed character can go in y+ direction through acceleration of gravity
	// collision width/height
	this.width = this.sprite.getWidth() - COLLISIONWIDTHREDUCTION;
	this.height = this.sprite.getHeight();
	// status variables
	this.onGround = false; // start in the air
	this.isStationary = false;
	this.currentSprite = STOP;
	this.orientation = 'right'; // 'left'
	this.distanceTraveled = 0; // for sprite animations, keep record of distance traveled
	this.ANIMATIONDISTANCE = 30; // swap animations every X pixels in x direction
	// array of order of sprite animations to use for walking
	this.WALKINGANIMATIONS = [STOP, MOVE1, MOVE2, MOVE1, STOP, MOVE3, MOVE4, MOVE3];
}

Player.prototype = new Entity();

Player.prototype.draw = function () {
	// sprite calculations
	if (!this.onGround) {
		// always do same animation in air
		this.currentSprite = MOVE4;
	} else if (this.isStationary) {
		this.currentSprite = STOP;
	} else {
		this.currentSprite = this.WALKINGANIMATIONS[
								Math.floor(
									this.distanceTraveled / this.ANIMATIONDISTANCE
								)	% this.WALKINGANIMATIONS.length
							 ];
	}

	if (this.orientation === 'right') {
		this.sprite.draw(this.x, this.y, this.currentSprite);
	} else {
		this.sprite.drawMirrored(this.x - MIRROREDMARGIN, this.y, this.currentSprite);
	}

	if (consts.drawBoundingBoxes) {
		draw.drawBox(global.get('ctx'), this.x + COLLISIONXDELTA, this.y, this.width, this.height, 'red');
	}
};

Player.prototype.update = function (dt) {
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

	var nextY = this.y;
	if (consts.snakeMode) {
		// if gravity is not already off, take it off now, no gravity in snake mode !
		consts.gravity = false;
		this.speedY = this.speedX;
		if (keys[consts.KEY_UP] || keys[consts.KEY_W]) {
			nextY = this.y - Math.floor(this.speedY * dt);
		} 
		if (keys[consts.KEY_DOWN] || keys[consts.KEY_S]) {
			nextY = this.y + Math.floor(this.speedY * dt);
		}
	}

	// effects of gravity
	// displacement = speed * time + 1/2 * acceleration * time squared
	if (consts.gravity) {
		// jump !
		if (this.onGround && (util.eatKey(consts.KEY_UP) || util.eatKey(consts.KEY_W))) {
			this.speedY -= this.JUMPSPEED;
			this.onGround = false;
		}
		nextY = this.y + Math.floor(this.speedY * dt + this.accelerationY * Math.pow(dt, 2));
	}

	if (nextX === this.x && nextY === this.y) {
		this.isStationary = true;
	} else {
		this.isStationary = false;
	}

	if (!this.isColliding(nextX + COLLISIONXDELTA, nextY)) {
		this.distanceTraveled += Math.abs(nextX - this.x);

		this.x = nextX;
		this.y = nextY;

		// update speedY with acceleration
		if (!this.onGround && consts.gravity) {
			var oldSpeedY = this.speedY;
			this.speedY = this.speedY + this.accelerationY * dt;
			if (this.speedY > this.TERMINALSPEED) {
				this.speedY = oldSpeedY;
			}
		}
	} else if (consts.gravity) {
		// if a case of landing set a flag so as to not constantly check for ground collisions
		if (this.y < nextY) {
			this.onGround = true;
		}

		this.speedY = 0;
	}
};

global.set('class/Player', Player); // export

}());
