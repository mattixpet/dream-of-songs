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
			'right' : {'scene' : 'sky04', 'coords' : 'flip'},
			'down' : {'scene' : 'smallcliff', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky00' : {
			'left' : {'scene' : 'skyvault', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds01', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds07', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds00', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds01' : {
			'left' : {'scene' : 'topskyvault', 'coords' : 'flip'},
			'up' : {'scene' : 'sky01', 'coords' : 'flip'},
			'right' : {'scene' : 'sky05', 'coords' : 'flip'},
			'down' : {'scene' : 'sky00', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky01' : {
			'left' : {'scene' : 'skynoclouds02', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'skynoclouds08', 'coords' : 'flip'},
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
			'left' : {'scene' : 'skynoclouds06', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'skynoclouds02', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds03', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds03' : {
			'left' : {'scene' : 'sky03', 'coords' : 'flip'},
			'up' : {'scene' : 'sky02', 'coords' : 'flip'},
			'right' : {'scene' : 'topskyvault', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds04', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds04' : {
			'left' : {'scene' : 'skynoclouds05', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds03', 'coords' : 'flip'},
			'right' : {'scene' : 'skyvault', 'coords' : 'flip'},
			'down' : {'scene' : 'hilltopcorner', 'coords' : 'flip'},
			'special' : undefined
		},
		//
		'skynoclouds05' : {
			'left' : {'scene' : 'sky20', 'coords' : 'flip'},
			'up' : {'scene' : 'sky03', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds04', 'coords' : 'flip'},
			'down' : {'scene' : 'hilltop', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky03' : {
			'left' : {'scene' : 'skynoclouds21', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds06', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds03', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds05', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds06' : {
			'left' : {'scene' : 'sky19', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'sky02', 'coords' : 'flip'},
			'down' : {'scene' : 'sky03', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky04' : {
			'left' : {'scene' : 'skynoclouds00', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds07', 'coords' : 'flip'},
			'right' : {'scene' : 'singlecloud', 'coords' : 'flip'},
			'down' : {'scene' : 'clearskyclouds', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds07' : {
			'left' : {'scene' : 'sky00', 'coords' : 'flip'},
			'up' : {'scene' : 'sky05', 'coords' : 'flip'},
			'right' : {'scene' : 'sky06', 'coords' : 'flip'},
			'down' : {'scene' : 'sky04', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky05' : {
			'left' : {'scene' : 'skynoclouds01', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds08', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds09', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds07', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds08' : {
			'left' : {'scene' : 'sky01', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'msky', 'coords' : 'flip'},
			'down' : {'scene' : 'sky05', 'coords' : 'flip'},
			'special' : undefined
		},
		'singlecloud' : {
			'left' : {'scene' : 'sky04', 'coords' : 'flip'},
			'up' : {'scene' : 'sky06', 'coords' : 'flip'},
			'right' : {'scene' : 'skystepping00', 'coords' : 'flip'},
			'down' : {'scene' : 'clearsky', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky06' : {
			'left' : {'scene' : 'skynoclouds07', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds09', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds10', 'coords' : 'flip'},
			'down' : {'scene' : 'singlecloud', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds09' : {
			'left' : {'scene' : 'sky05', 'coords' : 'flip'},
			'up' : {'scene' : 'msky', 'coords' : 'flip'},
			'right' : {'scene' : 'sky09', 'coords' : 'flip'},
			'down' : {'scene' : 'sky06', 'coords' : 'flip'},
			'special' : undefined
		},
		'msky' : {
			'left' : {'scene' : 'skynoclouds08', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'skynoclouds11', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds09', 'coords' : 'flip'},
			'special' : undefined
		},
		'skystepping00' : {
			'left' : {'scene' : 'singlecloud', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds10', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds12', 'coords' : 'flip'},
			'down' : {'scene' : 'cave', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds10' : {
			'left' : {'scene' : 'sky06', 'coords' : 'flip'},
			'up' : {'scene' : 'sky09', 'coords' : 'flip'},
			'right' : {'scene' : 'sky10', 'coords' : 'flip'},
			'down' : {'scene' : 'skystepping00', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky09' : {
			'left' : {'scene' : 'skynoclouds09', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds11', 'coords' : 'flip'},
			'right' : {'scene' : 'skyvault00', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds10', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds11' : {
			'left' : {'scene' : 'msky', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'topskyvault00', 'coords' : 'flip'},
			'down' : {'scene' : 'sky09', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds12' : {
			'left' : {'scene' : 'skystepping00', 'coords' : 'flip'},
			'up' : {'scene' : 'sky10', 'coords' : 'flip'},
			'right' : {'scene' : 'sky11', 'coords' : 'flip'},
			'down' : {'scene' : 'abovecave', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky10' : {
			'left' : {'scene' : 'skynoclouds10', 'coords' : 'flip'},
			'up' : {'scene' : 'skyvault00', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds13', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds12', 'coords' : 'flip'},
			'special' : undefined
		},
		'skyvault00' : {
			'left' : {'scene' : 'sky09', 'coords' : 'flip'},
			'up' : {'scene' : 'topskyvault00', 'coords' : 'flip'},
			'right' : {'scene' : 'sky12', 'coords' : 'flip'},
			'down' : {'scene' : 'sky10', 'coords' : 'flip'},
			'special' : undefined
		},
		'topskyvault00' : {
			'left' : {'scene' : 'skynoclouds11', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'skynoclouds14', 'coords' : 'flip'},
			'down' : {'scene' : 'skyvault00', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky11' : {
			'left' : {'scene' : 'skynoclouds12', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds13', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds15', 'coords' : 'flip'},
			'down' : {'scene' : 'arrowsky', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds13' : {
			'left' : {'scene' : 'sky10', 'coords' : 'flip'},
			'up' : {'scene' : 'sky12', 'coords' : 'flip'},
			'right' : {'scene' : 'sky13', 'coords' : 'flip'},
			'down' : {'scene' : 'sky11', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky12' : {
			'left' : {'scene' : 'skyvault00', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds14', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds16', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds13', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds14' : {
			'left' : {'scene' : 'topskyvault00', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'sky14', 'coords' : 'flip'},
			'down' : {'scene' : 'sky12', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds15' : {
			'left' : {'scene' : 'sky11', 'coords' : 'flip'},
			'up' : {'scene' : 'sky13', 'coords' : 'flip'},
			'right' : {'scene' : 'sky15', 'coords' : 'flip'},
			'down' : {'scene' : 'actuallyclearsky', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky13' : {
			'left' : {'scene' : 'skynoclouds13', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds16', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds17', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds15', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds16' : {
			'left' : {'scene' : 'sky12', 'coords' : 'flip'},
			'up' : {'scene' : 'sky14', 'coords' : 'flip'},
			'right' : {'scene' : 'sky16', 'coords' : 'flip'},
			'down' : {'scene' : 'sky13', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky14' : {
			'left' : {'scene' : 'skynoclouds14', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'skynoclouds18', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds16', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky15' : {
			'left' : {'scene' : 'skynoclouds15', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds17', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds20', 'coords' : 'flip'},
			'down' : {'scene' : 'beach', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds17' : {
			'left' : {'scene' : 'sky13', 'coords' : 'flip'},
			'up' : {'scene' : 'sky16', 'coords' : 'flip'},
			'right' : {'scene' : 'sky18', 'coords' : 'flip'},
			'down' : {'scene' : 'sky15', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky16' : {
			'left' : {'scene' : 'skynoclouds16', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds18', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds19', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds17', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds18' : {
			'left' : {'scene' : 'sky14', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'sky17', 'coords' : 'flip'},
			'down' : {'scene' : 'sky16', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds20' : {
			'left' : {'scene' : 'sky15', 'coords' : 'flip'},
			'up' : {'scene' : 'sky18', 'coords' : 'flip'},
			'right' : undefined,
			'down' : {'scene' : 'water01', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky18' : {
			'left' : {'scene' : 'skynoclouds17', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds19', 'coords' : 'flip'},
			'right' : undefined,
			'down' : {'scene' : 'skynoclouds20', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds19' : {
			'left' : {'scene' : 'sky16', 'coords' : 'flip'},
			'up' : {'scene' : 'sky17', 'coords' : 'flip'},
			'right' : undefined,
			'down' : {'scene' : 'sky18', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky17' : {
			'left' : {'scene' : 'skynoclouds18', 'coords' : 'flip'},
			'up' : undefined,
			'right' : undefined,
			'down' : {'scene' : 'skynoclouds19', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky19' : {
			'left' : {'scene' : 'tinycloud', 'coords' : 'flip'},
			'up' : undefined,
			'right' : {'scene' : 'skynoclouds06', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds21', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds21' : {
			'left' : {'scene' : 'sky21', 'coords' : 'flip'},
			'up' : {'scene' : 'sky19', 'coords' : 'flip'},
			'right' : {'scene' : 'sky03', 'coords' : 'flip'},
			'down' : {'scene' : 'sky20', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky20' : {
			'left' : {'scene' : 'skynoclouds24', 'coords' : 'flip'},
			'up' : {'scene' : 'skynoclouds21', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds05', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds22', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds22' : {
			'left' : {'scene' : 'sky22', 'coords' : 'flip'},
			'up' : {'scene' : 'sky20', 'coords' : 'flip'},
			'right' : {'scene' : 'hilltop', 'coords' : 'flip'},
			'down' : {'scene' : 'hillbeach', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky22' : {
			'left' : undefined,
			'up' : {'scene' : 'skynoclouds24', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds22', 'coords' : 'flip'},
			'down' : {'scene' : 'water00', 'coords' : 'flip'},
			'special' : undefined
		},
		'skynoclouds24' : {
			'left' : undefined,
			'up' : {'scene' : 'sky21', 'coords' : 'flip'},
			'right' : {'scene' : 'sky20', 'coords' : 'flip'},
			'down' : {'scene' : 'sky22', 'coords' : 'flip'},
			'special' : undefined
		},
		'sky21' : {
			'left' : undefined,
			'up' : {'scene' : 'tinycloud', 'coords' : 'flip'},
			'right' : {'scene' : 'skynoclouds21', 'coords' : 'flip'},
			'down' : {'scene' : 'skynoclouds24', 'coords' : 'flip'},
			'special' : undefined
		},
		'tinycloud' : {
			'left' : undefined,
			'up' : undefined,
			'right' : {'scene' : 'sky19', 'coords' : 'flip'},
			'down' : {'scene' : 'sky21', 'coords' : 'flip'},
			'special' : undefined
		}
	}
};

global.set('background-sky-data', background_sky_data);

}());