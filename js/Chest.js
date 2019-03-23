// Chest, class for a treasure chest containing the songs

(function () {

'use strict';

var config = global.get('config');
var draw = global.get('draw');
var Entity = global.get('class/Entity');

// chest animations
const NORMAL = 0;
const NORMALOPEN = 1;
const FLIPPED = 2;
const FLIPPEDOPEN = 3;

// draw the sprite a bit lower than the collision box because of semi-3d
const COLLISIONYDELTA = 5;
const COLLISIONHEIGHTREDUCTION = 10;

function Chest(posX, posY, flip) {
	// use Entity constructor, then overwrite what we need to/ set what we need to after
	Entity.call(this, global.get('imageHandler').getSprite('chest'),
				posX, posY, true);

	this.name = 'chest';
	this.animation = flip ? FLIPPED : NORMAL;

	this.width = this.sprite.getWidth();
	this.height = this.sprite.getHeight() - COLLISIONHEIGHTREDUCTION;

	// set as true once player has gotten the song from us
	this.looted = false;
}

Chest.prototype = Object.create(Entity.prototype);

Chest.prototype.draw = function () {
	this.sprite.draw(this.x, this.y - COLLISIONYDELTA, this.animation);

	if (config.drawBoundingBoxes) {
		draw.drawBox(global.get('ctx'), this.x, this.y, this.width, this.height, 'red');
	}
};

Chest.prototype._updateSpecific = function (dt) {

};

// Player calls this when he loots us
Chest.prototype.loot = function () {
	if (!this.looted) {
		this.looted = true;
		this.animation = this.animation === NORMAL ? NORMALOPEN : FLIPPEDOPEN;
	}
};

global.set('class/Chest', Chest);

}());
