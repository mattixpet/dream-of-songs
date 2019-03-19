// Collision manager

(function () {

'use strict';

// imports
var util = global.get('util');

function CollisionManager() {

}

// Is entity colliding with anyone given entities top left position x, y?
CollisionManager.prototype.isColliding = function (entity, x, y) {
	// is colliding with background ?
	var bgCollision = global.get('background')
						.isRectangleCollidingWith(x, y, entity.width, entity.height);
	return bgCollision;

	// is colliding with something else ?
};

CollisionManager.prototype.isEntityOnGround = function (entity, x, y) {
	// background.isEntityOnGround takes arguments of botLeft and botRight coords
	var onGround = global.get('background')
					.isEntityOnGround([x, y + entity.height], [x + entity.width, y + entity.height]);
	return onGround;
}

global.set('class/CollisionManager', CollisionManager);

}());