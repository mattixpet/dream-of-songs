// Utility library

(function () {

'use strict';

var util = {};

function isInteger(a) {
	return a % 1 === 0;
}

function arrayEquals(a, b) {
	if (a === b) {
		return true;
	}
	if (a.length !== b.length) {
		return false;
	}
	for (var i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
}

// Return true if a in [b-delta,b+delta]
function almostEqual(a, b, delta) {
	return a === b || (a <= b+delta && a >= b-delta);
}

// yah..
function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function shallowCopy(obj) {
	var newObj = {};
	for (var key in obj) {
		newObj[key] = obj[key];
	}
	return newObj;
}

function containsDuplicates(arr) {
	return (new Set(arr)).size !== arr.length;
}

// Accesses array in a circular manner
// e.g. i == -1 would return idx = arrLength - 1
//      i == arrLength would return idx = 0
function circularIdx(i, arrLength) {
	return (arrLength + (i % arrLength)) % arrLength;
}

// returns 66 for input '1:06'
// Does no checking
function stringDurationToSecs(duration) {
	var vals = duration.split(':');
	return parseInt(vals[0]) * 60 + parseInt(vals[1]);
}

// Returns a random int in interval [min, max-1]
function randInt(min, max) {
	return min + Math.floor(Math.random() * (max - min));
}

// x,y pixel coordinate to most approximate grid number
// in a gridW x gridH long grid (e.g. collision array)
// returns {gridX:gridX,gridY:gridY}
// if gridX, gridY is out of bounds of [0,..,gridW-1 or gridH-1] then it sets to boundaries
function pixelToGrid(pixelX, pixelY, gridW, gridH) {
	var canvas = global.get('canvas');
	var gridX = Math.floor(pixelX / canvas.width * gridW);
	var gridY = Math.floor(pixelY / canvas.height * gridH);

	// clip to boundaries
	if (gridX < 0) {
		gridX = 0;
	} else if (gridX >= gridW) {
		gridX = gridW - 1;
	}
	if (gridY < 0) {
		gridY = 0;
	} else if (gridY >= gridH) {
		gridY = gridH - 1;
	}
	return {'gridX':gridX,'gridY':gridY};
}

// opposite of pixelToGrid, gives the top left pixel coordinate
// of the supplied grid block
// returns {'x':x,'y':y}
function gridToPixel(gridX, gridY, gridW, gridH) {
	var canvas = global.get('canvas');
	return {
		'x':Math.floor(gridX / gridW * canvas.width),
		'y':Math.floor(gridY / gridH * canvas.height)
	};
}

// for input toggles, set immediately as false in global.keys array
// to trigger action only once
function eatKey(keyCode) {
	var keys = global.get('keys');
	if (keys[keyCode]) {
		keys[keyCode] = false;
		return true;
	}
	return false;
}

function objLen(obj) {
	return Object.keys(obj).length;
}

function log(arg) {
	console.log(arg + ' ' + _getDateMilliseconds());
}

function warn(arg) {
	console.warn(arg + ' ' + _getDateMilliseconds());
}

function _getDateMilliseconds() {
	var date = new Date();
	return date.getFullYear() + '-' +
		date.getMonth() + '-' +
		date.getDate() + ' ' +
		date.getHours() + ':' +
		date.getMinutes() + ':' +
		date.getSeconds() + '.' +
		date.getMilliseconds();
}

util['isInteger'] = isInteger;
util['arrayEquals'] = arrayEquals;
util['almostEqual'] = almostEqual;
util['deepCopy'] = deepCopy;
util['shallowCopy'] = shallowCopy;
util['containsDuplicates'] = containsDuplicates;
util['circularIdx'] = circularIdx;
util['stringDurationToSecs'] = stringDurationToSecs;
util['randInt'] = randInt;
util['pixelToGrid'] = pixelToGrid;
util['gridToPixel'] = gridToPixel;
util['eatKey'] = eatKey;
util['objLen'] = objLen;
util['log'] = log;
util['warn'] = warn;

global.set('util', util);

}());
