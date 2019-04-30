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

	this._setSpriteExtraInfo();

	this.width = this.sprite.getWidth();
	this.height = this.sprite.getHeight() - this.COLLISIONHEIGHTREDUCTION;

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
		this.sprite.draw(this.x, this.y - this.COLLISIONYDELTA, this.animation);
	}

	this._drawBoundingBox();

	if (this.invisible && config.showHiddenChests) {
		this._drawHint(); // draw something so player can see us
	}
};

// Draw a few stars at our location so player can see us
Chest.prototype._drawHint = function () {
	var starSize = this.starSize;
	var lineWidth = this.starLineWidth;
	var mX = this.x + Math.floor(this.width / 2);
	var mY = this.y + Math.floor(this.height / 2);

	// draw three stars
	var color = this.looted ? 'teal' : 'blue';
	draw.drawStar( 
		mX-Math.floor(this.width/4), 
		mY-Math.floor(this.height/4), 
		starSize, 
		lineWidth, 
		color
	);
	draw.drawStar(
		mX+Math.floor(this.width/4), 
		mY-Math.floor(this.height/8), 
		starSize, 
		lineWidth, 
		color
	);
	draw.drawStar(
		mX-Math.floor(this.width/8), 
		mY+Math.floor(this.height/4), 
		starSize, 
		lineWidth, 
		color
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

// sets info like COLLISIONDELTAS we need etc.
Chest.prototype._setSpriteExtraInfo = function () {
	// draw the sprite a bit lower than the collision box because of semi-3d
	this.COLLISIONYDELTA = global.get('sprite-data').chest.COLLISIONYDELTA;
	this.COLLISIONHEIGHTREDUCTION = global.get('sprite-data').chest.COLLISIONHEIGHTREDUCTION;

	this.starSize = global.get('sprite-data').chest.starSize;
	this.starLineWidth = global.get('sprite-data').chest.starLineWidth;
};

Chest.prototype.resetResolution = function (ratio) {
	Entity.prototype.resetResolution.call(this, ratio);

	this._setSpriteExtraInfo();
};

global.set('class/Chest', Chest);

}());
