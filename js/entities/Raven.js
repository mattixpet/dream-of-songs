// Raven on the cross. Stays still until you jump him, then flies away. As a raven do.
// Flies to 3 other scenes, one at a time, and flies either right or left.
// After you chase him away from the third scene (his fourth), he flies back
//   to the cross and starts 'chilling'. :)

(function () {

'use strict';

var util = global.get('util');
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

	// still, flying or chilling (chilling only after we have gone to all scenes and back at the cross)
	this.mode = 'still'; 
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

	// goes from zeroth (starting scene) to first, second to third to fourth (last) 
	//   (see raven-hidden-data in raven-data.js)
	this.numberOfScene = 'zeroth';
	this.flyingDirection = 'left'; // default is left, but it is modified in chaseAway and depends on raven-hidden-data
	this.orientation = 'left'; // default
}

Raven.prototype = Object.create(AnimatingEntity.prototype);

// Entities which collide with me can chase me away :(
// I'm such a lonesome raven.
// Unless when I'm chillin, then I'm the life of the party.
Raven.prototype.chaseAway = function () {
	// can't be bothered if we're chilling
	if (this.mode !== 'chilling') {
		this.mode = 'flying';
		this._setAnimation(this.mode);

		// add our new scene to raven_data so we will be spawned there by entityManager
		//   when the time comes
		var raven_data = global.get('raven-data');
		// Make sure to only do this once for each scene though
		if (util.objLen(raven_data) === 0) {
			var hidden_data = global.get('raven-hidden-data');
			switch (this.numberOfScene) {
				case 'zeroth':
					this.numberOfScene = 'first';
					break;
				case 'first':
					this.numberOfScene = 'second';
					break;
				case 'second':
					this.numberOfScene = 'third';
					break;
				case 'third':
					this.numberOfScene = 'fourth';
					break;
				default:
					util.warn('Something wrong with raven being chased away!');
					return;
			}

			raven_data[hidden_data[this.numberOfScene].scene] = hidden_data[this.numberOfScene].coords;
			this.flyingDirection = hidden_data[this.numberOfScene].direction;
			this.orientation = this.flyingDirection;
		}
	}
};

Raven.prototype.update = function (dt) {
	AnimatingEntity.prototype.update.call(this, dt);

	if (this.mode === 'flying') {
		// fly diagonally away up and left or right!
		var s = this.speed * dt; // s is distance
		this.x = this.flyingDirection === 'left' ? this.x - s : this.x + s;
		this.y -= s;
	}

	// when we leave the screen just stop changing coordinates
	// unless it's when we are almost at our cross for the second time !
	if (this.y < -this.height - COLLISIONHEIGHTREDUCTION) {
		this.orientation = 'left'; // always look left while stationary
		this.mode = 'still';
		this._setAnimation(this.mode);
		if (this.numberOfScene === 'fourth') {
			this.mode = 'chilling';
		}
	}
};

Raven.prototype.draw = function () {
	if (this.orientation === 'left') {
		this.sprite.draw(this.x, this.y, this.spritePosition);
	} else {
		this.sprite.drawMirrored(this.x - COLLISIONWIDTHREDUCTION, this.y, this.spritePosition);
	}

	this._drawBoundingBox();
};

global.set('class/Raven', Raven);

}());
