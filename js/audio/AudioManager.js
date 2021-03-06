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
	util.log('Found: ' + this.songs.length + ' songs which should hopefully fit into ' + global.get('consts').NUMCHESTS + ' chests.');

	this.gui = new AudioGUI();
	global.set('audioGui', this.gui); // for the mouse events, so they can notify the gui and more of course..

	this.songsDelivered = {}; // songs we've put in chests but player hasn't opened
	this.playerSongs = []; // songs player has gotten from chests

	// index of current song in this.playerSongs
	this.currentSong = 0;

	// is a song playing at the moment? (audio audible)
	this.isPlaying = false;
}

// Audio GUI calls this, when user asks us to do any command (play, pause, rewind, etc.)
// Command is:
//  	'play', 'pause', 'next', 'previous', 'seek', 'download' and 'download all'
// value is not always set except when command is 'seek' (then it is between 0 and 1) and
// play means play/resume current song if value is same as currentSong or else a new song
// download if value is one song then download that
// download all, download all playerSongs as zip
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
		if (!this.player.getSongName()) {
			// we haven't starting playing any song
			this.playSong(this.playerSongs[this.currentSong].name, false);
		}
		this.player.seek(value);
	} else if (command === 'download') {
		this._downloadSong(value);
	} else if (command === 'download all') {
		this._zipPlayerSongs();
	} else {
		util.warn('Unknown command: ' + command + ' with value: ' + value + ', not doing anything.');
	}
};

// tools/input.js calls this if user presses Space bar
AudioManager.prototype.notifySpacePress = function () {
	if (this.isPlaying) {
		this.pause();
		this.gui.setCurrentSongAsPaused();
	} else {
		var currentSong = this.playerSongs[this.currentSong];
		if (currentSong) {
			if (currentSong.name === this.player.getSongName()) {
				this.resume();
			} else {
				this.playSong(currentSong.name, true);
			}
			this.gui.setCurrentSongAsPlaying();
		}
	}
};

// The chests should call this function once Player opens them, so we know
// player has this song available, and we can draw it in the list of songs
AudioManager.prototype.notifySongOpened = function (songName) {
	this.playerSongs.push(this.songsDelivered[songName]);
	// set as current song, unless some other song is playing :)
	if (!this.isPlaying) {
		this.currentSong = this.playerSongs.length - 1;
	}
	delete this.songsDelivered[songName];
};

// Returns the name of a random song, and moves the song itself to this.songsDelivered
// Used by the chests on initialization.
AudioManager.prototype.getNewSong = function () {
	if (this.songs.length === 0) {
		util.warn('No more songs left to add to chests.');
		return;
	}
	var rndIdx = util.randInt(0, this.songs.length);
	var song = this.songs[rndIdx];
	this.songs.splice(rndIdx, 1); // delete song from our song array
	this.songsDelivered[song.name] = song; // log it here
	return song.name;
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

AudioManager.prototype._downloadSong = function (songName) {
	// first find the song to get the url
	var song;
	for (var i = 0; i < this.playerSongs.length; i++) {
		song = this.playerSongs[i];
		if (song.name === songName) {
			break;
		}
	}
	if (!song) {
		util.warn('Invalid song name provided, not in player songs: ' + songName + ', not handling.');
		return;
	}

	this.gui.notifyDownloadInProgress();

	fetch(config.SONGURL + song.url, {mode: config.fetchMode})
	.then(function(response){
		if (response.ok) {
			return response.blob();
		}
	})
	.then(function(blob){
		saveAs(blob, song.name + '.m4a');
		global.get('audioManager').gui.notifyDownloadCompleted();

		if (config.sendAnalytics) {
			global.get('postToDb')({'type':'download', 'song':song.name, 'number':1});
		}
	})
	.catch(function(){
		global.get('audioManager').gui.notifyDownloadCompleted();
	});
};

// Put this.playerSongs into a zip folder and prompt user for download
AudioManager.prototype._zipPlayerSongs = function () {
	var zip = new JSZip();

	this.gui.notifyDownloadInProgress();

	// For each song in playerSongs, add a promise with the result from the fetch request
	var fetchPromises = [];
	for (var i = 0; i < this.playerSongs.length; i++) {
		// grab each song from wherever we are storing the songs (config.SONGURL) using CORS
		var song = this.playerSongs[i];
		fetchPromises.push(
			fetch(config.SONGURL + song.url, {mode: config.fetchMode})
			.then(function(response){
				// last item in this array is our file name, e.g. 'sofa.m4a'
				var urlSplit = decodeURI(response.url).split('/');
				if (response.ok) {
					return {'fileName': urlSplit[urlSplit.length-1], 'blob': response.blob()};
				}
			})
			.then(function (data) {
				util.log('Adding file: ' + data.fileName);
				zip.file(data.fileName, data.blob);
			})
		);
	}

	// After all the fetches are complete, zip it and saveAs to prompt download for user
	Promise.all(fetchPromises).then(function () {
		util.log('Zipping files.. this might take some time.');
		var zipOptions = {
			type: 'blob',
			compression: 'DEFLATE',
			compressionOptions: {
		        level: 9
		    }
		};
		zip.generateAsync(zipOptions).then(function (value) {
			saveAs(value, "songs.zip"); // from FileSaver.min.js
			global.get('audioManager').gui.notifyDownloadCompleted();
			
			if (config.sendAnalytics) {
				global.get('postToDb')({'type':'download', 'song':'', 'number':fetchPromises.length});
			}
		})
		.catch(function(){
			global.get('audioManager').gui.notifyDownloadCompleted();
		});
	})
	.catch(function(){
		global.get('audioManager').gui.notifyDownloadCompleted();
	});	
};

AudioManager.prototype.isSongPlaying = function (songName) {
	return this.isPlaying && this.playerSongs[this.currentSong].name === songName;
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

// Returns the song position in interval [0,1] 
// (meaning if we are at minut 1:30 of a 3 minute song it returns 0.5)
AudioManager.prototype.getCurrentSongPosition = function () {
	var pos = this.player.getPosition();
	if (pos) {
		var song = this.playerSongs[this.currentSong];
		return pos / util.stringDurationToSecs(song.duration);
	}
};

AudioManager.prototype.songEnded = function () {
	this._setCurrentSongPosition(0);
	if (config.repeatSongs) {
		this.player.resume();
		this.isPlaying = true;
		return;
	}
	if (config.autoplay) {
		// play next song
		this.currentSong = (this.currentSong + 1) % this.playerSongs.length;
		this.playSong(this.playerSongs[this.currentSong].name, true);
	}
};

AudioManager.prototype._setCurrentSongPosition = function (pos) {
	var song = this.playerSongs[this.currentSong];
	this.player.setPosition(pos * util.stringDurationToSecs(song.duration));
	if (pos === 0) {
		this.isPlaying = false;
		this.gui.resetCurrentSong();
	}
};

// This sets an interval function to update the position of the
// seeker in the bar of the song (so it progresses while playing,
// since there are no periodic draws during pause), it is important
// to set this and to stop the interval as well.
// Conveniently this also updates our loading which is part of audioGui
AudioManager.prototype.setIntervalForSongInMenu = function () {
	var n = 100;
	// update every n milliseconds
	this.intervalId = setInterval(function () {
		global.get('audioGui').update(n);
		global.get('audioManager').drawGui();
	}, n);
};

// this will stop the interval, should be called when player resumes game
// and draw updates update the song
AudioManager.prototype.stopIntervalForSongInMenu = function () {
	clearInterval(this.intervalId);
};

AudioManager.prototype.drawGui = function () {
	this.gui.draw();
};

global.set('class/AudioManager', AudioManager);

}());