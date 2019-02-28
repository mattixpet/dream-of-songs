// Draw helper classes

(function () {

'use strict';

var draw = {};

function drawRect(ctx, x, y, w, h, color) {
	ctx.save();

	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);

	ctx.restore();
}

draw['drawRect'] = drawRect;

global.set('draw', draw); // export

}());