// Draw helper classes

(function () {

'use strict';

var draw = {};

// Draws the outline of a star with color [color] at [x,y] (almost center of star, the 'crotch' of it)
// [size] is only approximate, not a specific width or height
// thought to be approximate diameter
function drawStar(x, y, size, lineWidth, color) {
	var ctx = global.get('ctx');
	
	var floor = Math.floor;

	ctx.save();

	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x-floor(0.5*size), y+floor(0.4*size));
	ctx.lineTo(x-floor(0.3*size), y-floor(0.2*size));
	ctx.lineTo(x-floor(0.7*size), y-floor(0.6*size));
	ctx.lineTo(x-floor(0.2*size), y-floor(0.5*size));
	ctx.lineTo(x,                 y-floor(1.1*size));
	ctx.lineTo(x+floor(0.2*size), y-floor(0.5*size));
	ctx.lineTo(x+floor(0.7*size), y-floor(0.6*size));
	ctx.lineTo(x+floor(0.3*size), y-floor(0.2*size));
	ctx.lineTo(x+floor(0.5*size), y+floor(0.4*size));
	ctx.lineTo(x,y);
	ctx.stroke();

	ctx.restore();
}

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
function drawCirclePoint(x, y, numPoints, index, thickness, radius, color, alpha, borderColor) {
	var ctx = global.get('ctx');
	
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

function drawCirclePointWithShadow(x, y, numPoints, index, thickness, radius, color, borderColor) {
	var n = numPoints;
	var idx = index;
	var thick = thickness;
	var r = radius;
	var c = color;
	var bC = borderColor;
	// draw main point
	drawCirclePoint(x, y, n, idx, thick, r, c, 1.00, bC);
	// draw shadow behind it (opacity .67)
	idx = idx - 1 < 0 ? n - 1 : idx - 1;
	drawCirclePoint(x, y, n, idx, thick, r, c, 0.67, bC);
	// draw shadow of shadow (opacity .33)
	idx = idx - 1 < 0 ? n - 1 : idx - 1;
	drawCirclePoint(x, y, n, idx, thick, r, c, 0.33, bC);
}

// Draw a bezier curve starting at sx, sy, control points cp1, cp2 and
// end point ex, ey with color color
function bezierCurve(sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey, color) {
	var ctx = global.get('ctx');
	
	ctx.save();

	ctx.lineWidth = '2.0';
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(sx, sy);
	ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ex, ey);
	ctx.stroke();

	ctx.restore();
}

function fillRect(x, y, w, h, color) {
	var ctx = global.get('ctx');
	
	ctx.save();

	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);

	ctx.restore();
}

// draw outline of rect
function drawBox(x, y, w, h, color) {
	var ctx = global.get('ctx');
	
	ctx.save();

	ctx.strokeStyle = color;
	ctx.strokeRect(x, y, w, h);

	ctx.restore();
}

function fillText(text, x, y, font, fontSize, color, opacity) {
	var ctx = global.get('ctx');
	
	ctx.save();

	if (opacity) {
		ctx.globalAlpha = opacity;
	}
	ctx.font = 'normal ' + fontSize + 'px ' + font;
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);

	ctx.restore();
}

function fillTextWithShadow(text, x, y, font, fontSize, color, opacity, shadowColor, shadowDistance) {
	fillText(text, x + shadowDistance, y - shadowDistance, font, fontSize, shadowColor, opacity);
	fillText(text, x, y, font, fontSize, color, opacity);
}

// Writes text to canvas positioned at x,y, no more than width wide. 
// spacing === line spacing
// if opacity is supplied, draw with that opacity
// if shadowColor is supplied, draw additionally a shadow with shadowColor and shadowDistance from original text
function writeText(text, x, y, font, fontSize, color, width, spacing, opacity, shadowColor, shadowDistance) {
	/* 	jshint shadow: true */
	/*  ^ allow for (var i =) and another (for var i =) */

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
		} else if (word === '\t') {
			word = '  ';
		} else if (word === '\t\t') {
			word = '    ';
		} else if (word === '\s') {
			word = ' ';
		}
		// lookahead one word, and if line is more than maxNumChars, we have our line
		var nextLine = line + word + ' ';
		if (nextLine.length <= maxNumChars) {
			line = nextLine;
		} else {
			if (line) {
				lines.push(line);
				line = word + ' ';
			} else {
				// unless line is only one really long word (taking up more space than the width)
				// in which just push that word directly as one line
				lines.push(word);
			}
		}
	}
	// last line, less than maxNumChars
	if (line) {
		lines.push(line);
	}

	// actually draw our lines now
	var ourY = y;
	for (var i = 0; i < lines.length; i++) {
		if (shadowColor) {
			fillTextWithShadow(lines[i], x, ourY, font, fontSize, color, opacity, shadowColor, shadowDistance);
		} else {
			fillText(lines[i], x, ourY, font, fontSize, color, opacity);
		}
		ourY += fontSize * spacing;
	}
}

draw['drawStar'] = drawStar;
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