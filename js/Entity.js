// Entity, base class for all objects

(function () {

'use strict';

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

global.set('class/Entity', Entity);

}());
