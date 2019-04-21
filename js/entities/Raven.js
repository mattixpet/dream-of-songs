// Raven on the cross. Stays still until you jump him, then flies away. As a raven do.

(function () {

'use strict';

var AnimatingEntity = global.get('class/AnimatingEntity');

// constants
const LEFTDURATION = 4000; // stay still (head turned left) for x milliseconds
const RIGHTDURATION = 3000; // tilt head right while still for y milliseconds
const WINGSDURATION = 1500; // flap wings while still for z milliseconds
const FLYINGANIMATIONTIME = 300; // flap wings at this speed while flying away

// animations
const LEFT = 0;
const RIGHT = 1;
const WINGS1 = 2;
const WINGS2 = 3;

// just for the bounding box/collision
const COLLISIONWIDTHREDUCTION = global.get('sprite-data').raven.COLLISIONWIDTHREDUCTION;
const COLLISIONHEIGHTREDUCTION = global.get('sprite-data').raven.COLLISIONHEIGHTREDUCTION;

function Raven(posX, posY) {
	this.name = 'raven';

	AnimatingEntity.call(this, global.get('imageHandler').getSprite('raven'), posX, posY, false);

	this.width -= COLLISIONWIDTHREDUCTION;
	this.height -= COLLISIONHEIGHTREDUCTION;

	this.speed = 0.2; // how fast can we flyyy.

	this.mode = 'still'; // still or flying
	this._addAnimation(
		'still', 
		[LEFT, RIGHT, LEFT, WINGS1], 
		[LEFTDURATION, RIGHTDURATION, LEFTDURATION, WINGSDURATION],
		'sequential',
		'time'
	);
	this._addAnimation(
		'flying',
		[WINGS1, WINGS2],
		FLYINGANIMATIONTIME,
		'sequential',
		'time'
	);
	this._setAnimation(this.mode);
}

Raven.prototype = Object.create(AnimatingEntity.prototype);

// Entities which collide with me can chase me away :(
// I'm such a lonesome raven.
Raven.prototype.chaseAway = function () {
	this.mode = 'flying';
	this._setAnimation(this.mode);
};

Raven.prototype.update = function (dt) {
	AnimatingEntity.prototype.update.call(this, dt);

	if (this.mode === 'flying') {
		// fly diagonally away up and left!
		var s = this.speed * dt; // s is distance
		this.x -= s;
		this.y -= s;
	}

	// 'destroy' us when we leave the screen, never to return
	if (this.y < -this.height) {
		global.get('entityManager').destroy(this.id);
	}
};

global.set('class/Raven', Raven);

}());
