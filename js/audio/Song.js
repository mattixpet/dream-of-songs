// Song is a helper class for AudioGUI
// Represents one song during a pause menu (there is a list of songs there)
// Can draw, and notify AudioGUI when a certain button is clicked (pause, download, seek)
//
// Has a Play/pause button, download button, displays the name of the song, and a bar to seek in the song
// In this order roughly:
//      
//                                 Name of song  ^
//             Play   Download                   | height
//                                 Bar to seek   |
//            <---------- width -------------->  |

(function () {

'use strict';

var draw = global.get('draw');
var collision = global.get('collision');

// x, y is topleft coord of bounding box of song
// year and duration are strings
// configuration is either 'menu' or 'game'
//  where menu means it's a song in a menu (only play, download and name/bar/time)
//  but game means it's in game, so we also show next/previous song buttons
function Song (name, x, y, year, duration, configuration) {
	this.name = name; // song name as in audio-data and AudioManager (and everywhere)

	this.x = x;
	this.y = y;
	this.year = year;
	this.duration = duration;

	this.configuration = configuration;

	// sprites
	var imageHandler = global.get('imageHandler');
	this.playSprite = imageHandler.getSprite('play');
	this.pauseSprite = imageHandler.getSprite('pause');
	this.downloadSprite = imageHandler.getSprite('download');
	this.barSprite = imageHandler.getSprite('bar');
	this.seekerSprite = imageHandler.getSprite('seeker');
	this.previousSprite = imageHandler.getSprite('previous');
	this.nextSprite = imageHandler.getSprite('next');

	this.barW = this.barSprite.getWidth();
	this.barH = this.barSprite.getHeight();
	this.iconW = this.playSprite.getWidth();
	this.fontSize = global.get('audio-gui-data')['Spacings'].fontSize;
	this.fontColor = global.get('audio-gui-data')['Spacings'].fontColor;
	this.font = global.get('audio-gui-data')['Spacings'].font;

	// store top left x,y pos for our controls as [x,y] (set in _populateRects)
	this.playPos = undefined;
	this.downloadPos = undefined;
	this.namePos = undefined;
	this.barPos = undefined;
	this.seekerPos = undefined;
	this.previousPos = undefined;
	this.nextPos = undefined;

	// fills this.playRect, this.downloadRect, etc. with relevant information
	this._populateRects();

	this.isPlaying = false; // display play button or pause button?
}

// Fills this.playRect, this.downloadRect, this.barRect and this.nameTopleft with information
// Make them ready for immediate drawing !
Song.prototype._populateRects = function (x, y) {
	var spacingData = global.get('audio-gui-data')['Spacings'];

	// just shorter more comfortable names here
	var margin = spacingData.margin;
	var itemMarginR = spacingData.itemMarginRight;

	// depending on if we're in game (show previous, play, next, download and name/bar) or
	// menu (show play, download and name/bar) we populate our rects accordingly
	// 
	// and this whole pos is not the best use of the sizes we got in audio-gui-data (kind of magic), 
	// but whatever, time to finish this game
	this.playPos = [this.x + margin, this.y + margin];
	// download rect is to right of play button in menu configuration
	this.downloadPos = [this.playPos[0] + this.iconW + itemMarginR,
						this.playPos[1]];
	// since we had the positions of first two icons already for the menu mode, let's just use them
	// and add ours/modify them to our needs for game (as opposed to menu)
	if (this.configuration === 'game') {
		this.previousPos = this.playPos;
		this.playPos = this.downloadPos;
		this.nextPos = [this.playPos[0] + this.iconW + itemMarginR,
						this.playPos[1]];
		this.downloadPos = [this.nextPos[0] + this.iconW + itemMarginR,
							this.nextPos[1]];
	}

	// this is common to menu and game configuration
	this.namePos = [this.downloadPos[0] + this.iconW + Math.floor(itemMarginR * 2),
					this.y + Math.floor(this.iconW / 1.75)];
	this.barPos = [this.namePos[0] - Math.floor(itemMarginR * 0.5), this.playPos[1] + Math.floor(this.iconW / 2.75)];
	this.timePos = [this.barPos[0] + this.barW + itemMarginR, this.barPos[1] + Math.floor(itemMarginR * 1.5)]; // not really proper use of right margin in the y coord here but who cares
	this.seekerPos = [this.barPos[0] + Math.floor(margin/2), this.barPos[1] + Math.floor(this.barH/8)];
};

// Only do something if the click is within our rects for play/pause, download, or the bar
// Value only needs to be set for play command here (as song name)
// or seek command (as place between 0 and 1)
// or download
Song.prototype.click = function (x, y) {
	// check for clicking play
	if (collision.pixelWithinRect(	x, y, this.playPos[0], this.playPos[1], 
									this.iconW, this.iconW)) {
		this.isPlaying = !this.isPlaying;
		return {'command': this.isPlaying ? 'play' : 'pause', 'value': this.name};
	}
	// check for download
	if (collision.pixelWithinRect(	x, y, this.downloadPos[0], this.downloadPos[1],
									this.iconW, this.iconW)) {
		return {'command': 'download', 'value' : this.name};
	}
	// check for the seeking bar
	if (collision.pixelWithinRect(	x, y, this.barPos[0], this.barPos[1],
									this.barW, this.barH)) {
		return {'command': 'seek', 'value': 0.5}; // NEEDS TO IMPLEMENT SEEKING THING
	}

	if (this.configuration === 'game') {
		// check for previous button
		if (collision.pixelWithinRect(	x, y, this.previousPos[0], this.previousPos[1],
										this.iconW, this.iconW)) {
			return {'command': 'previous', 'value' : undefined};
		}

		// check for next button
		if (collision.pixelWithinRect(	x, y, this.nextPos[0], this.nextPos[1],
										this.iconW, this.iconW)) {
			return {'command': 'next', 'value' : undefined};
		}
	}

	// not clicking anything of ours
	return false;
};

Song.prototype.draw = function (x, y) {
	// if we get coordinates to draw function, change ours and reinitialize
	if (x || x === 0) {
		this.x = x;
		this.y = y;
		this._populateRects(x,y);
	}

	if (!this.isPlaying) {
		this.playSprite.draw(this.playPos[0], this.playPos[1]);
	} else {
		this.pauseSprite.draw(this.playPos[0], this.playPos[1]);
	}
	this.downloadSprite.draw(this.downloadPos[0], this.downloadPos[1]);

	draw.fillText(	global.get('ctx'), this.name + ' (' + this.year + ')', this.namePos[0], this.namePos[1],
					this.font, this.fontSize, this.fontColor);
	draw.fillText(	global.get('ctx'), this.duration, this.timePos[0], this.timePos[1],
					this.font, this.fontSize, this.fontColor);

	this.barSprite.draw(this.barPos[0], this.barPos[1]);
	this.seekerSprite.draw(this.seekerPos[0], this.seekerPos[1]);

	// if we're in game, also draw previous/next buttons
	if (this.configuration === 'game') {
		this.previousSprite.draw(this.previousPos[0], this.previousPos[1]);
		this.nextSprite.draw(this.nextPos[0], this.nextPos[1]);
	}
};

Song.prototype.getName = function () {
	return this.name;
};

Song.prototype.isSetAsPlaying = function () {
	return this.isPlaying;
};

Song.prototype.setAsPaused = function () {
	this.isPlaying = false;
};

Song.prototype.setAsPlaying = function () {
	this.isPlaying = true;
};

Song.prototype.getConfiguration = function () {
	return this.configuration;
};

global.set('class/Song', Song);

}());