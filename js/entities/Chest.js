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
const COLLISIONYDELTA = global.get('sprite-data').chest.COLLISIONYDELTA;
const COLLISIONHEIGHTREDUCTION = global.get('sprite-data').chest.COLLISIONHEIGHTREDUCTION;

// flip means which direction chest faces (left/right), flip is true if left
// invisible is true iff chest is not supposed to be drawn (meaning player has to find it without seeing it)
// message is an optional message to display once we're looted (located in menu-text-data under notificationMenu)
// flying is true if chest should not fall with gravity and just float in air
function Chest(posX, posY, flip, invisible, message, flying) {
	this.name = 'chest';

	// use Entity constructor, then overwrite what we need to/ set what we need to after
	Entity.call(this, global.get('imageHandler').getSprite('chest'),
				posX, posY, !flying);

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

	this._drawBoundingBox();

	if (this.invisible && config.showHiddenChests) {
		this._drawHint(); // draw something so player can see us
	}
};

// Draw a few stars at our location so player can see us
Chest.prototype._drawHint = function () {
	var starSize = 10;
	var lineWidth = 1.2;
	var mX = this.x + Math.floor(this.width / 2);
	var mY = this.y + Math.floor(this.height / 2);
	// draw three stars
	draw.drawStar( 
		mX-Math.floor(this.width/4), 
		mY-Math.floor(this.height/4), 
		starSize, 
		lineWidth, 
		'blue'
	);
	draw.drawStar(
		mX+Math.floor(this.width/4), 
		mY-Math.floor(this.height/8), 
		starSize, 
		lineWidth, 
		'blue'
	);
	draw.drawStar(
		mX-Math.floor(this.width/8), 
		mY+Math.floor(this.height/4), 
		starSize, 
		lineWidth, 
		'blue'
	);
};

// Player calls this when he loots us
Chest.prototype.loot = function () {
	// we ran out of songs, so we couldn't get a song from AudioManager
	if (!this.song) {
		this.looted = true;
		this.animation = this.animation === NORMAL ? NORMALOPEN : FLIPPEDOPEN;
		return undefined;
	}

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
