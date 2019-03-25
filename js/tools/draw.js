// Draw helper classes

(function () {

'use strict';

var draw = {};

function fillRect(ctx, x, y, w, h, color) {
	ctx.save();

	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);

	ctx.restore();
}

// draw outline of rect
function drawBox(ctx, x, y, w, h, color) {
	ctx.save();

	ctx.strokeStyle = color;
	ctx.strokeRect(x, y, w, h);

	ctx.restore();
}

draw['fillRect'] = fillRect;
draw['drawBox'] = drawBox;

global.set('draw', draw); // export

}());