// AudioGUI does nothing except draw everything audio related, the player while playing 
// and the list of songs during pause for example.
// Will also notifiy AudioManager, if any of the controls are used (user clicks certain points in the GUI)

(function () {

'use strict';

// imports
var config = global.get('config');
var collision = global.get('collision');
var util = global.get('util');
var draw = global.get('draw');
var consts = global.get('consts');
var Song = global.get('class/Song');

// local constants
const songsPerPage = 6; // this.activeSongs should be max this length
const FADETIME = 1000; // approx half a second fade time for player in game (on mouse move)
const MOUSESTILLTIME = 3000; // time until we fade player out if mouse has been still

function AudioGUI () {
	// Song objects of songs displaying in menu at the moment, activeSongs[0] is also song displayed in game
	this.activeSongs = [];
	// these are important variables maintaining where we are and what we are displaying from playerSongs
	// looks something like this:
	//
	//					[as0, as1, as2, .. asSongsPerPage]
	// [  ps0, ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps8, ps9, .. ]
	//                   |                              |
	//             playerLeftIndex               playerRightIndex
	// Meaning our activeSongs (as0..asX) is an intersection of playerSongs (ps0..psX)
	// And in the example above playerSongs[playerSongLeftIndex] == ps3
	this.playerSongLeftIndex = undefined;
	this.playerSongRightIndex = undefined;

	this.isPlaying = false; // display play button or pause button? (when in game)

	this.downloading = false; // audio manager notifies us, so we set this as true when
						      // when we want to display the loading animation
	this.downloadTime = 0; // used only for loading animation xD
	this.downloadPointIndex = 0; // index .= [0,audio-gui-data.Spacings.downloadNumPoints-1]

	// fadeIn/fadeOut flags set for respective operations
	// fade for audio player in game
	this.fadeIn = false;
	this.fadeOut = false;
	this.fadeTime = 0;
	this.mouseStillTime = 0; // after this reaches MOUSESTILLTIME we fade player out
	this.controlsVisible = false; // set as true on first song gotten
}

// Mouse event handling calls this function so we can know what to do
AudioGUI.prototype.notifyClick = function (x, y) {
	// check if one of our songs is being interacted with
	for (var i = 0; i < this.activeSongs.length; i++) {
		var song = this.activeSongs[i];
		var action = song.click(x, y);
		if (action) {
			global.get('audioManager').notifyCommand(action.command, action.value);
			if (global.get('inMenu') === 'pauseMenu') {
				this.draw(); // need to force a draw here when in menu
			}
		}
	}
	
	// check if user clicked 'Download all' button
	var data = global.get('audio-gui-data')['Spacings'];
	// data.downloadAllPos is bottom left pos (because canvas draws text like that)
	var downloadButtonTopLeft = {'x':data.downloadAllPos.x - data.downloadMargin, 
								 'y':data.downloadAllPos.y - data.fontSize - data.downloadMargin};
	// fontSize * 0.67 because width of letters is approximately 2/3 of height (font size)
	var downloadButtonWidth = data.downloadMargin * 2 + 'Download all'.length * data.fontSize * 0.67;
	var downloadButtonHeight = data.downloadMargin * 2 + data.fontSize;
	if (collision.pixelWithinRect(	x, y, downloadButtonTopLeft.x, downloadButtonTopLeft.y,
									downloadButtonWidth, downloadButtonHeight) &&
		global.get('inMenu') === 'pauseMenu') {
		global.get('audioManager').notifyCommand('download all', undefined);
	}
};

// Called by tools/input.js to let us know if player hit pause, so we can know to populate active songs/update them
AudioGUI.prototype.notifyPause = function () {
	this._populateActiveSongs();
};

AudioGUI.prototype.notifyMousemove = function () {
	if (!this.controlsVisible && config.audioControlsFade) {
		// set our fade in flag, and remove/reset rest
		this._triggerFadeIn();
	}
	this.mouseStillTime = 0;
};

// Called by pause menu on up scroll click
AudioGUI.prototype.notifyUp = function () {
	this._handleUpArrowClick();
};

AudioGUI.prototype.notifyDown = function () {
	this._handleDownArrowClick();
};

AudioGUI.prototype._triggerFadeIn = function () {
	this.fadeIn = true;
	if (this.fadeOut) {
		this.fadeOut = false;
		this.fadeTime = 0;
	}
};

AudioGUI.prototype._triggerFadeOut = function () {
	this.fadeOut = true;
	if (this.fadeIn) {
		this.fadeIn = false;
		this.fadeTime = 0;
	}
};

AudioGUI.prototype._handleDownArrowClick = function () {
	// if playerSongs is less than songsPerPage, our up/down arrows aren't supposed to do anything anyway
	if (global.get('audioManager').getPlayerSongs().length > songsPerPage) {
		var data = global.get('audio-gui-data')['Spacings'];
		var audioManager = global.get('audioManager');
		var playerSongs = audioManager.getPlayerSongs();
		var currentSong = audioManager.getCurrentSong();

		// first update our playerSong indices, shift them one down (up arrow means down in array)
		this.playerSongLeftIndex = util.circularIdx(this.playerSongLeftIndex - 1, playerSongs.length);
		this.playerSongRightIndex = util.circularIdx(this.playerSongRightIndex - 1, playerSongs.length);

		this.activeSongs.shift(); // remove first entry, move rest down
		// set last entry as new song (just updated index here above)
		var pSong = playerSongs[this.playerSongRightIndex];
		this.activeSongs[songsPerPage - 1] = new Song(
			pSong['name'], 
			data.pauseMenuXCoord, 
			data.pauseMenuYCoord + data.songHeight * (songsPerPage - 1), 
			pSong['year'], 
			pSong['duration'],
			'menu',
			// set position of the song as 0 unless we are at a currently playing song
			pSong === playerSongs[currentSong] ? audioManager.getCurrentSongPosition() : 0
		);
		// let's not forget to draw the changes
		this.draw();
	}
};

AudioGUI.prototype._handleUpArrowClick = function () {
	// if playerSongs is less than songsPerPage, our up/down arrows aren't supposed to do anything anyway
	if (global.get('audioManager').getPlayerSongs().length > songsPerPage) {
		var data = global.get('audio-gui-data')['Spacings'];
		var audioManager = global.get('audioManager');
		var playerSongs = audioManager.getPlayerSongs();
		var currentSong = audioManager.getCurrentSong();

		// first update our playerSong indices, shift them one up (down arrow means higher in array)
		this.playerSongLeftIndex = util.circularIdx(this.playerSongLeftIndex + 1, playerSongs.length);
		this.playerSongRightIndex = util.circularIdx(this.playerSongRightIndex + 1, playerSongs.length);

		var pSong = playerSongs[this.playerSongLeftIndex];
		// add our song in the start of the array
		this.activeSongs.splice(
			0, 0, 
			new Song(
				pSong['name'], 
				data.pauseMenuXCoord, 
				data.pauseMenuYCoord, 
				pSong['year'], 
				pSong['duration'],
				'menu',
				// set position of the song as 0 unless we are at a currently playing song
				pSong === playerSongs[currentSong] ? audioManager.getCurrentSongPosition() : 0
			)
		);
		// delet the last entry
		this.activeSongs.splice(
			this.activeSongs.length - 1, 1);
		// let's not forget to draw what we changed
		this.draw();
	}
};

// Fills this.activeSongs with Song objects to be drawn at the pause menu
// From playerSongs[currentSong..currentSong + songsPerPage - 1]
// Meaning draw songsPerPage songs starting at current song in playerSongs.
AudioGUI.prototype._populateActiveSongs = function () {
	var data = global.get('audio-gui-data')['Spacings'];
	this.activeSongs = []; // reset our songs

	var audioManager = global.get('audioManager');
	var playerSongs = audioManager.getPlayerSongs();
	var currentSong = audioManager.getCurrentSong();
	for (var i = 0; i < songsPerPage; i++) {
		if (playerSongs.length > i) {
			var idx = util.circularIdx(currentSong + i, playerSongs.length); // always start at currentSong and circle the array
			var song = new Song(
				playerSongs[idx]['name'], 
				data.pauseMenuXCoord, 
				data.pauseMenuYCoord + data.songHeight * i, 
				playerSongs[idx]['year'], 
				playerSongs[idx]['duration'],
				'menu',
				// set position of song if we are at the current playing song
				i === 0 ? audioManager.getCurrentSongPosition() : 0
			);
			this.activeSongs.push(song);
		}
	}
	// set our indices
	this.playerSongLeftIndex = currentSong;
	this.playerSongRightIndex = currentSong + this.activeSongs.length - 1;
};

AudioGUI.prototype.update = function (dt) {
	if (this.downloading) {
		this.downloadTime += dt; // dt is in milliseconds
		if (this.downloadTime > 100) {
			this.downloadPointIndex++;
			if (this.downloadPointIndex === global.get('audio-gui-data')['Spacings'].downloadNumPoints) {
				this.downloadPointIndex = 0;
			}
			this.downloadTime = 0;
		}
	}

	this.mouseStillTime += dt;
	if (this.mouseStillTime > MOUSESTILLTIME && this.controlsVisible && config.audioControlsFade) {
		// set our fade out flag, and remove/reset rest
		this._triggerFadeOut();
	}

	if (config.audioControlsFade && (this.fadeIn || this.fadeOut)) {
		if (this.fadeIn) {
			// so that it is drawn during the fade in
			this.controlsVisible = true;
		}
		this.fadeTime += dt;
		if (this.fadeTime > FADETIME) {
			this.fadeTime = 0;
			this.controlsVisible = this.fadeIn ? true : false; // after fade out/in we have our status
			this.fadeIn = false;
			this.fadeOut = false;
		}
	}

	if (!config.audioControlsFade) {
		this.controlsVisible = true;
	}
};

AudioGUI.prototype.draw = function () {
	/* 	jshint shadow: true */
	/*  ^ allow for (var i =) and another (for var i =)
	   	and var song = in different if blocks */
	var inMenu = global.get('inMenu');
	var data = global.get('audio-gui-data')['Spacings'];
	var audioManager = global.get('audioManager');
	var playerSongs = audioManager.getPlayerSongs();

	// draw if we are in game (set active songs as only this one we are playing)
	// also draw if we are in the notification menu, since it doesn't block our player
	// draw is also dependent on our controls visible flag of course
	if ((!inMenu || inMenu === 'notificationMenu') && this.controlsVisible) {
		// if our length is 1, we have already created this array with one song to display while drawing
		// in which case we just draw it. If however it is not 1 (the if clause) we create it
		// However, if our length is one, but currentSong from audioManager has changed, we also have to
		// create a new song and draw it
		// Also if the current songs configuration is 'menu', we came from there and need to change it to game
		var song = playerSongs[audioManager.getCurrentSong()];
		if (!song) {
			return;
		}

		if (this.activeSongs.length !== 1 || 
			(this.activeSongs.length > 0 && song.name !== this.activeSongs[0].name) ||
			(this.activeSongs.length > 0 && this.activeSongs[0].getConfiguration() === 'menu')) {
			this.activeSongs = [new Song(
				song.name,
				data.inGameXCoord,
				data.inGameYCoord,
				song.year,
				song.duration,
				'game',
				audioManager.getCurrentSongPosition()
			)];
			if (audioManager.isSongPlaying(this.activeSongs[0].getName())) {
				this.activeSongs[0].setAsPlaying();
			}
		}

		var opacity = 1.0;
		if (this.fadeIn) {
			opacity = this.fadeTime / FADETIME;
		} else if (this.fadeOut) {
			opacity = Math.max(1 - (this.fadeTime / FADETIME), 0);
		}

		// undefined's are optional x,y coordinates to song draw
		this.activeSongs[0].draw(undefined, undefined, opacity);
	}

	// draw if we are in menu
	if (inMenu === 'pauseMenu') {
		// first remove any songs we have already drawn by drawing pause menu again
		global.get(inMenu).draw();

		// make sure we draw correct play/pause for each song
		// if a song which is currentSong is playing, no one else should display pause
		for (var i = 0; i < this.activeSongs.length; i++) {
			var song = this.activeSongs[i];
			var isCurrentSong = song.getName() === playerSongs[audioManager.getCurrentSong()].name;
			if (song.isSetAsPlaying()) {
				// only allow it to be displayed as playing if it's the same as current song
				if (!isCurrentSong) {
					song.setAsPaused();
				}
			} else {
				// set song which is playing as playing (in case user scrolls down and up again to the song)
				if (isCurrentSong && audioManager.isSongPlaying(song.getName())) {
					song.setAsPlaying();
				}
			}
		}

		// for each song, draw what we can on screen (#songsPerPage songs)
		// lets not forget to change the songs draw coordinates
		for (var i = 0; i < this.activeSongs.length; i++) {
			this.activeSongs[i].draw(data.pauseMenuXCoord,
									 data.pauseMenuYCoord + data.songHeight * i);
		}

		// draw the total songs collected text and download all text
		draw.fillText(
			'Total songs collected: ' + playerSongs.length + '/' + consts.NUMCHESTS,
			data.totalSongPos.x,
			data.totalSongPos.y,
			data.font,
			data.fontSize,
			data.fontColor
		);
		draw.fillText(
			'Download all',
			data.downloadAllPos.x,
			data.downloadAllPos.y,
			data.font,
			data.fontSize,
			data.fontColor
		);
	}

	if (this.downloading) {
		this._drawLoading();
	}
};

// Draw the loading animation (so user knows something is happening when clicking loading)
AudioGUI.prototype._drawLoading = function () {
	var data = global.get('audio-gui-data')['Spacings'];
	var inMenu = global.get('inMenu');
	var x,y;
	if (!inMenu) {
		x = data.gameDownloadAnimationPos.x;
		y = data.gameDownloadAnimationPos.y;
	}
	if (inMenu === 'pauseMenu') {
		x = data.menuDownloadAnimationPos.x;
		y = data.menuDownloadAnimationPos.y;
	}

	var n = data.downloadNumPoints;
	var idx = this.downloadPointIndex;
	var thick = data.downloadPointThickness;
	var r = data.downloadRadius;
	var c = data.downloadAnimationColor;

	draw.drawCirclePointWithShadow(x, y, n, idx, thick, r, c);
};


AudioGUI.prototype.setCurrentSongAsPlaying = function () {
	this._setCurrentSongAs('playing');
};

AudioGUI.prototype.setCurrentSongAsPaused = function () {
	this._setCurrentSongAs('paused');
};

// status === 'playing' or 'paused'
// This function should work if we are in game or in pause menu on the current song.
AudioGUI.prototype._setCurrentSongAs = function (status) {
	var activeSongsIndex;
	if (this.activeSongs.length === 1) {
		// in game
		activeSongsIndex = 0;
	} else {
		var audioManager = global.get('audioManager');
		var currentSongName = audioManager.getPlayerSongs()[audioManager.getCurrentSong()].name;
		for (var i = 0; i < this.activeSongs.length; i++) {
			if (this.activeSongs[i].getName() === currentSongName) {
				activeSongsIndex = i;
				break;
			}
		}
	}

	if (status === 'playing' && (activeSongsIndex || activeSongsIndex === 0)) {
		this.activeSongs[activeSongsIndex].setAsPlaying();
	} else {
		this.activeSongs[activeSongsIndex].setAsPaused();
	}
};

// since we don't really keep a counter of what is the current song during pause
// set them all as paused, the position seems to go to 0 on it's own
AudioGUI.prototype.resetCurrentSong = function () {
	for (var i = 0; i < this.activeSongs.length; i++) {
		this.activeSongs[i].setAsPaused();
	}
	if (this.activeSongs.length > 0) {
		this.activeSongs[0].setPosition(0);
	}
};

// Audio manager is kind enough to let us know when a song is downloading
// so we can display the downloading graphics
AudioGUI.prototype.notifyDownloadInProgress = function () {
	this.downloading = true;
	util.log('Download in progress..');
};

AudioGUI.prototype.notifyDownloadCompleted = function () {
	this.downloading = false;
	util.log('Download completed or error.');
};

AudioGUI.prototype.showControls = function () {
	this.controlsVisible = true;
	this.fadeIn = false;
	this.fadeOut = false;
};

global.set('class/AudioGUI', AudioGUI);

}());