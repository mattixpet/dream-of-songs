// AudioGUI does nothing except draw everything audio related, the player while playing 
// and the list of songs during pause for example.
// Will also notifiy AudioManager, if any of the controls are used (user clicks certain points in the GUI)

(function () {

'use strict';

var Song = global.get('class/Song');

function AudioGUI () {
	this.activeSongs = []; // songs displaying in menu at the moment

	this.isPlaying = false; // display play button or pause button? (when in game)

	this.tested = false;
}

// Mouse event handling calls this function so we can know what to do
AudioGUI.prototype.notifyClick = function (x, y) {
	for (var i = 0; i < this.activeSongs.length; i++) {
		var song = this.activeSongs[i];
		var action = song.click(x, y);
		if (action) {
			global.get('audioManager').notifyCommand(action.command, action.value);
		}
	}
};

AudioGUI.prototype.draw = function () {
	// draw if we are in game

	// draw previous, play/pause, next, name of song and seek bar

	// draw if we are in menu

	// for each song, draw what we can on screen (x songs)
	// draw the up/down arrows to scroll

	// testing
	if (!this.tested) {
		var playerSongs = global.get('audioManager').getPlayerSongs();

		var song = new Song(playerSongs[0]['name'], 250, 350, playerSongs[0]['year'], playerSongs[0]['duration']);
		this.activeSongs.push(song);
		this.tested = true;
	}
	this.activeSongs[0].draw();
};

global.set('class/AudioGUI', AudioGUI);

}());