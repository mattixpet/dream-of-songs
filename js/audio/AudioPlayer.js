// AudioPlayer handles playing audio files low level

(function () {

'use strict';

var util = global.get('util');

function AudioPlayer () {
	this.currentSong = undefined;
}

// Play current song
AudioPlayer.prototype.play = function () {
	this.currentSong.play();
};

// Pause current song
AudioPlayer.prototype.pause = function () {
	this.currentSong.pause();
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
AudioPlayer.prototype.playSong = function (songUrl) {
	console.log('Playing song: ' + songUrl);
	this.currentSong = new Audio(songUrl);
	this.play();
	// this.currentSong.addEventListener('loadeddata', function() {
	// 	global.get('audioPlayer').seek(0.64);
	// 	global.get('audioPlayer').play();
	// });
};

global.set('class/AudioPlayer', AudioPlayer);

}());