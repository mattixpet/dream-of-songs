// Entity, base class for all objects
// 'The basic entity' does nothing except fall and collide
// Any more complicated entities should override functions
// All entities must be registered with EntityManager, see EntityManager.js 
//  and the first line in the default constructor function Entity() here below

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');
var draw = global.get('draw');

function Entity(sprite, posX, posY, affectedByGravity) {
	global.get('entityManager').register(this);

	this.sprite = sprite;

	this.x = posX;
	this.y = posY;
	this.width = this.sprite.getWidth();
	this.height = this.sprite.getHeight();

	this.speedY = 0.0;
	this.TERMINALSPEED = config.DEFAULTTERMINALSPEED;

	this.onGround = false;
	this.affectedByGravity = affectedByGravity;
}

Entity.prototype.draw = function () {
	this.sprite.draw(this.x, this.y, 0);

	if (config.drawBoundingBoxes) {
		draw.drawBox(global.get('ctx'), this.x, this.y, this.width, this.height, 'red');
	}
};

Entity.prototype.update = function (dt) {
	if (config.gravity && this.affectedByGravity && !this.onGround) {
		var nextY = this._applyAcceleration(this.y, this.speedY, config.GRAVITYCONSTANT, dt);

		var collision = this.isColliding(this.x, nextY);
		if (!collision) {
			// move
			this.y = nextY;
		} else if (global.get('background').getStandableBlocks().indexOf(collision.block) > -1) {
			// landed
			this.onGround = true;
			this.clipToGround();
		} else {
			// hit block with no collision we want, let's move
			this.y = nextY;
		}

		if (config.gravity && !this.onGround) {
			this.speedY = this._updateSpeed(this.speedY, config.GRAVITYCONSTANT, dt);
		}
	}
};

// returns the new y coordinate given the affects of gravity (or acceleration given)
Entity.prototype._applyAcceleration = function (y, speed, acceleration, dt) {
	// displacement = speed * time + 1/2 * acceleration * time squared
	return y + Math.floor(speed * dt + acceleration * dt * dt);
};

// update speed given acceleration, initial speed and dt.
// capped at this.TERMINALSPEED
Entity.prototype._updateSpeed = function (speed, acceleration, dt) {
	// update speed with acceleration
	var oldSpeed = speed;
	var newSpeed = speed + acceleration * dt;
	if (newSpeed > this.TERMINALSPEED) {
		newSpeed = oldSpeed;
	}
	return newSpeed;
};

Entity.prototype.setId = function (id) {
	this.id = id;
};

// check whether entity is colliding given top left position x, y
Entity.prototype.isColliding = function (x, y) {
	return global.get('collisionManager').isColliding(this, x, y);
};

Entity.prototype.isOnGround = function () {
	return global.get('collisionManager').isEntityOnGround(this, this.x, this.y);
};

// Clip to grid for bottom coordinates of entity
// basically, clip at most (but never exactly) 1 grid down in y direction
Entity.prototype.clipToGround = function () {
	var canvas = global.get('canvas');
	var gridH = global.get('background').getGridHeight();
	// only change y coords, Math.ceil because we are clamping down
	// 1 pixel offset so not to be stuck with the background and colliding
	var gridBrickSize = canvas.height / gridH;
	this.y = -1 + Math.ceil(this.y / gridBrickSize) * gridBrickSize;
};

Entity.prototype.getX = function () {
	return this.x;
};

Entity.prototype.getY = function () {
	return this.y;
};

Entity.prototype.setX = function(x) {
	this.x = x;
};

Entity.prototype.setY = function(y) {
	this.y = y;
};

global.set('class/Entity', Entity);

}());
