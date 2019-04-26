// Data for scenes and spawn points for all Ravens (that one..) in game

(function () {

'use strict';

var raven_data = {
	'hilltop' : {'x':486, 'y':29}
};

// scenes to fly to in order (will be added to raven_data)
var raven_hidden_data = {
	'first' : {
		'scene' : 'caveshrub',
		'coords' : {'x':190,'y':96},
		'direction' : 'right'
	},
	'second' : {
		'scene' : 'spikes',
		'coords' : {'x':578,'y':233},
		'direction' : 'right'
	},
	'third' : {
		'scene' : 'singlecloud',
		'coords' : {'x':563,'y':285},
		'direction' : 'left'
	},
	'fourth' : {
		'scene' : 'hillbeach',
		'coords' : {'x':246, 'y':220},
		'direction' : 'left'
	},
	'fifth' : {
		'scene' : 'hilltop',
		'coords' : {'x':486, 'y':29},
		'direction' : 'right'
	},
};

global.set('raven-data', raven_data);
global.set('raven-hidden-data', raven_hidden_data);

}());