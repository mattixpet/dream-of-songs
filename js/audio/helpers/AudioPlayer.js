// AudioPlayer handles playing audio files low level

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');

function AudioPlayer () {
	this.currentSong = undefined;
	this.lastPos = 0;
	this.currentSongName = undefined;

	// figure out which type of audio we support, if we can't play .ogg we play .m4a
	this.canPlayOgg = !!(new Audio().canPlayType('audio/ogg; codecs="vorbis"'));
	util.log('Audio format chosen: ' + (this.canPlayOgg ? '.ogg' : '.m4a'));
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
	if (this.currentSong) {
		this.currentSong.pause();
		this.lastPos = this.currentSong.currentTime;
	}
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

// Play song by url on format 'path/to/song/song.m4a'
// Play is true if we want to play it straight away otherwise we just load it
AudioPlayer.prototype.playSong = function (songName, songUrl, play) {
	if (this.currentSong && !config.allowParallelSongs) {
		this.pause(); // stop our current song when we play a new one
	}
	// songUrl is always .m4a, if we can play .ogg we do that instead
	this.currentSong = new Audio(
		this.canPlayOgg ? songUrl.replace('.m4a', '.ogg') : songUrl
	);
	this.lastPos = 0; // start
	this.currentSongName = songName;

	// set back to beginning once it ends
	this.currentSong.addEventListener('ended', function () {
		global.get('audioManager').songEnded();
	});

	if (play) {
		this.currentSong.play();
	}
};

AudioPlayer.prototype.getSongName = function () {
	return this.currentSongName;
};

AudioPlayer.prototype.getPosition = function () {
	if (this.currentSong) {
		return this.currentSong.currentTime;
	}
};

AudioPlayer.prototype.setPosition = function (pos) {
	if (this.currentSong) {
		this.currentSong.currentTime = pos;
		this.lastPos = pos;
	}
};

global.set('class/AudioPlayer', AudioPlayer);

}());