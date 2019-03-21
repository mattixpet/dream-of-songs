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
var EntityManager = global.get('class/EntityManager');
var Background = global.get('class/Background');
var CollisionManager = global.get('class/CollisionManager');

global.set('canvas', document.getElementById('dreamOfSongs'));
var canvas = global.get('canvas');
global.set('ctx', canvas.getContext('2d')); // context
var ctx = global.get('ctx');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

function start() {
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
		util.log('Player information: ' +
			out
		);
	}
}

function update(dt) {
	var entityManager = global.get('entityManager');
	for (var key in entityManager.entities) {
		entityManager.entities[key].update(dt);
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	var background = global.get('background');
	background.draw();

	var entityManager = global.get('entityManager');
	for (var key in entityManager.entities) {
		entityManager.entities[key].draw();
	}
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

	if (global.get('inSingleCycle')) {
		MainLoop.stop();
		global.set('inSingleCycle', false);
	}
}

function initGame() {
	var entityManager = new EntityManager();
	global.set('entityManager', entityManager);

	var background = new Background();
	global.set('background', background);

	var collisionManager = new CollisionManager();
	global.set('collisionManager', collisionManager);

	var player = new Player(300, 110);
	if (config.globalPlayer) {
		global.set('player', player); // DEV ONLY
	}
	entityManager.register(player);

	var loadingBar = global.get('loadingBar');
	if (loadingBar.getProgress() !== 1) {
		util.warn('Loading not finished when it should be, setting as finished to continue game.');
		loadingBar.updateProgress(1); // end loading
	}

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

start(); // kicks everything off 

}());
