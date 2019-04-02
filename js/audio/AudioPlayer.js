// AudioPlayer handles playing audio files low level

(function () {

'use strict';

var util = global.get('util');

function AudioPlayer () {
	this.currentSong = undefined;
	this.lastPos = 0;
	this.currentSongName = undefined;
}

// Play current song
AudioPlayer.prototype.resume = function () {
	if (this.currentSong) {
		this.currentSong.currentTime = this.lastPos;
		this.currentSong.play();
	}
};

// Pause current song
AudioPlayer.prototype.pause = function () {
	this.currentSong.pause();
	this.lastPos = this.currentSong.currentTime;
};

// Seek in current song where index is a number between 0 and 1
// 0 being the start of song, 1 being the end.
AudioPlayer.prototype.seek = function (index) {
	var times = this.currentSong.seekable;
	// times always seems to just have one time range with the entire length of the song
	if (times.length === 1) {
		this.currentSong.currentTime = Math.floor(index * (times.end(0) - times.start(0)));
	} else {
		if (times.length > 1) {
			util.warn(times.length + ' time ranges in AudioPlayer for some reason, not doing anything.');
		}
	}
};

// Play song by url
// Play is true if we want to play it straight away otherwise we just load it
AudioPlayer.prototype.playSong = function (songName, songUrl, play) {
	if (this.currentSong) {
		this.pause(); // stop our current song when we play a new one
	}
	this.currentSong = new Audio(songUrl);
	this.lastPos = 0; // start
	this.currentSongName = songName;
	if (play) {
		this.currentSong.play();
	}
};

AudioPlayer.prototype.getSongName = function () {
	return this.currentSongName;
};

global.set('class/AudioPlayer', AudioPlayer);

}());