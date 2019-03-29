// AudioManager handles retrieving and randomizing songs and delivering them to the chests.

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');
var AudioPlayer = global.get('class/AudioPlayer');
var AudioGUI = global.get('class/AudioGUI');

function AudioManager () {
	this.player = new AudioPlayer();
	// global.set('audioPlayer', this.player);
	this.gui = new AudioGUI();

	this.songs = global.get('audio-data');
	this.songsDelivered = {}; // songs we've put in chests but player hasn't opened
	this.playerSongs = {}; // songs player has gotten from chests

	// test
	this.play(config.SONGURL + 'Lelegar_upptokur/amr/2014/american_psycho.mp3');
}

// play song by url
AudioManager.prototype.play = function (url) {
	this.player.playSong(url);
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
	this.playerSongs[songName] = this.songsDelivered[songName];
	delete this.songsDelivered[songName];
};

global.set('class/AudioManager', AudioManager);

}());