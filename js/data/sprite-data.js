// Data for sprites

(function () {

'use strict';

var config = global.get('config');

var sprite_data = {
	'player' : {
		'fileurl' : config.SPRITEURL + 'protagonist-spritesheet.png',
		'dispWidth' : 60,
		'dispHeight' : 100,
		'srcWidth' : 365,
		'srcHeight' : 827,
		'positions' : [[141,74], [738,74], [1344,72], [139,1072], [741,1072]]
	},
	'chest' : {
		'fileurl' : config.SPRITEURL + 'chest-spritesheet.png',
		'dispWidth' : 40,
		'dispHeight' : 50,
		'srcWidth' : 428,
		'srcHeight' : 636,
		'positions' : [[0,6], [0, 643], [441, 9], [440, 641]]
	}
};

global.set('sprite-data', sprite_data);

}());