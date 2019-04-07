// Draw helper classes

(function () {

'use strict';

var draw = {};

// Draw a [thickness] thick point at index [index] (if numPoints is 5, index is [0,4])
// of [numPoints] granularity in a circle with radius [radius] centered at [x,y] with color [color]
// optional [alpha] between 0 and 1 to set the alpha of the canvas (draw half transparent things for example)
// optionally, add a [borderColor] colored border around the circle
// If we would call drawCirclePoint with numPoints ~8 and all indices 0..7, the picture would be
// something like:      6
//					 	.
//                   .     .
//               4  . [x,y] .  0
//                   .     .
//                      .
//                      2
// This function is thought for the loading indicator, so you draw it with incrementing index
// and it is like a point going in a circle
// And of course if you have numPoints high enough, it's just like an animated drawing
// of a circle
// Writing this function should be a fun exercise in geometry, time for some cosines and sines
function drawCirclePoint(ctx, x, y, numPoints, index, thickness, radius, color, alpha, borderColor) {
	var angleDelta = 2 * Math.PI / numPoints; // 2*pi = whole circle in radians
	var angle = angleDelta * index;
	var circleX = Math.floor(x + Math.cos(angle) * radius);
	var circleY = Math.floor(y + Math.sin(angle) * radius);

	ctx.save();
	
	if (alpha) {
		ctx.globalAlpha = alpha;
	}
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(circleX, circleY, thickness / 2, 0, 2*Math.PI);
	ctx.fill();

	if (borderColor) {
		ctx.strokeStyle = borderColor;
		ctx.beginPath();
		ctx.arc(circleX, circleY, thickness / 2, 0, 2*Math.PI);
		ctx.stroke();
	}

	ctx.restore();
}

function drawCirclePointWithShadow(ctx, x, y, numPoints, index, thickness, radius, color, borderColor) {
	var n = numPoints;
	var idx = index;
	var thick = thickness;
	var r = radius;
	var c = color;
	var bC = borderColor;
	// draw main point
	drawCirclePoint(ctx, x, y, n, idx, thick, r, c, 1.00, bC);
	// draw shadow behind it (opacity .67)
	idx = idx - 1 < 0 ? n - 1 : idx - 1;
	drawCirclePoint(ctx, x, y, n, idx, thick, r, c, 0.67, bC);
	// draw shadow of shadow (opacity .33)
	idx = idx - 1 < 0 ? n - 1 : idx - 1;
	drawCirclePoint(ctx, x, y, n, idx, thick, r, c, 0.33, bC);
}

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

// Writes text to canvas positioned at x,y, no more than width wide. 
// spacing === line spacing
function writeText(ctx, text, x, y, font, fontSize, color, width, spacing) {
	var charW = Math.floor(fontSize / 2); // ~width of 1 character
	var maxNumChars = Math.floor(width / charW); // maximum number of characters per line
	var words = text.split(' ');

	var lines = [];
	var line = '';
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		if (word === '\n\n') {
			if (line) {
				lines.push(line);
				line = '';
			}
			lines.push(''); // the whole new line
			continue;
		} else if (word === '\n') {
			if (line) {
				lines.push(line);
				line = '';
			}
			continue;
		}
		// lookahead one word, and if line is more than maxNumChars, we have our line
		var nextLine = line + word + ' ';
		if (nextLine.length <= maxNumChars) {
			line = nextLine;
		} else {
			lines.push(line);
			line = word + ' ';
		}
	}
	// last line, less than maxNumChars
	if (line) {
		lines.push(line);
	}

	// actually draw our lines now
	var ourY = y;
	for (var i = 0; i < lines.length; i++) {
		fillText(ctx, lines[i], x, ourY, font, fontSize, color);
		ourY += fontSize * spacing;
	}
}

draw['drawCirclePoint'] = drawCirclePoint;
draw['drawCirclePointWithShadow'] = drawCirclePointWithShadow;
draw['bezierCurve'] = bezierCurve;
draw['fillRect'] = fillRect;
draw['drawBox'] = drawBox;
draw['fillText'] = fillText;
draw['fillTextWithShadow'] = fillTextWithShadow;
draw['writeText'] = writeText;

global.set('draw', draw); // export

}());