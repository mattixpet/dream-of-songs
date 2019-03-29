// AudioManager handles retrieving and randomizing songs and delivering them to the chests.

(function () {

'use strict';

var config = global.get('config');
var AudioPlayer = global.get('class/AudioPlayer');
var AudioGUI = global.get('class/AudioGUI');

function AudioManager () {
	this.player = new AudioPlayer();
	global.set('audioPlayer', this.player);
	this.gui = new AudioGUI();


	// test
	this.play(config.SONGURL + 'Lelegar_upptokur/amr/2014/american_psycho.mp3');
}

// play song by url
AudioManager.prototype.play = function (url) {
	this.player.playSong(url);
};

global.set('class/AudioManager', AudioManager);

}());