// Water, class for water background animations.
// Currently only used in stalagmites scene
// Quick and dirty class to only show multiple big pngs with the water
// already in the correct spot for the background

(function () {

'use strict';

var AnimatingEntity = global.get('class/AnimatingEntity');

// constants
const ANIMATIONTIME = 100; // animate every .. milliseconds

function Water(sprite, posX, posY) {
	this.name = 'water';

	AnimatingEntity.call(this, sprite, posX, posY, false);

	this.animations = [];
	for (var i = 0; i < this.sprite.getNumPositions(); i++) {
		this.animations[i] = i;
	}

	this._addAnimation('normal', this.animations, ANIMATIONTIME, 'sequential', 'time');
	this._setAnimation('normal');
}

Water.prototype = Object.create(AnimatingEntity.prototype);

global.set('class/Water', Water);

}());
