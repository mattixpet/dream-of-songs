// My javascript game Dream Of Songs
// Matthias Petursson - oldschool01123@gmail.com

"use strict";

var g_canvas = document.getElementById("dreamOfSongs");
var g_context = g_canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

function begin() {

}

function update(delta) {

}

function draw() {
	g_context.clearRect(0, 0, g_canvas.width, g_canvas.height);

	// for each entity in entity manager, draw
}

function end(fps, panic) {

	// Display FPS in bottom right corner
	g_context.fillText(fps.toPrecision(4) + ' fps', g_canvas.width - 55, g_canvas.height - 10);
	
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

