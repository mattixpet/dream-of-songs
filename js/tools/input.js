//

(function () {

'use strict';

var config = global.get('config');
var consts = global.get('consts');
var util = global.get('util');

var canvas = document.getElementById('dreamOfSongs');

var keys = [];

// Variable to be able to single step through one MainLoop cycle
global.set('inSingleCycle', false);

function handleKeydown(e) {
	keys[e.keyCode] = true;

	// pause without bringing menu
	if (keys[consts.KEY_Q]) {
		util.log('Quitting.');
		MainLoop.stop();
	}

	// pause/resume
	if (util.eatKey(consts.KEY_P)) {
		pauseOrResumeGame();
	}

	if (util.eatKey(consts.KEY_ENTER)) {
		var inMenu = global.get('inMenu');
		if (inMenu) {
			global.get(inMenu).onEnter();
		} else {
			// enter works as pause when pressed in game
			pauseOrResumeGame();
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

	// pause/play song
	if (util.eatKey(consts.KEY_SPACE)) {
		global.get('audioManager').notifySpacePress();
	}

	e.preventDefault();
}

// Brings up pause menu or removes it depending on game state
function pauseOrResumeGame() {
	if (MainLoop.isRunning()) {
		MainLoop.stop();
		global.get('pauseMenu').display(); // this will also draw the gui
	} else {
		global.get('pauseMenu').hide();
		MainLoop.start();
	}
}

function handleKeyup(e) {
	keys[e.keyCode] = false;
}

function handleMousedown(e) {
	var x = e.clientX - canvas.offsetLeft;
	var y = e.clientY - canvas.offsetTop;

	var inMenu = global.get('inMenu');
	if (inMenu) {
		// notify menu up at the moment of the click
		global.get(inMenu).notifyClick(x,y);
	}

	// notify the audio gui we clicked, if only we are in pause or in game
	if (inMenu === 'pauseMenu' || !inMenu || inMenu === 'notificationMenu') {
		global.get('audioGui').notifyClick(x,y);
	}

	if (config.clickToShowCoord) {
		util.log('Clicked x, y: ' + x + ', ' + y);
	}
}

// handleMousemove is used to fade the audio player
// in if user hovers over canvas and out if user moves mouse out of canvas
// (or if it is still for a period of time)
function handleMousemove(e) {
	if (global.get('gameStarted')) {
		global.get('audioGui').notifyMousemove();
	}
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
canvas.addEventListener("mousedown", handleMousedown);
canvas.addEventListener("mousemove", handleMousemove);

global.set('keys', keys);

}());