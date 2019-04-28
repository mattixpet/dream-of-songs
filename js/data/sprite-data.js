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
		'positions' : [	{'x':141,'y':74}, {'x':738,'y':74}, {'x':1344,'y':72}, {'x':139,'y':1072}, {'x':741,'y':1072}, // walking
						{'x':1293,'y':1080}, // jump
						{'x':1960,'y':45}, {'x':1955,'y':1036}, // stairs
						{'x':2468,'y':66}, {'x':3110,'y':70}, {'x':2502,'y':1088}, // still animation
						{'x':3600, 'y':0}, {'x':3600, 'y':1000} // flying
					  ],
		// technically not sprite data, but who cares, player data still
		'startingPosition' : {'x':300,'y':-80},
		// margin to draw player to next scene during mouse controls
		'EDGEMARGIN' : 100,
		// how close to player's feet a click is a jump and how far above the feet to count as a jump
		'FEETMARGIN' : 90,
		// how many milliseconds after which we cancel the movement command
		// unless some other command has been issued or player collided
		'CANCELTIME' : 3000,
		// how close to a destination/objective pixel do we have to be to count as having arrived?
		'DESTMARGIN' : 10,
		// how long during mouse controls to wait until we issue a stop on player
		'SCENECHANGESTOPTIME' : 200,
		// how much to alter bounding box/sprite drawing, see player.js for more explanation
		'COLLISIONXDELTA' : 10,
		'COLLISIONWIDTHREDUCTION' : 30,
		'MIRROREDMARGIN' : 10,
		'COLLISIONHEIGHTREDUCTION' : 8,
		'STAIRMARGIN' : -5,
		'STILLMARGIN' : 20,
		'FLYINGMARGINX' : 27,
		'FLYINGMARGINY' : 7,
		'stillAnimationRadius' : 40,
		'stillAnimationThickness' : 12,
		'stillAnimationNumPoints' : 48,
		'stillAnimationColor' : '#e4e4e4',
		'stillAnimationBorderColor' : '#b3d8f5',
		'ANIMATIONDISTANCE' : 30, // how far to walk/fly whatever before changing animation
		'gogglesRelativePos' : {'x':6,'y':17} // what do subtract from playerX,playerY for goggles sprite draw
	},
	'player-goggles' : {
		'fileurl' : config.SPRITEURL + 'goggles.png',
		'dispWidth' : 30,
		'dispHeight' : 41,
		'srcWidth' : undefined, // this is just a regular sprite, not a spritesheet
		'srcHeight' : undefined,
		'positions' : undefined
	},
	'chest' : {
		'fileurl' : config.SPRITEURL + 'chest-spritesheet.png',
		'dispWidth' : 40,
		'dispHeight' : 50,
		'srcWidth' : 428,
		'srcHeight' : 636,
		'positions' : [{'x':0,'y':6}, {'x':0,'y':643}, {'x':441,'y':9}, {'x':440,'y':641}],
		'COLLISIONYDELTA' : 5,
		'COLLISIONHEIGHTREDUCTION' : 10
	},
	// water animations (currently only in stalagmites scene)
	'stalagmites-water' : {
		'fileurl' : config.SPRITEURL + 'stalagmites-water-spritesheet.png',
		'dispWidth' : 250, // 600/2.4
		'dispHeight' : 63, // 150/2.4 (rounded up)
		'srcWidth' : 600,
		'srcHeight' : 150,
		'positions' : [	{'x':0,'y':0}, {'x':600,'y':0}, {'x':0,'y':150}, 
						{'x':600,'y':150}, {'x':0,'y':300}, {'x':600,'y':300}]
	},
	'raven' : {
		'fileurl' : config.SPRITEURL + 'raven-spritesheet.png',
		'dispWidth' : 65,
		'dispHeight' : 65,
		'srcWidth' : 1144,
		'srcHeight' : 966,
		'positions' : [	{'x':0,'y':966}, {'x':1144,'y':966}, {'x':0,'y':0}, 
						{'x':1144,'y':0}],
		'COLLISIONWIDTHREDUCTION' : 20,
		'COLLISIONHEIGHTREDUCTION' : 5
	}
};

global.set('sprite-data', sprite_data);

}());