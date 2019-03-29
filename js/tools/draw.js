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

function fillText(ctx, text, x, y, font, fontSize, color) {
	ctx.save();

	ctx.font = 'normal ' + fontSize + 'px ' + font;
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);

	ctx.restore();
}

draw['fillRect'] = fillRect;
draw['drawBox'] = drawBox;
draw['fillText'] = fillText;

global.set('draw', draw); // export

}());