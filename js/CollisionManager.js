// Collision manager

(function () {

'use strict';

// imports
var util = global.get('util');

function CollisionManager() {

}

CollisionManager.prototype.isColliding = function isColliding(entity) {
	// is colliding with background ?
	var bgCollision = global.get('background')
						.isRectangleCollidingWith(entity.x, entity.y, entity.width, entity.height);
	return bgCollision;

	// is colliding with something else ?
};

global.set('class/CollisionManager', CollisionManager);

}());