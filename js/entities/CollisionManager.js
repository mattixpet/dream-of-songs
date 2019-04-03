// Collision manager

(function () {

'use strict';

// imports
var util = global.get('util');
var collision = global.get('collision'); // helper library

function CollisionManager() {

}

// Is entity colliding with anyone given entities top left position x, y?
// returns {'bgCollision' : bgCollision, 'entityCollision' : entity or false}
// or false if neither colliding with entity or background
CollisionManager.prototype.isColliding = function (entity, x, y) {
	// is colliding with background ?
	var bgCollision = global.get('background')
						.isRectangleCollidingWith(x, y, entity.width, entity.height);

	// is colliding with something else ?
	var entityCollision = this._collidingWithEntity(entity, x, y);
	
	if (!bgCollision && !entityCollision) {
		return false;
	}

	return {'bgCollision' : bgCollision, 'entityCollision' : entityCollision};
};

// return entity we are colliding with otherwise false
CollisionManager.prototype._collidingWithEntity = function (entity, x, y) {
	var entities = global.get('entityManager').getEntities();
	for (var key in entities) {
		var ent = entities[key];
		// we would always collide with ourselves, so let's skip that one
		// also no one collides with torches
		if (ent !== entity && ent.getName() !== 'torch') {
			// check for collision
			if (collision.rectCollision(
					x, y, entity.width, entity.height,
					ent.getX(), ent.getY(), ent.getWidth(), ent.getHeight()
				)) {
				return ent;
			}
		}
	}
	return false;
};

CollisionManager.prototype.isEntityOnGround = function (entity, x, y) {
	// background.isEntityOnGround takes arguments of botLeft and botRight coords
	var onGround = global.get('background')
					.isEntityOnGround([x, y + entity.height], [x + entity.width, y + entity.height]);
	return onGround;
};

global.set('class/CollisionManager', CollisionManager);

}());