// Draw helper classes

var draw = {};

(function () {

'use strict';

function drawRect(ctx, x, y, w, h, color) {
	ctx.save();

	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);

	ctx.restore();
}

draw['drawRect'] = drawRect;

}());