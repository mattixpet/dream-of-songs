// Data for audio gui, basically which icons/images for audio gui to load
// and the sizes of those items.

(function () {

'use strict';

var iconList = ['downarrow', 'download', 'next', 'pause', 'play', 'previous', 'uparrow']; // these are all same size
var iconWidth = 50; // px, icons are square
var barWidth = 200;
var barHeight = 30;
//var canvasWidth = 800;
var canvasHeight = 450;

var audio_gui_data = {
	'Spacings' : {
		'margin' : 16, // px
		'itemMarginRight' : 12, // right margin of icons/images in here
		'fontSize' : 16,
		'fontColor' : 'white',
		'font' : 'Courier, Monaco, monospace',
		'pauseMenuXCoord' : 365, // have the song list in pause at around 50% of screen
		'pauseMenuYCoord' : iconWidth, // just magic kinda
		'inGameXCoord' : 145, // coord for song displaying while in game
		'inGameYCoord' : 380,
		'songHeight' : Math.floor(iconWidth * 1.1), // height of one song item (one of 5 songs on screen)
		'iconWidth' : iconWidth,
		// total songs collected and download all text locations
		'totalSongPos' : {'x':430, 'y':36},
		'downloadAllPos' : {'x':495, 'y':canvasHeight - 30},
		'downloadMargin' : 8,
		'menuDownloadAnimationPos' : {'x':650, 'y':412},
		'gameDownloadAnimationPos' : {'x':700, 'y':420},
		'downloadRadius' : 20,
		'downloadPointThickness' : 6,
		'downloadNumPoints' : 12,
		'downloadAnimationColor' : 'white'
	},
	'bar' : {
		'width' : barWidth,
		'height' : barHeight
	},
	'seeker' : {
		'width' : 10,
		'height' : 20
	}
};

// rest is all same size
for (var i = 0; i < iconList.length; i++) {
	audio_gui_data[iconList[i]] = {'width': iconWidth, 'height': iconWidth};
}

global.set('audio-gui-data', audio_gui_data);

}());