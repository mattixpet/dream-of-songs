// Water, class for water background animations.
// Currently only used in stalagmites scene
// Quick and dirty class to only show multiple big pngs with the water
// already in the correct spot for the background

(function () {

'use strict';

var Entity = global.get('class/Entity');

// Constants
const ANIMATIONTIME = 100; // animate every .. milliseconds

function Water(sprite, posX, posY) {
	this.name = 'water';

	Entity.call(this, sprite, posX, posY, false);

	// Every ANIMATIONTIME milliseconds, reset this to 0 and change animation
	this.timeElapsed = 0;

	this.NUMANIMATIONS = this.sprite.getNumPositions();
	this.animation = 0; // 0..this.NUMANIMATIONS-1
}

Water.prototype = Object.create(Entity.prototype);

Water.prototype.update = function (dt) {
	this.timeElapsed += dt; // dt is in milliseconds
	if (this.timeElapsed > ANIMATIONTIME) {
		this.timeElapsed = 0;
		this.animation = (this.animation + 1) % this.NUMANIMATIONS;
	}
};

Water.prototype.draw = function () {
	this.sprite.draw(this.x, this.y, this.animation);
};

global.set('class/Water', Water);

}());
