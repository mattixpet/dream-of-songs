// Data for Connections of the skies (because it is so many connections)
// Only used in background-data.js

(function () {

'use strict';

var background_sky_data = {
	'Connections' : {
		// O.G.
		'skystepping' : {
			'left' : {'scene' : 'hilltopcorner', 'coords' : 'flip'},
			'up' : {'scene' : 'skyvault', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds00', 'coords' : 'flip'}, // sky0 will resolve to sky for everything except the connections
			'down' : {'scene' : 'tophillhole', 'coords' : 'flip'},
			'special' : undefined
		},
		'skyvault' : {
			'left' : {'scene' : 'skynoclouds04', 'coords' : 'flip'},
			'up' : {'scene' : 'topskyvault', 'coords' : 'flip'},
			'right' : {'scene' : 'sky00', 'coords' : 'flip'},
			'down' : {'scene' : 'skystepping', 'coords' : 'flip'},
			'special' : undefined
		},
		'topskyvault' : {
			'left' : {'scene' : 'skynoclouds03', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds02', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds01', 'coords' : 'flip'},
			'down' : {'scene' : 'skyvault', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds00' : {
			'left' : {'scene' : 'skystepping', 'coords' : 'flip'},
			'up' : {'scene' : 'sky00', 'coords' : 'flip'},
			'right' : undefined,
			'down' : {'scene' : 'smallcliff', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky00' : {
			'left' : {'scene' : 'skyvault', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds01', 'coords' : 'flip'},
			'right' : undefined,
			'down' : {'scene' : 'skynoclouds00', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds01' : {
			'left' : {'scene' : 'topskyvault', 'coords' : 'flip'},
			'up' : {'scene' : 'sky01', 'coords' : 'flip'},
			'right' : undefined,
			'down' : {'scene' : 'sky00', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky01' : {
			'left' : {'scene' : 'skynoclouds02', 'coords' : 'flip'},
			'up' : undefined,
			'right' : undefined,
			'down' : {'scene' : 'skynoclouds01', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds02' : {
			'left' : {'scene' : 'sky02', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'sky01', 'coords' : 'flip'},
			'down' : {'scene' : 'topskyvault', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky02' : {
			'left' : undefined,
			'up' : undefined,
			'right' : {'scene' : 'skynoclouds02', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds03', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds03' : {
			'left' : undefined,
			'up' : {'scene' : 'sky02', 'coords' : 'flip'},
			'right' : {'scene' : 'topskyvault', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds04', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds04' : {
			'left' : undefined,
			'up' : {'scene' : 'skynoclouds03', 'coords' : 'flip'},
			'right' : {'scene' : 'skyvault', 'coords' : 'flip'},
			'down' : {'scene' : 'hilltopcorner', 'coords' : 'flip'},
			'special' : undefined
		},
		//
		'singlecloud' : {
			'left' : undefined,
			'up' : undefined,
			'right' : undefined,
			'down' : undefined,
			'special' : undefined
		}
	}
};

global.set('background-sky-data', background_sky_data);

}());