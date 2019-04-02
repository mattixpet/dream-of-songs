// AudioManager handles retrieving and randomizing songs and delivering them to the chests.

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');
var AudioPlayer = global.get('class/AudioPlayer');
var AudioGUI = global.get('class/AudioGUI');

function AudioManager () {
	this.player = new AudioPlayer();

	this.songs = global.get('audio-data');
	this.TOTALSONGS = this.songs.length; // keep this number for our records (e.g. 261 songs)

	this.gui = new AudioGUI(this.TOTALSONGS);
	global.set('audioGui', this.gui); // for the mouse events, so they can notify the gui and more of course..

	this.songsDelivered = {}; // songs we've put in chests but player hasn't opened
	this.playerSongs = []; // songs player has gotten from chests

	// just for test add a few songs to player songs
	for (var i = 0; i < 1; i++) {
		this.notifySongOpened(this.getNewSong());
	}

	// index of current song in this.playerSongs
	this.currentSong = 0; // we'll always have at least one song (since we get title theme)

	// is a song playing at the moment? (audio audible)
	this.isPlaying = false;
}

// Audio GUI calls this, when user asks us to do any command (play, pause, rewind, etc.)
// Command is:
//  	'play', 'pause', 'next', 'previous', 'seek' and 'download'
// value is optional except when command is 'seek' (then it is between 0 and 1)
// play means play/resume current song if value is same as currentSong or else a new song
AudioManager.prototype.notifyCommand = function (command, value) {
	util.log('Audio manager received command: ' + command + ' with value: ' + value);
	if (command === 'play') {
		if (this.playerSongs[this.currentSong].name === value && 
			!this.isPlaying && 
			value === this.player.getSongName()) {
			this.resume();
		} else {
			this.playSong(value, true);
		}
	} else if (command === 'pause') {
		this.pause();
	} else if (command === 'next') {
		if (this.playerSongs.length > 1) {
			this.next();
		}
	} else if (command === 'previous') {
		if (this.playerSongs.length > 1) {
			this.previous();
		}
	} else if (command === 'seek') {
		this.player.seek(value);
	} else if (command === 'download') {
		// NEED TO HANDLE DOWNLOAD
	} else {
		util.warn('Unknown command: ' + command + ' with value: ' + value + ', not doing anything.');
	}
};

// Resume current song or play it from 0 if that's where we're at
AudioManager.prototype.resume = function () {
	this.player.resume();
	this.isPlaying = true;
};

// Pause current song
AudioManager.prototype.pause = function () {
	this.player.pause();
	this.isPlaying = false;
};

// Play next song if we are playing, otherwise just swap to next
AudioManager.prototype.next = function () {
	this.currentSong = util.circularIdx(this.currentSong + 1, this.playerSongs.length);
	this.playSong(this.playerSongs[this.currentSong].name, this.isPlaying);
};

AudioManager.prototype.previous = function () {
	this.currentSong = util.circularIdx(this.currentSong - 1, this.playerSongs.length);
	this.playSong(this.playerSongs[this.currentSong].name, this.isPlaying);
};

// play song by name (need to call this when switching to a new song)
AudioManager.prototype.playSong = function (songName, play) {
	util.log('Playing song: ' + songName);

	// We should always and only be playing songs Player has access too !
	for (var i = 0; i < this.playerSongs.length; i++) {
		var song = this.playerSongs[i];
		if (song.name === songName) {
			this.player.playSong(song.name, config.SONGURL + song.url, play);
			this.currentSong = i;
		}
	}

	this.isPlaying = play;
};

AudioManager.prototype.isSongPlaying = function (songName) {
	return this.isPlaying && this.playerSongs[this.currentSong].name === songName;
};

AudioManager.prototype.drawGui = function () {
	this.gui.draw();
};

// Returns the name of a random song, and moves the song itself to this.songsDelivered
// Used by the chests on initialization.
AudioManager.prototype.getNewSong = function () {
	var rndIdx = util.randInt(0, this.songs.length);
	var song = this.songs[rndIdx];
	this.songs.splice(rndIdx, 1); // delete song from our song array
	this.songsDelivered[song.name] = song; // log it here
	return song.name;
};

// The chests should call this function once Player opens them, so we know
// player has this song available, and we can draw it in the list of songs
AudioManager.prototype.notifySongOpened = function (songName) {
	this.playerSongs.push(this.songsDelivered[songName]);
	delete this.songsDelivered[songName];
};

AudioManager.prototype.getPlayerSongs = function () {
	return this.playerSongs;
};

// get position in playerSongs
AudioManager.prototype.getCurrentSong = function () {
	return this.currentSong;
};

AudioManager.prototype.getNumTotalSongs = function () {
	return this.TOTALSONGS;
};

global.set('class/AudioManager', AudioManager);

}());