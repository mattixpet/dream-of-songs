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
var util = global.get('util');

// x, y is topleft coord of bounding box of song
// year and duration are strings
// configuration is either 'menu' or 'game'
//  where menu means it's a song in a menu (only play, download and name/bar/time)
//  but game means it's in game, so we also show next/previous song buttons
// position is between 0 and 1 for the seeking bar
function Song (name, x, y, year, duration, configuration, position) {
	this.name = name; // song name as in audio-data and AudioManager (and everywhere)

	this.x = x;
	this.y = y;
	this.year = year;
	this.duration = duration;

	this.configuration = configuration;

	this.position = position ? position : 0;

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
	// these also set in _populateRects
	// valid bar length, is how much of the bar png to take into account for seeker calculations
	this.validBarLength = undefined;
	this.startingSeekerPos = undefined;

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
	this.playPos = {'x':this.x + margin, 'y':this.y + margin};
	// download rect is to right of play button in menu configuration
	this.downloadPos = {'x':this.playPos.x + this.iconW + itemMarginR,
						'y':this.playPos.y};
	// since we had the positions of first two icons already for the menu mode, let's just use them
	// and add ours/modify them to our needs for game (as opposed to menu)
	if (this.configuration === 'game') {
		this.previousPos = this.playPos;
		this.playPos = this.downloadPos;
		this.nextPos = {'x':this.playPos.x + this.iconW + itemMarginR,
						'y':this.playPos.y};
		this.downloadPos = {'x':this.nextPos.x + this.iconW + itemMarginR,
							'y':this.nextPos.y};
	}

	// this is common to menu and game configuration
	this.namePos = {'x':this.downloadPos.x + this.iconW + Math.floor(itemMarginR * 2),
					'y':this.y + Math.floor(this.iconW / 1.75)};
	this.barPos = {	'x':this.namePos.x - Math.floor(itemMarginR * 0.5), 
					'y':this.playPos.y + Math.floor(this.iconW / 2.75)};
	this.timePos = {'x':this.barPos.x + this.barW + itemMarginR, 
					'y':this.barPos.y + Math.floor(itemMarginR * 1.5)}; // not really proper use of right margin in the y coord here but who cares
	this.seekerPos = {	'x':this.barPos.x + Math.floor(margin/2), 
						'y':this.barPos.y + Math.floor(this.barH/8)};

	this.startingSeekerPos = util.shallowCopy(this.seekerPos);
	// set the valid bar length as the bar length - left margin * 3 because why not
	this.validBarLength = this.barW - (this.seekerPos.x - this.barPos.x) * 3;
};

// Only do something if the click is within our rects for play/pause, download, or the bar
// Value only needs to be set for play command here (as song name)
// or seek command (as place between 0 and 1)
// or download
Song.prototype.click = function (x, y) {
	// check for clicking play
	if (collision.pixelWithinRect(	x, y, this.playPos.x, this.playPos.y, 
									this.iconW, this.iconW)) {
		this.isPlaying = !this.isPlaying;
		return {'command': this.isPlaying ? 'play' : 'pause', 'value': this.name};
	}
	// check for download
	if (collision.pixelWithinRect(	x, y, this.downloadPos.x, this.downloadPos.y,
									this.iconW, this.iconW)) {
		return {'command': 'download', 'value' : this.name};
	}
	// check for the seeking bar
	if (collision.pixelWithinRect(	x, y, this.barPos.x, this.barPos.y,
									this.barW, this.barH)) {
		return {'command': 'seek', 'value': this._getSeekerPos(x)};
	}

	if (this.configuration === 'game') {
		// check for previous button
		if (collision.pixelWithinRect(	x, y, this.previousPos.x, this.previousPos.y,
										this.iconW, this.iconW)) {
			return {'command': 'previous', 'value' : undefined};
		}

		// check for next button
		if (collision.pixelWithinRect(	x, y, this.nextPos.x, this.nextPos.y,
										this.iconW, this.iconW)) {
			return {'command': 'next', 'value' : undefined};
		}
	}

	// not clicking anything of ours
	return false;
};

// pos is [0,1] and we update the seeker pixel position depending on the length of the bar
// so we display it at the correct spot compared to where the song is playing
Song.prototype._updateSeekerPos = function (pos) {
	if (pos || pos === 0) {
		this.seekerPos.x = this.startingSeekerPos.x + Math.floor(pos * this.validBarLength);
	}	
};

// calculate the value between 0 and 1 given a pixel x within our bar
Song.prototype._getSeekerPos = function (x) {
	var pos = (x - this.startingSeekerPos.x) / this.validBarLength;
	if (pos < 0) {
		pos = 0;
	} else if (pos > 1) {
		pos = 1;
	}
	return pos;
};

// Opacity is optional, default 1
Song.prototype.draw = function (x, y, opacity) {
	// if we get coordinates to draw function, change ours and reinitialize
	if (x || x === 0) {
		this.x = x;
		this.y = y;
		this._populateRects(x,y);
	}

	// this is technically an update and not a draw, but whatever
	if (this.isPlaying) {
		// if we're playing, we must be audio managers current song and therefore have a position
		this._updateSeekerPos(global.get('audioManager').getCurrentSongPosition());
	}

	if (!this.isPlaying) {
		// undefined is the optional position argument, see Sprite.js
		this.playSprite.draw(this.playPos.x, this.playPos.y, undefined, opacity);
	} else {
		this.pauseSprite.draw(this.playPos.x, this.playPos.y, undefined, opacity);
	}
	this.downloadSprite.draw(this.downloadPos.x, this.downloadPos.y, undefined, opacity);

	draw.fillText(	this.name + ' (' + this.year + ')', this.namePos.x, this.namePos.y,
					this.font, this.fontSize, this.fontColor, opacity);
	draw.fillText(	this.duration, this.timePos.x, this.timePos.y,
					this.font, this.fontSize, this.fontColor, opacity);

	this.barSprite.draw(this.barPos.x, this.barPos.y, undefined, opacity);
	this.seekerSprite.draw(this.seekerPos.x, this.seekerPos.y, undefined, opacity);

	// if we're in game, also draw previous/next buttons
	if (this.configuration === 'game') {
		this.previousSprite.draw(this.previousPos.x, this.previousPos.y, undefined, opacity);
		this.nextSprite.draw(this.nextPos.x, this.nextPos.y, undefined, opacity);
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

// pos is [0,1]
Song.prototype.setPosition = function (pos) {
	this._updateSeekerPos(pos);
};

global.set('class/Song', Song);

}());