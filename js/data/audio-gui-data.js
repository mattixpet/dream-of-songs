// Data for audio gui, basically which icons/images for audio gui to load
// and the sizes of those items.

(function () {

'use strict';

var iconList = ['downarrow', 'download', 'next', 'pause', 'play', 'previous', 'uparrow']; // these are all same size
var iconWidth = 50; // px, icons are square
var barWidth = 200;
var barHeight = 30;
var canvasWidth = 800;
var canvasHeight = 450;

var audio_gui_data = {
	'Spacings' : {
		'margin' : 16, // px
		'itemMarginRight' : 12, // right margin of icons/images in here
		'fontSize' : 16,
		'fontColor' : 'white',
		'font' : 'Monospace',
		'pauseMenuXCoord' : 365, // have the song list in pause at around 50% of screen
		'pauseMenuYCoord' : iconWidth, // just magic kinda
		'songHeight' : Math.floor(iconWidth * 1.1), // height of one song item (one of 5 songs on screen)
		'iconWidth' : iconWidth,
		// positions of up/down arrow in pause menu
		'upArrowPos' : [canvasWidth - iconWidth - 12, 12],
		'downArrowPos' : [canvasWidth - iconWidth - 12, canvasHeight - iconWidth - 12],
		// total songs collected and download all text locations
		'totalSongPos' : [430, 36],
		'downloadAllPos' : [495, canvasHeight - 30]
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