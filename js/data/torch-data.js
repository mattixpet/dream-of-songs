// Data for torches. Number of animations, bezier curves to draw and spawn points in game

(function () {

'use strict';

var util = global.get('util');

// very rough width and height of torch flame, kind of like guidelines
const w = 14;
const h = 33;

// based on ANIMATION0, add others, interpolating from that one
// should be an even number, to account for flame bouncing left and right
var numExtraAnimations = 6;
 // flicker at most MAXFLICKERDISTANCE pixels from the top of fire's x position (ex in primary of animation0)
var MAXFLICKERDISTANCE = 8;

var torch_data = {
	'animations' : ['ANIMATION0'], // more animations are added later, at end of file

	// Format of bezier curve object (one array of these for each animation)
	// {
	//		sx : relative pixels to go given left x for starting x of curve
	//      sy : -   ''   -                  top y for starting y of curve
	//      cp1x : control point 1 (relative all relative to top left coord of torch)
	//      cp1y : control point 1
	//      cp2x : ..
	//      cp2y : ..
	//      ex : end point
	//      ey : ..
	//      color : 'primary', 'secondary' or 'tertiary' (Torch will set this as an actual color value e.g. primary will become red)	
	// }
	'bezierCurves' : {
		'ANIMATION0' : [
			// "red" outline
			{sx: 0,   sy: h,   cp1x: -6,  cp1y: 10, cp2x: 5,   cp2y: 20, ex: 5, ey: 0,  color: 'primary'},
			// this one is almost a vertical mirror of the one above
			{sx: w,   sy: h,   cp1x: w+6, cp1y: 15, cp2x: w-2, cp2y: 25, ex: 5, ey: 0,  color: 'primary'},
			// "orange" middle one
			{sx: 3,   sy: h-2, cp1x: -4,  cp1y: 10, cp2x: 7,   cp2y: 22, ex: 6, ey: 9,  color: 'secondary'},
			{sx: w-3, sy: h-2, cp1x: w+2, cp1y: 16, cp2x: w-3, cp2y: 27, ex: 6, ey: 9,  color: 'secondary'},
			// "yellow" center
			{sx: 6,   sy: h-2, cp1x: -2,  cp1y: 20, cp2x: 9,   cp2y: 25, ex: 5, ey: 18, color: 'tertiary'},
			{sx: w-6, sy: h-2, cp1x: w-2, cp1y: 23, cp2x: w-6, cp2y: 29, ex: 5, ey: 18, color: 'tertiary'}
		]
		// more animations are set here at the end of file as relative to ANIMATION0
	},

	'spawns' : {
		// format
		// {
		//		'sceneName' : [[x0,y0], [x1,y1], ..],
		//      'anotherScene' : ..
		//	} 
		// where xi, yi are top left coordinates of the torch to be spawned
		'cave1' : [
			[680,184]
		],
		'cavestairs' : [
			[633,252], [736, 310]
		],
		'brokenstairs' : [
			[392,160], [633,262]
		]
	}
};

// add our bezier curves as explained above (kinda)
// interpolate changing only x coord of the base curves (ANIMATION0) to the left and right
// maximum MAXFLICKERDISTANCE in either direction, e.g. if MAXFLICKERDISTANCE = 8
// and numExtraAnimations = 4, then we flicker 4 pixels to right, 8 pixels to right, 4 pixels to left and 
// 8 pixels left from base flame top position
// in our example, intervalSize will become 4 (because 4 pixels each flicker distance)
var flickerEachDirection = Math.floor(numExtraAnimations / 2);
var intervalSize = Math.floor(MAXFLICKERDISTANCE / flickerEachDirection);
// this is to put end point of primary (red) bezier curve a little further
// in our example this would be 3 pixels extra shift
var extraPrimaryShift = Math.round(MAXFLICKERDISTANCE / 3);

// do what I described above, returns array of bezier curves based on base curve (animation0)
// and shifting it shift (negative for left) in x direction for top of flame
function addAnimation(shift) {
	// a will be our curve, copy the base curve
	var a = util.deepCopy(torch_data.bezierCurves.ANIMATION0);
	for (var i = 0; i < a.length; i++) {
		var c = a[i]; // curve
		c.cp1x += shift;
		c.cp2x += shift;
		if (c.color === 'primary') {
			c.ex += shift < 0 ? shift - extraPrimaryShift : shift + extraPrimaryShift;
		} else {
			c.ex += shift;
		}
	}
	return a;
}

// if numExtraAnimations = 4, we add here ANIMATION1..4 to torch_data.bezierCurves
for (var i = -flickerEachDirection; i <= flickerEachDirection; i++) {
	if (i !== 0) {
		var numAnimation = i < 0 ? i + flickerEachDirection + 1 : i + flickerEachDirection;
		torch_data.bezierCurves['ANIMATION' + numAnimation] = addAnimation(i * intervalSize);
		torch_data.animations.push('ANIMATION' + numAnimation);
	}
}

global.set('torch-data', torch_data);

}());