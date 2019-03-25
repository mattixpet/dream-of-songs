// Data for scenes and spawn points for all Chests in game

(function () {

'use strict';

var chest_data = {
	// format
	// {
	//		'sceneName' : [[x0,y0,flipped0], [x1,y1,flipped1], ..],
	//      'anotherScene' : ..
	//	} 
	// where xi, yi are coordinates of the chests to be spawned
	// and flippedi is a boolean if the chest should face left or right respectively
	'smallcliff' : [
		[380,80,false], [440,60,false]
	],
	'abovecave' : [
		[16,0,false], [103,-20,false], [209,-40,true]
	],
	'brokenstairs' : [
		[535,-20,false], [600,-40,false], [664,-60,false]
	]
};

global.set('chest-data', chest_data);

}());