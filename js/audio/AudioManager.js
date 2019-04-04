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

	// set title theme ready and as our first song
	this.notifySongOpened(this.getNewSong('title'));

	// index of current song in this.playerSongs
	this.currentSong = 0; // we'll always have at least one song (since we get title theme)

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

AudioManager.prototype.drawGui = function () {
	this.gui.draw();
};

// Returns the name of a random song, and moves the song itself to this.songsDelivered
// Used by the chests on initialization.
// If special === 'title', get our chosen title theme, should be called in audiomanager constructor
// otherwise get random song
AudioManager.prototype.getNewSong = function (special) {
	var rndIdx = util.randInt(0, this.songs.length);
	if (special === 'title') {
		// find our index of 'title' theme, which is called: sofa
		for (var i = 0; i < this.songs.length; i++) {
			if (this.songs[i].name === 'sofa') {
				rndIdx = i; // cheat to get our song !
				break;
			}
		}
	}
	var song = this.songs[rndIdx];
	this.songs.splice(rndIdx, 1); // delete song from our song array
	this.songsDelivered[song.name] = song; // log it here
	return song.name;
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
	}
	// NEED TO FINISH THIS
};

// Put this.playerSongs into a zip folder and prompt user for download
AudioManager.prototype._zipPlayerSongs = function () {
	var zip = new JSZip();

	// For each song in playerSongs, add a promise with the result from the fetch request
	var fetchPromises = [];
	for (var i = 0; i < this.playerSongs.length; i++) {
		// grab each song from wherever we are storing the songs (config.SONGURL) using CORS
		var song = this.playerSongs[i];
		fetchPromises.push(
			fetch(config.SONGURL + song.url, {mode: 'cors'})
			.then(function(response){
				// last item in this array is our file name, e.g. 'sofa.mp3'
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
	Promise.all(fetchPromises).then(function (values) {
		util.log('Zipping files.. this might take some time.');
		zip.generateAsync({type: 'blob'}).then(function (value) {
			saveAs(value, "songs.zip"); // from FileSaver.min.js
		});
	})
};

// The chests should call this function once Player opens them, so we know
// player has this song available, and we can draw it in the list of songs
AudioManager.prototype.notifySongOpened = function (songName) {
	this.playerSongs.push(this.songsDelivered[songName]);
	delete this.songsDelivered[songName];
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

AudioManager.prototype.setCurrentSongPosition = function (pos) {
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
AudioManager.prototype.setIntervalForSongInMenu = function () {
	// update every 500 millisecondss
	this.intervalId = setInterval(function () {
		global.get('audioManager').drawGui();
	}, 500);
};

// this will stop the interval, should be called when player resumes game
// and draw updates update the song
AudioManager.prototype.stopIntervalForSongInMenu = function () {
	clearInterval(this.intervalId);
};

AudioManager.prototype.playTitleTheme = function () {
	this.playSong(this.playerSongs[0].name, true); // title is always first song we have
};

global.set('class/AudioManager', AudioManager);

}());