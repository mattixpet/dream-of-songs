// Collision manager

(function () {

'use strict';

// imports
var util = global.get('util');

function CollisionManager() {

}

// Is entity colliding with anyone given entities top left position x, y?
CollisionManager.prototype.isColliding = function isColliding(entity, x, y) {
	// is colliding with background ?
	var bgCollision = global.get('background')
						.isRectangleCollidingWith(x, y, entity.width, entity.height);
	return bgCollision;

	// is colliding with something else ?
};

global.set('class/CollisionManager', CollisionManager);

}());