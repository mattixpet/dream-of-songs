// Data for scenes and spawn points for all Chests in game

(function () {

'use strict';

var consts = global.get('consts');
var util = global.get('util');

var chest_data = {
	// format
	// {
	//		'sceneName' : [{'x':x0,'y':y0,'flipped':flipped0,'hidden':invis0 [,'message':msg0]}, 
	// 					   {'x':x1,'y':y1,'flipped':flipped1,'hidden':invis1 [,'message':msg1]}, ..],
	//      'anotherScene' : ..
	//	} 
	// where xi, yi are coordinates of the chests to be spawned
	// and flippedi is a boolean if the chest should face left or right respectively
	// invis is true iff chest will not be drawn, but still present to be looted (hidden)
	// message is the key of optional message to prompt to user located in
	//   data/menu-text-data.js in notificationMenu
	'clearsky' : [
		{'x':400,'y':-200,'flipped':true,'hidden':false}
	],
	'insidecave' : [
		{'x':49,'y':212,'flipped':false,'hidden':false}
	],
	'smallcliff' : [
		{'x':380,'y':80,'flipped':false,'hidden':false}, {'x':440,'y':60,'flipped':false,'hidden':false}
	],
	'abovecave' : [
		{'x':16,'y':0,'flipped':false,'hidden':false}, {'x':103,'y':-20,'flipped':false,'hidden':false}, 
		{'x':209,'y':-40,'flipped':true,'hidden':false}
	],
	'brokenstairs' : [
		{'x':535,'y':-20,'flipped':false,'hidden':false}, {'x':600,'y':-40,'flipped':false,'hidden':false}, 
		{'x':664,'y':-60,'flipped':false,'hidden':false}
	],
	'cavestairs' : [
		{'x':43,'y':94,'flipped':true,'hidden':true} // hidden chest
	],
	'chasm' : [
		{'x':32,'y':131,'flipped':false,'hidden':false}, {'x':91,'y':161,'flipped':false,'hidden':false}, 
		{'x':685,'y':-30,'flipped':true,'hidden':false}, {'x':150,'y':240,'flipped':false,'hidden':false}
	],
	'waterfallofdreams' : [
		{'x':258,'y':17,'flipped':false,'hidden':true}, {'x':316,'y':20,'flipped':false,'hidden':true}
	],
	'undergroundvault' : [
		{'x':102,'y':-29,'flipped':true,'hidden':false}, {'x':162,'y':-40,'flipped':true,'hidden':false}, {'x':222,'y':-32,'flipped':true,'hidden':false}, // topleft
		{'x':545,'y':-36,'flipped':false,'hidden':false}, {'x':605,'y':-41,'flipped':false,'hidden':false}, {'x':665,'y':-20,'flipped':false,'hidden':false}, // topright
		{'x':710,'y':110,'flipped':true,'hidden':false}, {'x':650,'y':112,'flipped':true,'hidden':false}, {'x':590,'y':92,'flipped':true,'hidden':false}, // midright
		{'x':40,'y':99,'flipped':false,'hidden':false}, {'x':100,'y':105,'flipped':false,'hidden':false}, {'x':160,'y':110,'flipped':false,'hidden':false}, // midleft
		{'x':47,'y':330,'flipped':false,'hidden':false}, {'x':107,'y':331,'flipped':false,'hidden':false}, {'x':167,'y':327,'flipped':false,'hidden':false}, // botleft
		{'x':601,'y':320,'flipped':true,'hidden':false}, {'x':661,'y':322,'flipped':true,'hidden':false}, {'x':721,'y':328,'flipped':true,'hidden':false} // botright
	],
	'stalagmites' : [
		{'x':384,'y':395,'flipped':false,'hidden':true}, // in water
		{'x':731,'y':37,'flipped':true,'hidden':true}    // in top right corner
	],
	'brickcave' : [
		{'x':17,'y':-40,'flipped':false,'hidden':false}
	],
	'semivault' : [
		// these are same as underground vault !! the right side
		{'x':545,'y':-36,'flipped':false,'hidden':false}, {'x':605,'y':-41,'flipped':false,'hidden':false}, {'x':665,'y':-20,'flipped':false,'hidden':false}, // topright
		{'x':710,'y':110,'flipped':true,'hidden':false}, {'x':650,'y':112,'flipped':true,'hidden':false}, {'x':590,'y':92,'flipped':true,'hidden':false}, // midright
		{'x':601,'y':320,'flipped':true,'hidden':false}, {'x':661,'y':322,'flipped':true,'hidden':false}, {'x':721,'y':328,'flipped':true,'hidden':false} // botright
	],
	'cavepedestal' : [
		{'x':86,'y':116,'flipped':false,'hidden':true}, // hidden
		{'x':318,'y':236,'flipped':true,'hidden':false}, {'x':386,'y':254,'flipped':false,'hidden':false} // on pedestal
	],
	'tunnelstart' : [
		{'x':516,'y':145,'flipped':true,'hidden':true}, {'x':601,'y':151,'flipped':true,'hidden':true}
	],
	'hillhole' : [
		{'x':420,'y':139,'flipped':true,'hidden':true}, {'x':499,'y':142,'flipped':true,'hidden':true}
	],
	'hillbottom' : [
		{'x':160,'y':198,'flipped':true,'hidden':false}, {'x':240,'y':205,'flipped':true,'hidden':false}, 
		{'x':320,'y':212,'flipped':true,'hidden':false}, {'x':400,'y':225,'flipped':true,'hidden':false}
	],
	'hilltopcorner' : [
		{'x':570,'y':99,'flipped':true,'hidden':true}, {'x':642,'y':102,'flipped':true,'hidden':true}
	],
	'skystepping' : [
		{'x':68,'y':65,'flipped':true,'hidden':true}
	],
	'skyvault' : undefined, // same as undergroundvault, reused see below this object declaration
	'topskyvault' : undefined,
	'hilltop' : [
		// hidden one on the cross with the raven, message is key in data/menu-text-data.js.notificationMenu
		{'x':490,'y':28,'flipped':false,'hidden':true,'message':'raven'},
		{'x':590,'y':80,'flipped':false,'hidden':false}, {'x':670,'y':84,'flipped':false,'hidden':false}, 
		{'x':310,'y':87,'flipped':false,'hidden':false}, {'x':390,'y':89,'flipped':false,'hidden':false}
	],
	'insidehill' : [
		{'x':335,'y':228,'flipped':false,'hidden':false}, {'x':395,'y':228,'flipped':false,'hidden':false},
		{'x':182,'y':220,'flipped':false,'hidden':true}, {'x':246,'y':219,'flipped':false,'hidden':true} // hidden ones
	],
	'caveshrub' : [
		{'x':188,'y':97,'flipped':true,'hidden':true}, {'x':614,'y':18,'flipped':true,'hidden':false}, 
		{'x':680,'y':25,'flipped':true,'hidden':false},	{'x':744,'y':39,'flipped':true,'hidden':false}
	],
	'spikes' :[
		{'x':727,'y':3,'flipped':true,'hidden':false,'message':'only-way-to-fly'}
	]
};

// reused chest coordinates
chest_data.skyvault = util.deepCopy(chest_data.undergroundvault);
// except for skyvault, we need to move 3 chests
var skyvault = chest_data.skyvault;
skyvault[skyvault.length-1].x -= 220;
skyvault[skyvault.length-6].x += 280;
skyvault[skyvault.length-5].x += 160;
//
chest_data.topskyvault = chest_data.skyvault;


// go over our data to set consts.NUMCHESTS and consts.NUMHIDDENCHESTS variables correctly
var numChests = 0;
var numHiddenChests = 0;
for (var scene in chest_data) {
	var chests = chest_data[scene];
	for (var i = 0; i < chests.length; i++) {
		if (chests[i].hidden) {
			numHiddenChests++;
		}
	}
	numChests += chests.length;
}
consts.NUMCHESTS = numChests;
consts.NUMHIDDENCHESTS = numHiddenChests;

global.set('chest-data', chest_data);

}());