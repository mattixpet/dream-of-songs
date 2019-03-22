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
		[380,60,false], [440,60,false]
	]
}

global.set('chest-data', chest_data);

}());