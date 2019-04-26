// Data for scenes and spawn points for all Chests in game

(function () {

'use strict';

var consts = global.get('consts');
var util = global.get('util');

var chest_data = {
	// format
	// {
	//		'sceneName' : [{'x':x0,'y':y0,'flipped':flipped0,'hidden':invis0 [,'message':msg0, 'flying':fly0]}, 
	// 					   {'x':x1,'y':y1,'flipped':flipped1,'hidden':invis1 [,'message':msg1, 'flying':fly1]}, ..],
	//      'anotherScene' : ..
	//	} 
	// where xi, yi are coordinates of the chests to be spawned
	// and flippedi is a boolean if the chest should face left or right respectively
	// invis is true iff chest will not be drawn, but still present to be looted (hidden)
	// message is the key of optional message to prompt to user located in
	//   data/menu-text-data.js in notificationMenu
	// flying is optional and means whether or not to have them fall with gravity or be stuck in the air
	'clearsky' : [
		{'x':400,'y':-200,'flipped':true,'hidden':false}
	],
	'insidecave' : [
		{'x':49,'y':212,'flipped':false,'hidden':false}
	],
	'smallcliff' : [
		{'x':380,'y':80,'flipped':false,'hidden':false}, {'x':440,'y':60,'flipped':false,'hidden':false},
		{'x':589,'y':-20,'flipped':false,'hidden':true}
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
		{'x':516,'y':145,'flipped':true,'hidden':true}, {'x':601,'y':151,'flipped':true,'hidden':true},
		{'x':36,'y':5,'flipped':false,'hidden':true}, {'x':107,'y':4,'flipped':false,'hidden':true}
	],
	'tunnelflipped' : [
		{'x':555,'y':5,'flipped':false,'hidden':true}, {'x':21,'y':5,'flipped':false,'hidden':true},
		{'x':97,'y':3,'flipped':false,'hidden':true}
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
	'spikes' : [
		{'x':727,'y':3,'flipped':true,'hidden':false,'message':'only-way-to-fly'}
	],
	'semivaulttop' : undefined, // reuse from semivault
	'mountain' : [
		{'x':666,'y':170,'flipped':true,'hidden':false}, {'x':716,'y':140,'flipped':true,'hidden':false},
		{'x':761,'y':110,'flipped':true,'hidden':false}
	],
	'singlecloud' : [
		{'x':466,'y':237,'flipped':false,'hidden':false}, {'x':516,'y':280,'flipped':false,'hidden':false},
		{'x':631,'y':280,'flipped':true,'hidden':false}, {'x':681,'y':237,'flipped':true,'hidden':false}
	],
	'skyvault00' : undefined,
	'topskyvault00' : undefined,
	'skystepping00' : [
		{'x':18,'y':65,'flipped':false,'hidden':true}, {'x':68,'y':65,'flipped':false,'hidden':true},
		{'x':147,'y':-40,'flipped':false,'hidden':true}
	],
	'tunnel' : [
		{'x':349,'y':273,'flipped':true,'hidden':false}, {'x':419,'y':272,'flipped':false,'hidden':false}
	],
	'mountainwater' : [
		{'x':15,'y':174,'flipped':false,'hidden':false}, {'x':99,'y':174,'flipped':false,'hidden':false},
		{'x':186,'y':174,'flipped':false,'hidden':false}
	],
	'cavewater' : [
		{'x':133,'y':89,'flipped':false,'hidden':false,'flying':true}, {'x':190,'y':119,'flipped':false,'hidden':false,'flying':true},
		{'x':71,'y':169,'flipped':false,'hidden':false,'flying':true}, {'x':289,'y':209,'flipped':false,'hidden':false,'flying':true},
		{'x':350,'y':259,'flipped':false,'hidden':false,'flying':true}, {'x':122,'y':259,'flipped':false,'hidden':false,'flying':true},
		{'x':109,'y':363,'flipped':false,'hidden':false}, {'x':224,'y':356,'flipped':false,'hidden':false},
		{'x':344,'y':361,'flipped':false,'hidden':false}, {'x':455,'y':363,'flipped':false,'hidden':false},
		{'x':555,'y':359,'flipped':false,'hidden':false}, {'x':193,'y':219,'flipped':false,'hidden':false,'flying':true}
	],
	'msky' : [
		{'x':103,'y':315,'flipped':false,'hidden':false,'flying':true}, {'x':138,'y':256,'flipped':false,'hidden':false,'flying':true},
		{'x':172,'y':199,'flipped':false,'hidden':false,'flying':true}, {'x':207,'y':139,'flipped':false,'hidden':false,'flying':true},
		{'x':242,'y':89,'flipped':false,'hidden':false,'flying':true}, {'x':279,'y':37,'flipped':false,'hidden':false,'flying':true},
		{'x':325,'y':89,'flipped':false,'hidden':false,'flying':true}, {'x':363,'y':143,'flipped':false,'hidden':false,'flying':true},
		{'x':387,'y':193,'flipped':false,'hidden':false,'flying':true}, {'x':422,'y':143,'flipped':false,'hidden':false,'flying':true},
		{'x':444,'y':89,'flipped':false,'hidden':false,'flying':true}, {'x':489,'y':43,'flipped':false,'hidden':false,'flying':true},
		{'x':532,'y':87,'flipped':false,'hidden':false,'flying':true}, {'x':564,'y':139,'flipped':false,'hidden':false,'flying':true},
		{'x':598,'y':193,'flipped':false,'hidden':false,'flying':true}, {'x':624,'y':255,'flipped':false,'hidden':false,'flying':true},
		{'x':652,'y':313,'flipped':false,'hidden':false,'flying':true}
	],
	// wowsa
	'youwin' : [
		{'x':58,'y':-2,'flipped':false,'hidden':false,'flying':true}, {'x':236,'y':2,'flipped':false,'hidden':false,'flying':true},
		{'x':370,'y':2,'flipped':false,'hidden':false,'flying':true}, {'x':528,'y':13,'flipped':false,'hidden':false,'flying':true},
		{'x':669,'y':6,'flipped':false,'hidden':false,'flying':true}, {'x':100,'y':41,'flipped':false,'hidden':false,'flying':true},
		{'x':186,'y':45,'flipped':false,'hidden':false,'flying':true}, {'x':314,'y':47,'flipped':false,'hidden':false,'flying':true},
		{'x':423,'y':52,'flipped':false,'hidden':false,'flying':true}, {'x':529,'y':85,'flipped':false,'hidden':false,'flying':true},
		{'x':669,'y':71,'flipped':false,'hidden':false,'flying':true}, {'x':141,'y':100,'flipped':false,'hidden':false,'flying':true},
		{'x':278,'y':100,'flipped':false,'hidden':false,'flying':true}, {'x':446,'y':112,'flipped':false,'hidden':false,'flying':true},
		{'x':143,'y':162,'flipped':false,'hidden':false,'flying':true}, {'x':322,'y':158,'flipped':false,'hidden':false,'flying':true},
		{'x':400,'y':170,'flipped':false,'hidden':false,'flying':true}, {'x':541,'y':145,'flipped':false,'hidden':false,'flying':true},
		{'x':670,'y':133,'flipped':false,'hidden':false,'flying':true}, {'x':615,'y':176,'flipped':false,'hidden':false,'flying':true},
		{'x':67,'y':228,'flipped':false,'hidden':false,'flying':true}, {'x':257,'y':231,'flipped':false,'hidden':false,'flying':true},
		{'x':379,'y':236,'flipped':false,'hidden':false,'flying':true}, {'x':498,'y':227,'flipped':false,'hidden':false,'flying':true},
		{'x':635,'y':235,'flipped':false,'hidden':false,'flying':true}, {'x':557,'y':268,'flipped':false,'hidden':false,'flying':true},
		{'x':86,'y':292,'flipped':false,'hidden':false,'flying':true}, {'x':236,'y':291,'flipped':false,'hidden':false,'flying':true},
		{'x':382,'y':295,'flipped':false,'hidden':false,'flying':true}, {'x':503,'y':297,'flipped':false,'hidden':false,'flying':true},
		{'x':636,'y':284,'flipped':false,'hidden':false,'flying':true}, {'x':597,'y':315,'flipped':false,'hidden':false,'flying':true},
		{'x':160,'y':315,'flipped':false,'hidden':false,'flying':true}, {'x':107,'y':361,'flipped':false,'hidden':false,'flying':true},
		{'x':211,'y':362,'flipped':false,'hidden':false,'flying':true}, {'x':383,'y':364,'flipped':false,'hidden':false,'flying':true},
		{'x':507,'y':361,'flipped':false,'hidden':false,'flying':true}, {'x':636,'y':362,'flipped':false,'hidden':false,'flying':true}
	],
	'sky17' : [
		{'x':690,'y':45,'flipped':true,'hidden':false,'flying':true}
	],
	'tinycloud' : [
		{'x':88,'y':74,'flipped':false,'hidden':false,'flying':true}
	],
	'beach' : [
		{'x':188,'y':61,'flipped':true,'hidden':false}, {'x':242,'y':91,'flipped':true,'hidden':false}
	],
	'hillbeach' : [
		{'x':344,'y':158,'flipped':false,'hidden':false}, {'x':409,'y':112,'flipped':false,'hidden':false},
		{'x':474,'y':67,'flipped':false,'hidden':false}, {'x':247,'y':370,'flipped':true,'hidden':true,'flying':true}
	],
	'water00' : [
		{'x':8,'y':218,'flipped':false,'hidden':true}
	],
	'water01' : [
		{'x':747,'y':217,'flipped':true,'hidden':true}
	],
	'darkchasm' : [
		{'x':55,'y':38,'flipped':false,'hidden':false}, {'x':114,'y':34,'flipped':false,'hidden':false},
		{'x':175,'y':36,'flipped':false,'hidden':false}, {'x':570,'y':36,'flipped':true,'hidden':false},
		{'x':631,'y':36,'flipped':true,'hidden':false}, {'x':690,'y':35,'flipped':true,'hidden':false}
	]
};

// reused chest coordinates
chest_data.semivaulttop = chest_data.semivault.slice(0,6); // only top two rows of chests from semivault

// except for skyvault/topskyvault, we need to move 3 chests
chest_data.skyvault = util.deepCopy(chest_data.undergroundvault);
var skyvault = chest_data.skyvault;
skyvault[skyvault.length-1].x -= 220;
skyvault[skyvault.length-6].x += 280;
skyvault[skyvault.length-5].x += 160;
//
chest_data.topskyvault = chest_data.skyvault;
chest_data.skyvault00 = chest_data.skyvault;
chest_data.topskyvault00 = chest_data.skyvault;

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