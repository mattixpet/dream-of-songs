// Draw helper classes

(function () {

'use strict';

var draw = {};

// Draw a bezier curve starting at sx, sy, control points cp1, cp2 and
// end point ex, ey with color color
function bezierCurve(ctx, sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey, color) {
	ctx.save();

	ctx.lineWidth = '2.0';
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(sx, sy);
	ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ex, ey);
	ctx.stroke();

	ctx.restore();
}

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

function fillTextWithShadow(ctx, text, x, y, font, fontSize, color, shadowColor, shadowDistance) {
	fillText(ctx, text, x + shadowDistance, y - shadowDistance, font, fontSize, shadowColor);
	fillText(ctx, text, x, y, font, fontSize, color);
}

draw['bezierCurve'] = bezierCurve;
draw['fillRect'] = fillRect;
draw['drawBox'] = drawBox;
draw['fillText'] = fillText;
draw['fillTextWithShadow'] = fillTextWithShadow;

global.set('draw', draw); // export

}());