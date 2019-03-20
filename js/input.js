//

(function () {

'use strict';

var consts = global.get('consts');
var util = global.get('util');

var keys = [];

// Variable to be able to single step through one MainLoop cycle
global.set('inSingleCycle', false);

function handleKeydown(e) {
	keys[e.keyCode] = true;

	// quit
	if (keys[consts.KEY_Q]) {
		util.log('Quitting.');
		MainLoop.stop();
	}

	// pause/resume
	if (util.eatKey(consts.KEY_P)) {
		if (MainLoop.isRunning()) {
			util.log('Pausing game.');
			MainLoop.stop();
		} else {
			util.log('Resuming game.');
			MainLoop.start();
		}
	}

	// single step
	if (util.eatKey(consts.KEY_K)) {
		if (!MainLoop.isRunning()) {
			if (!global.get('inSingleCycle')) {
				MainLoop.start();
				global.set('inSingleCycle', true);
			}
		}
	}

	e.preventDefault();
}

function handleKeyup(e) {
	keys[e.keyCode] = false;
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);

global.set('keys', keys);

}());