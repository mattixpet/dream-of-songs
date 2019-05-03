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
	e.preventDefault();

	// if we are typing in a typebox, we must not do anything else with the input
	if (global.get('activeTypebox') && util.eatKey(e.keyCode)) {
		// send our keyCode to the typebox for handling
		global.get('activeTypebox').handleTypedCharacter(e);
		return;
	}

	if (config.devMode) {
		// pause without bringing menu
		if (keys[consts.KEY_L]) {
			util.log('Pausing.');
			MainLoop.stop();
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
	}

	// pause/resume
	if (util.eatKey(consts.KEY_P)) {
		pauseOrResumeGame();
	}
	// default menu interaction (start game, back etc.)
	if (util.eatKey(consts.KEY_ENTER)) {
		var inMenu = global.get('inMenu');
		if (inMenu) {
			global.get(inMenu).onEnter();
		} else {
			// enter works as pause when pressed in game
			pauseOrResumeGame();
		}
	}
	// pause/play song
	if (util.eatKey(consts.KEY_SPACE)) {
		global.get('audioManager').notifySpacePress();
	}
}

// Brings up pause menu or removes it depending on game state
function pauseOrResumeGame() {
	if (global.get('gameStarted')) {
		if (MainLoop.isRunning()) {
			MainLoop.stop();
			global.get('pauseMenu').display(); // this will also draw the gui
		} else {
			global.get('pauseMenu').hide();
			MainLoop.start();
		}	
	}
}

function handleKeyup(e) {
	keys[e.keyCode] = false;

	global.get('player').notifyKeyup(e);
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
		var res = global.get('audioGui').notifyClick(x,y);
		// if we're in game and no action taken by audio gui
		// then we want to pass the click on to our mouse controls (if applicable)
		if (!inMenu && !res && config.mouseControls) {
			global.get('playerMouseAI').notifyClick(x, y);
		}
	}

	if (config.clickToShowCoord) {
		util.log('Clicked x, y: ' + x + ', ' + y);
	}
}

// handleMousemove is used to fade the audio player
// in if user hovers over canvas and out if user moves mouse out of canvas
// (or if it is still for a period of time)
function handleMousemove () {
	if (global.get('gameStarted')) {
		global.get('audioGui').notifyMousemove();
	}
}

// Only for double click checking
var tappedOnce = false;
function handleTouchstart (e) {
	if (config.doubleTapToPause && tappedOnce) {
		pauseOrResumeGame();
	}

	tappedOnce = true;
	setTimeout(function () { tappedOnce = false; }, 300);

	// click where we touch !
	if (global.get('gameStarted')) {
		handleMousedown(e.touches[0]);
	}

	e.preventDefault(); // only needed for mobiles so we won't get the double tap zoom
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
canvas.addEventListener("mousedown", handleMousedown);
canvas.addEventListener("mousemove", handleMousemove);
canvas.addEventListener("touchstart", handleTouchstart);

global.set('keys', keys);

}());