// My javascript game Dream Of Songs
// Matthias Petursson - oldschool01123@gmail.com

(function () {

'use strict';

// imports
var util = global.get('util');
var config = global.get('config');
var consts = global.get('consts');
var LoadingBar = global.get('class/LoadingBar'); // loading bar constructor
var ImageHandler = global.get('class/ImageHandler');
var Player = global.get('class/Player');
var Chest = global.get('class/Chest');
var EntityManager = global.get('class/EntityManager');
var Background = global.get('class/Background');
var CollisionManager = global.get('class/CollisionManager');
var StartMenu = global.get('class/StartMenu');

global.set('canvas', document.getElementById('dreamOfSongs'));
var canvas = global.get('canvas');
global.set('ctx', canvas.getContext('2d')); // context
var ctx = global.get('ctx');

function startLoading() {
	var loadingBar = new LoadingBar();
	global.set('loadingBar', loadingBar);

	loadingBar.preloadImage(continueLoading); // have to actually preload the (go figure) loading background
}

function continueLoading() {
	// background image of loading bar should now be loaded
	var loadingBar = global.get('loadingBar');
	loadingBar.start();

	var imageHandler = new ImageHandler(loadingBar);
	global.set('imageHandler', imageHandler);

	// load all images/sprites in game, then invoke initGame callback
	imageHandler.preloadImages(initGame);
}

function begin() {
	var keys = global.get('keys');

	// handle in game input logic (other logic is in input.js)
	if (util.eatKey(consts.KEY_G)) {
		util.log('Toggling grid.');
		config.drawBackgroundGrid = !config.drawBackgroundGrid;
	}

	if (util.eatKey(consts.KEY_B)) {
		util.log('Toggling bounding boxes.');
		config.drawBoundingBoxes = !config.drawBoundingBoxes;
	}

	if (util.eatKey(consts.KEY_O)) {
		util.log('Toggling snake mode.');
		config.snakeMode = !config.snakeMode;
		config.gravity = !config.gravity;
	}

	// print player info!
	if (util.eatKey(consts.KEY_I)) {
		var out = '';
		var player = global.get('player');
		for (var prop in player) {
			if (player.hasOwnProperty(prop)) {
				out += '\n' + prop + ': ' + player[prop];
			}
		}
		util.log('\nPlayer information: ' +
			out
		);
	}
}

function update(dt) {
	var entityManager = global.get('entityManager');
	var entities = entityManager.getEntities();
	for (var key in entities) {
		entities[key].update(dt);
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	var background = global.get('background');
	background.draw();

	var entityManager = global.get('entityManager');
	var entities = entityManager.getEntities();
	var player = global.get('player');
	for (var key in entities) {
		var entity = entities[key];
		if (entity !== player) {
			entities[key].draw();
		}
	}
	// special case, let's always draw Player last (so he's in foreground)
	player.draw();
}

function end(fps, panic) {
	displayDiagnostics(fps);
	
	if (panic) {
        // This pattern introduces non-deterministic behavior, but in this case
        // it's better than the alternative (the application would look like it
        // was running very quickly until the simulation caught up to real
        // time). See the documentation for `MainLoop.setEnd()` for additional
        // explanation.
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        util.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }

    // for single stepping, see input.js
	if (global.get('inSingleCycle')) {
		MainLoop.stop();
		global.set('inSingleCycle', false);
	}
}

function initGame() {
	// create all our entities and objects we need before we start the game
	var startMenu = new StartMenu(global.get('imageHandler').getSprite('waterfallofdreams'), startGame); // this then calls startGame when user clicks start
	//var pauseMenu = new PauseMenu();
	//global.set('pauseMenu', pauseMenu);

	var entityManager = new EntityManager();
	global.set('entityManager', entityManager);

	var background = new Background();
	global.set('background', background);

	var collisionManager = new CollisionManager();
	global.set('collisionManager', collisionManager);

	var player = new Player(300, 110);
	entityManager.register(player, consts.STARTINGSCENE);
	global.set('player', player); // used for drawing player last and for diagnostics

	var loadingBar = global.get('loadingBar');
	if (loadingBar.getProgress() !== 1) {
		util.warn('Loading not finished when it should be, setting as finished to continue game.');
		loadingBar.updateProgress(1); // end loading
	}

	startMenu.display();
}

function startGame() {
	//  Start the game !
	MainLoop.setBegin(begin).setUpdate(update).setDraw(draw).setEnd(end).start();
}

function displayDiagnostics(fps) {
	ctx.save();

	ctx.fillStyle = 'white';
	ctx.font = 'normal 12px Monospace';

	// Display Player x,y
	var player = global.get('player');
	ctx.fillText('x: ' + player.getX() + ' y: ' + player.getY(), canvas.width - 100, canvas.height - 40);

	// player speed
	ctx.fillText('Speed y: ' + player.getSpeedY().toPrecision(2), canvas.width - 105, canvas.height - 25);

	// Display FPS in bottom right corner
	ctx.fillText(fps.toPrecision(4) + ' fps', canvas.width - 75, canvas.height - 10);

	ctx.restore();
}

startLoading(); // kicks everything off 

}());
