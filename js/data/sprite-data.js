// Data for sprites

(function () {

'use strict';

var config = global.get('config');

var sprite_data = {
	'player' : {
		'fileurl' : config.SPRITEURL + 'protagonist-spritesheet.png',
		'dispWidth' : 60, // disp width - width reduction == 30
		'dispHeight' : 108, // disp height - heightrecuction == 100
		'srcWidth' : 423,
		'srcHeight' : 895,
		'positions' : [	[141,74], [738,74], [1344,72], [139,1072], [741,1072], // walking
						[1293,1080], // jump
						[1960,45], [1955,1036], // stairs
						[2468,66], [3110,70], [2502,1088] // still animation
					  ],
		'startingPosition' : [300, 110],
		// how much to alter bounding box/sprite drawing, see player.js for more explanation
		'COLLISIONXDELTA' : 10,
		'COLLISIONWIDTHREDUCTION' : 30,
		'MIRROREDMARGIN' : 10,
		'COLLISIONHEIGHTREDUCTION' : 8,
		'STAIRMARGIN' : -5,
		'STILLMARGIN' : 20,
		'stillAnimationRadius' : 40,
		'stillAnimationThickness' : 12,
		'stillAnimationNumPoints' : 48,
		'stillAnimationColor' : '#e4e4e4',
		'stillAnimationBorderColor' : '#b3d8f5'
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