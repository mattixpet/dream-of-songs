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

Entity.prototype.isColliding = function () {
	return global.get('collisionManager').isColliding(this);
};

global.set('class/Entity', Entity);

}());
