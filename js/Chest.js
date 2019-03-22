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
const COLLISIONYDELTA = 4;
const COLLISIONHEIGHTREDUCTION = 9;

function Chest(posX, posY, flip) {
	global.get('entityManager').register(this);

	this.sprite = global.get('imageHandler').getSprite('chest');
	this.animation = flip ? FLIPPED : NORMAL;

	this.x = posX;
	this.y = posY;
	this.width = this.sprite.getWidth();
	this.height = this.sprite.getHeight() - COLLISIONHEIGHTREDUCTION;

	this.speedY = 0.0;
	this.TERMINALSPEED = config.DEFAULTTERMINALSPEED;

	this.onGround = false;
	this.affectedByGravity = true;

	// set as true once player has gotten the song from us
	this.looted = false;
	// used for collision/changes assume chest only lands on ground and then doesn't move
	// when it lands, we update the y coordinate accordingly and never again correct
	// for the sprite/width/drawing mismatch
	this.correctedForSprite = false;
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
	this.looted = true;
	this.animation = this.animation === NORMAL ? NORMALOPEN : FLIPPEDOPEN;
};

global.set('class/Chest', Chest);

}());
