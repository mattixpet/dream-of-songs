// Data for scenes and spawn points for all Spikes in game
// (currently only in spikes scene (hehe))

(function () {

'use strict';

var spike_data = {
	// spikes is the name of the scene, respawnX/Y is where entity that dies on us should be spawned again
	'spikes' : {'x':181, 'y':385, 'width':558, 'height':54, 'respawnX':100, 'respawnY':10}
};

global.set('spike-data', spike_data);

}());