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
function Song (name, x, y, year, duration) {
	this.name = name; // song name as in audio-data and AudioManager (and everywhere)

	this.x = x;
	this.y = y;
	this.year = year;
	this.duration = duration;

	// sprites
	var imageHandler = global.get('imageHandler');
	this.playSprite = imageHandler.getSprite('play');
	this.pauseSprite = imageHandler.getSprite('pause');
	this.downloadSprite = imageHandler.getSprite('download');
	this.barSprite = imageHandler.getSprite('bar');
	this.seekerSprite = imageHandler.getSprite('seeker');

	this.barW = this.barSprite.getWidth();
	this.barH = this.barSprite.getHeight();
	this.iconW = this.playSprite.getWidth();
	this.fontSize = global.get('audio-gui-data')['Spacings'].fontSize;

	// store top left x,y pos for our controls as [x,y] (set in _populateRects)
	this.playPos = undefined;
	this.downloadPos = undefined;
	this.namePos = undefined;
	this.barPos = undefined;
	this.seekerPos = undefined;

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

	this.playPos = [this.x + margin, this.y + margin];
	// download rect is to right of play button
	this.downloadPos = [this.playPos[0] + this.iconW + itemMarginR,
						this.y + margin];
	this.namePos = [this.downloadPos[0] + this.iconW + Math.floor(itemMarginR * 2),
					this.y + this.iconW / 2];
	this.barPos = [this.namePos[0] - Math.floor(itemMarginR * 0.5), this.playPos[1] + this.iconW / 2];
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
		return {'command': !this.isPlaying ? 'pause' : 'play', 'value': this.name};
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

	// not clicking anything of ours
	return false;
};

Song.prototype.draw = function () {
	if (!this.isPlaying) {
		this.playSprite.draw(this.playPos[0], this.playPos[1]);
	} else {
		this.pauseSprite.draw(this.playPos[0], this.playPos[1]);
	}
	this.downloadSprite.draw(this.downloadPos[0], this.downloadPos[1]);

	draw.fillText(	global.get('ctx'), this.name + ' (' + this.year + ')', this.namePos[0], this.namePos[1],
					'Monospace', this.fontSize, 'white');
	draw.fillText(	global.get('ctx'), this.duration, this.timePos[0], this.timePos[1],
					'Monospace', this.fontSize, 'white');

	this.barSprite.draw(this.barPos[0], this.barPos[1]);
	this.seekerSprite.draw(this.seekerPos[0], this.seekerPos[1]);
};

Song.prototype.getName = function () {
	return this.name;
};

global.set('class/Song', Song);

}());