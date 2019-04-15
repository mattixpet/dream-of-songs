// AudioGUI does nothing except draw everything audio related, the player while playing 
// and the list of songs during pause for example.
// Will also notifiy AudioManager, if any of the controls are used (user clicks certain points in the GUI)

(function () {

'use strict';

// imports
var Song = global.get('class/Song');
var collision = global.get('collision');
var util = global.get('util');
var draw = global.get('draw');
var consts = global.get('consts');

// local constants
const songsPerPage = 6; // this.activeSongs should be max this length

function AudioGUI () {
	this.activeSongs = []; // songs displaying in menu at the moment, activeSongs[0] is also song displayed in game
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

	this.upArrowSprite = global.get('imageHandler').getSprite('uparrow');
	this.downArrowSprite = global.get('imageHandler').getSprite('downarrow');

	this.downloading = false; // audio manager notifies us, so we set this as true when
						      // when we want to display the loading animation
	this.downloadTime = 0; // used only for loading animation xD
	this.downloadPointIndex = 0; // index .= [0,audio-gui-data.Spacings.downloadNumPoints-1]
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

	// now check if our up/down arrows are being interacted with
	var data = global.get('audio-gui-data')['Spacings'];
	var audioManager = global.get('audioManager');
	var playerSongs = audioManager.getPlayerSongs();
	var currentSong = audioManager.getCurrentSong();
	// if playerSongs is less than songsPerPage, our up/down arrows aren't supposed to do anything anyway
	// in addition, if we're not paused, we should definitely not do anything
	if (playerSongs.length > songsPerPage && global.get('inMenu') === 'pauseMenu') {
		if (collision.pixelWithinRect(	x, y, 
										data.downArrowPos[0], data.downArrowPos[1], 
										data.iconWidth, data.iconWidth)) {
			// down
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
		} else if (collision.pixelWithinRect(	x, y, 
												data.upArrowPos[0], data.upArrowPos[1], 
												data.iconWidth, data.iconWidth)) {
			// up
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
	}
	
	// check if user clicked 'Download all' button
	// data.downloadAllPos is bottom left pos (because canvas draws text like that)
	var downloadButtonTopLeft = [data.downloadAllPos[0] - data.downloadMargin, 
								data.downloadAllPos[1] - data.fontSize - data.downloadMargin];
	// fontSize * 0.67 because width of letters is approximately 2/3 of height (font size)
	var downloadButtonWidth = data.downloadMargin * 2 + 'Download all'.length * data.fontSize * 0.67;
	var downloadButtonHeight = data.downloadMargin * 2 + data.fontSize;
	if (collision.pixelWithinRect(	x, y, downloadButtonTopLeft[0], downloadButtonTopLeft[1],
									downloadButtonWidth, downloadButtonHeight) &&
		global.get('inMenu') === 'pauseMenu') {
		global.get('audioManager').notifyCommand('download all', undefined);
	}
};

// Called by tools/input.js to let us know if player hit pause, so we can know to populate active songs/update them
AudioGUI.prototype.notifyPause = function () {
	this._populateActiveSongs();
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
};

AudioGUI.prototype.draw = function () {
	var inMenu = global.get('inMenu');
	var data = global.get('audio-gui-data')['Spacings'];
	var audioManager = global.get('audioManager');
	var playerSongs = audioManager.getPlayerSongs();

	// draw if we are in game (set active songs as only this one we are playing)
	// also draw if we are in the notification menu, since it doesn't block our player
	if ((!inMenu || inMenu === 'notificationMenu')) {
		// if our length is 1, we have already created this array with one song to display while drawing
		// in which case we just draw it. If however it is not 1 (the if clause) we create it
		// However, if our length is one, but currentSong from audioManager has changed, we also have to
		// create a new song and draw it
		// Also if the current songs configuration is 'menu', we came from there and need to change it to game
		var song = playerSongs[audioManager.getCurrentSong()];
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

		this.activeSongs[0].draw();
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

		// draw the up/down arrows to scroll, up arrow in top right corner, down arrow in top left corner
		this.upArrowSprite.draw(data.upArrowPos[0], data.upArrowPos[1]);
		this.downArrowSprite.draw(data.downArrowPos[0], data.downArrowPos[1]);

		// draw the total songs collected text and download all text
		draw.fillText(
			global.get('ctx'),
			// + 1 in the num chests because of title theme
			'Total songs collected: ' + playerSongs.length + '/' + (consts.NUMCHESTS + 1),
			data.totalSongPos[0],
			data.totalSongPos[1],
			data.font,
			data.fontSize,
			data.fontColor
		);
		draw.fillText(
			global.get('ctx'),
			'Download all',
			data.downloadAllPos[0],
			data.downloadAllPos[1],
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
		x = data.gameDownloadAnimationPos[0];
		y = data.gameDownloadAnimationPos[1];
	}
	if (inMenu === 'pauseMenu') {
		x = data.menuDownloadAnimationPos[0];
		y = data.menuDownloadAnimationPos[1];
	}

	var ctx = global.get('ctx');
	var n = data.downloadNumPoints;
	var idx = this.downloadPointIndex;
	var thick = data.downloadPointThickness;
	var r = data.downloadRadius;
	var c = data.downloadAnimationColor;

	draw.drawCirclePointWithShadow(ctx, x, y, n, idx, thick, r, c);
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

global.set('class/AudioGUI', AudioGUI);

}());