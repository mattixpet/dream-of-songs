// Raven on the cross. Stays still until you jump him, then flies away. As a raven do.

(function () {

'use strict';

var Entity = global.get('class/Entity');

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
const COLLISIONWIDTHREDUCTION = 20;
const COLLISIONHEIGHTREDUCTION = 5;

function Raven(posX, posY) {
	this.name = 'raven';

	Entity.call(this, global.get('imageHandler').getSprite('raven'), posX, posY, false);

	this.width -= COLLISIONWIDTHREDUCTION;
	this.height -= COLLISIONHEIGHTREDUCTION;

	this.speed = 0.2; // how fast can we flyyy.

	this.timeElapsed = 0;
	this.prevAnimation = WINGS1;
	this.animation = LEFT;
	this.mode = 'still'; // still or flying
}

Raven.prototype = Object.create(Entity.prototype);

// Entities which collide with me can chase me away :(
// I'm such a lonesome raven.
Raven.prototype.chaseAway = function () {
	this.mode = 'flying';
};

Raven.prototype.update = function (dt) {
	this.timeElapsed += dt; // dt is in milliseconds

	if (this.mode === 'still') {
		this._stillUpdate();
	} else if (this.mode === 'flying') {
		this._flyingUpdate(dt);
	}

	// 'destroy' us when we leave the screen, never to return
	if (this.y < -this.height) {
		global.get('entityManager').destroy(this.id);
	}
};

// In still mode, stay still for LEFTDURATION and
// then look RIGHT or flap WINGS1 for a moment at random
Raven.prototype._stillUpdate = function () {
	if (this.timeElapsed > LEFTDURATION && this.animation === LEFT && this.prevAnimation === WINGS1) {
		this.timeElapsed = 0;
		this.animation = RIGHT;
	} else if (this.timeElapsed > RIGHTDURATION && this.animation === RIGHT) {
		this.timeElapsed = 0;
		this.animation = LEFT;
		this.prevAnimation = RIGHT;
	} else if (this.timeElapsed > LEFTDURATION && this.animation === LEFT && this.prevAnimation === RIGHT) {
		this.timeElapsed = 0;
		this.animation = WINGS1;
	} else if (this.timeElapsed > WINGSDURATION && this.animation === WINGS1) {
		this.timeElapsed = 0;
		this.animation = LEFT;
		this.prevAnimation = WINGS1;
	}
};

Raven.prototype._flyingUpdate = function (dt) {
	if (this.timeElapsed > FLYINGANIMATIONTIME) {
		this.timeElapsed = 0;
		this.animation = this.animation === WINGS1 ? WINGS2 : WINGS1; // alternate
	}

	// fly diagonally away up and left!
	var s = this.speed * dt; // s is distance
	this.x -= s;
	this.y -= s;
};

Raven.prototype.draw = function () {
	this.sprite.draw(this.x, this.y, this.animation);

	this._drawBoundingBox();
};

global.set('class/Raven', Raven);

}());
