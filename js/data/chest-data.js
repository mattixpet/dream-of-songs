// Data for scenes and spawn points for all Chests in game

(function () {

'use strict';

var consts = global.get('consts');

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
	'insidecave' : [
		[49,212,false,false]
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
	],
	'undergroundvault' : [
		[102,-29,true,false], [162,-40,true,false], [222,-32,true,false], // topleft
		[545,-36,false,false], [605,-41,false,false], [665,-20,false,false], // topright
		[710,110,true,false], [650,112,true,false], [590,92,true,false], // midright
		[40,99,false,false], [100,105,false,false], [160,110,false,false], // midleft
		[47,330,false,false], [107,331,false,false], [167,327,false,false], // botleft
		[601,320,true,false], [661,322,true,false], [721,328,true,false] // botright
	],
	'stalagmites' : [
		[384,395,false,true], // in water
		[731,37,true,true]    // in top right corner
	],
	'brickcave' : [
		[17,-40,false,false]
	],
	'semivault' : [
		// these are same as underground vault !! the right side
		[545,-36,false,false], [605,-41,false,false], [665,-20,false,false], // topright
		[710,110,true,false], [650,112,true,false], [590,92,true,false], // midright
		[601,320,true,false], [661,322,true,false], [721,328,true,false] // botright
	],
	'cavepedestal' : [
		[86,116,false,true], // hidden
		[318,236,true,false], [386,254,false,false] // on pedestal
	],
	'tunnelstart' : [
		[516,145,true,true], [601,151,true,true]
	],
	'hillhole' : [
		[420,139,true,true], [499,142,true,true]
	],
	'hillbottom' : [
		[160,198,true,false], [240,205,true,false], [320,212,true,false],
		[400,225,true,false]
	],
	'hilltopcorner' : [
		[570,99,true,true], [642,102,true,true]
	],
	'skystepping' : [
		[68,65,true,true]
	],
	'skyvault' : undefined, // same as undergroundvault, reused see below this object declaration
	'topskyvault' : undefined
};

// reused chest coordinates
chest_data.skyvault = chest_data.undergroundvault;
// except for skyvault, we need to move 3 chests
var skyvault = chest_data.skyvault;
skyvault[skyvault.length-1][0] -= 220;
skyvault[skyvault.length-6][0] += 280;
skyvault[skyvault.length-5][0] += 160;
//
chest_data.topskyvault = chest_data.skyvault;


// go over our data to set consts.NUMCHESTS and consts.NUMHIDDENCHESTS variables correctly
var numChests = 0;
var numHiddenChests = 0;
for (var scene in chest_data) {
	var chests = chest_data[scene];
	for (var i = 0; i < chests.length; i++) {
		if (chests[i][3]) {
			numHiddenChests++;
		}
	}
	numChests += chests.length;
}
consts.NUMCHESTS = numChests;
consts.NUMHIDDENCHESTS = numHiddenChests;

global.set('chest-data', chest_data);

}());