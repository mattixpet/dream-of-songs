// Entity, base class for all objects

(function () {

'use strict';

var util = global.get('util');

function Entity() {
	this.id = undefined;

	this.x = undefined;
	this.y = undefined;
	this.width = undefined;
	this.height = undefined;
}

Entity.prototype.draw = function () {};

Entity.prototype.update = function (dt) {};

Entity.prototype.setId = function (id) {
	this.id = id;
}

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
}

Entity.prototype.getX = function () {
	return this.x;
}

Entity.prototype.getY = function () {
	return this.y;
}

Entity.prototype.setX = function(x) {
	this.x = x;
}

Entity.prototype.setY = function(y) {
	this.y = y;
}

global.set('class/Entity', Entity);

}());
