// AudioManager handles retrieving and randomizing songs and delivering them to the chests.

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');
var AudioPlayer = global.get('class/AudioPlayer');
var AudioGUI = global.get('class/AudioGUI');

function AudioManager () {
	this.player = new AudioPlayer();
	this.gui = new AudioGUI();
	global.set('audioGui', this.gui); // for the mouse events, so they can notify the gui and more of course..

	this.songs = global.get('audio-data');
	this.songsDelivered = {}; // songs we've put in chests but player hasn't opened
	this.playerSongs = []; // songs player has gotten from chests

	// just for test add a few songs to player songs
	for (var i = 0; i < 10; i++) {
		this.notifySongOpened(this.getNewSong());
	}

	// index of current song in this.playerSongs
	this.currentSong = 0;//-1;

	// is a song playing at the moment? (audio audible)
	this.isPlaying = false;
}

// Audio GUI calls this, when user asks us to do any command (play, pause, rewind, etc.)
// Command is:
//  	'play', 'playSong', 'pause', 'next', 'previous', 'seek' and 'download'
// value is optional except when command is 'seek' (then it is between 0 and 1)
// play means play current song if value is same as currentSong or else a new song
// playSong means user is selecting a new song to play (on pause screen), then value is songName
AudioManager.prototype.notifyCommand = function (command, value) {
	util.log('Audio manager received command: ' + command + ' with value: ' + value);
	if (command === 'play') {
		//if (this.playerSongs[this.currentSong].name === value && !this.isPlaying) {
		//	this.play();
		//} else {
			this.playSong(value, true);
		//}
	} else if (command === 'pause') {
		this.pause();
	} else if (command === 'next') {
		this.next();
	} else if (command === 'previous') {
		this.previous();
	} else if (command === 'seek') {
		this.player.seek(value);
	} else if (command === 'download') {
		// NEED TO HANDLE DOWNLOAD
	} else {
		util.warn('Unknown command: ' + command + ' with value: ' + value + ', not doing anything.');
	}
};

// Play current song
AudioManager.prototype.play = function () {
	this.player.play();
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
	this.playSong(this.playerSongs[this.currentSong], this.isPlaying);
};

AudioManager.prototype.previous = function () {
	this.currentSong = util.circularIdx(this.currentSong - 1, this.playerSongs.length);
	this.playSong(this.playerSongs[this.currentSong], this.isPlaying);
};

// play song by name (need to call this when switching to a new song)
AudioManager.prototype.playSong = function (songName, play) {
	util.log('Playing song: ' + songName);

	// We should always and only be playing songs Player has access too !
	for (var i = 0; i < this.playerSongs.length; i++) {
		var song = this.playerSongs[i];
		if (song.name === songName) {
			this.player.playSong(config.SONGURL + song.url, play);
			this.currentSong = i;
		}
	}

	this.isPlaying = true;
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
	console.log('Notified with song: ' + songName);
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

global.set('class/AudioManager', AudioManager);

}());