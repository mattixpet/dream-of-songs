// My javascript game Dream Of Songs
// Matthias Petursson - oldschool01123@gmail.com

(function () {

'use strict';

global.set('canvas', document.getElementById('dreamOfSongs'));
var canvas = global.get('canvas');
global.set('context', canvas.getContext('2d'));
var context = global.get('context');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

function begin() {

}

function update(delta) {
	// for each entity in entity manager, update position and other stuff
}

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	// for each entity in entity manager, draw
}

function end(fps, panic) {

	// Display FPS in bottom right corner
	context.fillText(fps.toPrecision(4) + ' fps', canvas.width - 55, canvas.height - 10);
	
	if (panic) {
        // This pattern introduces non-deterministic behavior, but in this case
        // it's better than the alternative (the application would look like it
        // was running very quickly until the simulation caught up to real
        // time). See the documentation for `MainLoop.setEnd()` for additional
        // explanation.
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}

MainLoop.setBegin(begin).setUpdate(update).setDraw(draw).setEnd(end).start();

}());