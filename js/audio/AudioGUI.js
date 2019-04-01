// AudioGUI does nothing except draw everything audio related, the player while playing 
// and the list of songs during pause for example.
// Will also notifiy AudioManager, if any of the controls are used (user clicks certain points in the GUI)

(function () {

'use strict';

// imports
var Song = global.get('class/Song');
var collision = global.get('collision');
var util = global.get('util');

// local constants
const songsPerPage = 6; // this.activeSongs should be max this length

function AudioGUI () {
	this.activeSongs = []; // songs displaying in menu at the moment, activeSongs[0] is also song displayed in game
	// these are important variables maintaining where we are and what we are displaying from playerSongs
	// looks something like this:
	//
	//					[as0, as1, as2, .. asSongsPerPage]
	// [  ps0, ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps8, ps9, .. ]
	// Meaning our activeSongs (as0..asX) is an intersection of playerSongs (ps0..psX)
	// And in the example above playerSongs[playerSongLeftIndex] == ps3
	this.playerSongLeftIndex = undefined;
	this.playerSongRightIndex = undefined;

	this.isPlaying = false; // display play button or pause button? (when in game)

	this.upArrowSprite = global.get('imageHandler').getSprite('uparrow');
	this.downArrowSprite = global.get('imageHandler').getSprite('downarrow');
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
				//this.draw(); // need to force a draw here when in menu
			}
		}
	}

	// now check if our up/down arrows are being interacted with
	var data = global.get('audio-gui-data')['Spacings'];
	var audioManager = global.get('audioManager');
	var playerSongs = audioManager.getPlayerSongs();
	var currentSong = audioManager.getCurrentSong();
	// if playerSongs is less than songsPerPage, our up/down arrows aren't supposed to do anything anyway
	if (playerSongs.length > songsPerPage) {
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
				pSong['duration']
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
					pSong['duration']
				)
			);
			// delet the last entry
			this.activeSongs.splice(
				this.activeSongs.length - 1, 1);
			// let's not forget to draw what we changed
			this.draw();
		}
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
				playerSongs[idx]['duration']
			);
			this.activeSongs.push(song);
		}
	}
	// set our indices
	this.playerSongLeftIndex = currentSong;
	this.playerSongRightIndex = currentSong + this.activeSongs.length - 1;
};

AudioGUI.prototype.draw = function () {
	// draw if we are in game

	// draw previous, play/pause, next, name of song and seek bar


	// draw if we are in menu
	var inMenu = global.get('inMenu');
	if (inMenu === 'pauseMenu') {
		// first remove any songs we have already drawn by drawing pause menu again
		global.get(inMenu).draw();

		var data = global.get('audio-gui-data')['Spacings'];

		// for each song, draw what we can on screen (#songsPerPage songs)
		// lets not forget to change the songs draw coordinates
		for (var i = 0; i < this.activeSongs.length; i++) {
			this.activeSongs[i].draw(data.pauseMenuXCoord,
									 data.pauseMenuYCoord + data.songHeight * i);
		}

		// draw the up/down arrows to scroll, up arrow in top right corner, down arrow in top left corner
		this.upArrowSprite.draw(data.upArrowPos[0], data.upArrowPos[1]);
		this.downArrowSprite.draw(data.downArrowPos[0], data.downArrowPos[1]);
	}
};

global.set('class/AudioGUI', AudioGUI);

}());