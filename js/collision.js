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
	// OR lets not forget (lol) if B is within A ! (IMPLEMENT PLEASE BITCH)

	return _oneOfPointsWithinRect(aX, aY, aW, aH, bX, bY, bW, bH) ||
				_oneOfPointsWithinRect(bX, bY, bW, bH, aX, aY, aW, aH);
}

// given two rectangles, calculate if one of the first ones corner points
// are bounded by the second rect
// aX, aY are top left coordinates of rect A
// with width aW and height aH
function _oneOfPointsWithinRect(aX, aY, aW, aH, bX, bY, bW, bH) {
	// calculate corner points
	var aTopLeft = [aX, aY];
	var aTopRight = [aX + aW, aY];
	var aBotLeft = [aX, aY + aH];
	var aBotRight = [aX + aW, aY + aH];

	var aPoints = [aTopLeft, aTopRight, aBotLeft, aBotRight];

	// go through aPoints from end to start because
	// presumed most common collision is player
	// with front to something, and just why not
	for (var i = aPoints.length - 1; i >= 0; i--) {
		var aX = aPoints[i][0];
		var aY = aPoints[i][1];
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

global.set('collision', collision);

}());
