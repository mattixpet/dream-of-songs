// Data for scenes and spawn points for all Chests in game

(function () {

'use strict';

var chest_data = {
	// format
	// {
	//		'sceneName' : [[x0,y0,flipped0,invis0], [x1,y1,flipped1,invis1], ..],
	//      'anotherScene' : ..
	//	} 
	// where xi, yi are coordinates of the chests to be spawned
	// and flippedi is a boolean if the chest should face left or right respectively
	// invis is true iff chest will not be drawn, but still present to be looted (hidden)
	'clearsky' : [
		[400,-200,true,false]
	],
	'smallcliff' : [
		[380,80,false,false], [440,60,false,false]
	],
	'abovecave' : [
		[16,0,false,false], [103,-20,false,false], [209,-40,true,false]
	],
	'brokenstairs' : [
		[535,-20,false,false], [600,-40,false,false], [664,-60,false,false]
	],
	'cavestairs' : [
		[43,94,true,true] // hidden chest
	],
	'chasm' : [
		[32,131,false,false], [91,161,false,false], [685,-30,true,false]
	],
	'waterfallofdreams' : [
		[258,17,false,true], [316,20,false,true]
	]
};

global.set('chest-data', chest_data);

}());