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

// flip means which direction chest faces (left/right), flip is true if left
// invisible is true iff chest is not supposed to be drawn (meaning player has to find it without seeing it)
// message is an optional message to display once we're looted (located in menu-text-data under notificationMenu)
function Chest(posX, posY, flip, invisible, message) {
	this.name = 'chest'; // remember to set name before calling Entity constructor so it can use the name

	// use Entity constructor, then overwrite what we need to/ set what we need to after
	Entity.call(this, global.get('imageHandler').getSprite('chest'),
				posX, posY, true);

	this.animation = flip ? FLIPPED : NORMAL;

	this.invisible = invisible;

	this.width = this.sprite.getWidth();
	this.height = this.sprite.getHeight() - COLLISIONHEIGHTREDUCTION;

	// set as true once player has gotten the song from us
	this.looted = false;

	// optional message to display when we're looted
	this.message = message;

	// get our song !
	this.song = global.get('audioManager').getNewSong();
}

Chest.prototype = Object.create(Entity.prototype);

Chest.prototype.draw = function () {
	if (!this.invisible) {
		this.sprite.draw(this.x, this.y - COLLISIONYDELTA, this.animation);
	}

	if (config.drawBoundingBoxes) {
		draw.drawBox(global.get('ctx'), this.x, this.y, this.width, this.height, 'red');
	}
};

// Player calls this when he loots us
Chest.prototype.loot = function () {
	if (!this.looted) {
		this.looted = true;
		this.animation = this.animation === NORMAL ? NORMALOPEN : FLIPPEDOPEN;
		// let AudioManager know so he knows Player now has this song
		global.get('audioManager').notifySongOpened(this.song);
		// display optional message
		if (this.message) {
			global.get('notificationMenu').notify(this.message);
			global.get('notificationMenu').display();
		}
		return this.song;
	}
};

Chest.prototype.isLooted = function () {
	return this.looted;
};

Chest.prototype.isHidden = function () {
	return this.invisible;
};

Chest.prototype.containsMessage = function () {
	return this.message ? true : false;
};

global.set('class/Chest', Chest);

}());
