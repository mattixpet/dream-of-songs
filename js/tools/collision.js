// Collision helper functions

(function () {

'use strict';

var collision = {};

// is rectA colliding with rectB?
// aX, aY are top left coordinates of rect A
// with width aW and height aH
function rectCollision(aX, aY, aW, aH, bX, bY, bW, bH) {
	// rect A collides with rect B if any of the corner
	// points of A is within B
	// OR lets not forget (lol) if B is within A !

	return _oneOfPointsWithinRect(aX, aY, aW, aH, bX, bY, bW, bH) ||
				_oneOfPointsWithinRect(bX, bY, bW, bH, aX, aY, aW, aH);
}

// rectX, rectY are top left coords of rectangle and rectW, H are widths and height respectively
function pixelWithinRect(x, y, rectX, rectY, rectW, rectH) {
	if (y >= rectY && y <= rectY + rectH) {
		// we have vertical collision
		if (x >= rectX && x <= rectX + rectW) {
			// we have horizontal collision as well
			// and therefore a total collision
			return true;
		}
	}
	return false;
}

// given two rectangles, calculate if one of the first ones corner points
// are bounded by the second rect
// aX, aY are top left coordinates of rect A
// with width aW and height aH
function _oneOfPointsWithinRect(aX, aY, aW, aH, bX, bY, bW, bH) {
	// calculate corner points
	var aTopLeft  = {'x':aX,     'y':aY};
	var aTopRight = {'x':aX + aW,'y':aY};
	var aBotLeft  = {'x':aX,     'y':aY + aH};
	var aBotRight = {'x':aX + aW,'y':aY + aH};

	var aPoints = [aTopLeft, aTopRight, aBotLeft, aBotRight];

	// go through aPoints from end to start because
	// presumed most common collision is player
	// with front to something, and just why not
	for (var i = aPoints.length - 1; i >= 0; i--) {
		var aX = aPoints[i].x;
		var aY = aPoints[i].y;
		if (aY >= bY && aY <= bY + bH) {
			// we have vertical collision
			if (aX >= bX && aX <= bX + bW) {
				// we have horizontal collision as well
				// and therefore a total collision
				return true;
			}
		}
	}

	return false;
}

collision['rectCollision'] = rectCollision;
collision['pixelWithinRect'] = pixelWithinRect;

global.set('collision', collision);

}());
