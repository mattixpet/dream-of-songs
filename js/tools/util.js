// Utility library

(function () {

'use strict';

var util = {};

function containsDuplicates(arr) {
	return (new Set(arr)).size !== arr.length;
}

// Accesses array in a circular manner
// e.g. i == -1 would return idx = arrLength - 1
//      i == arrLength would return idx = 0
function circularIdx(i, arrLength) {
	return (arrLength + (i % arrLength)) % arrLength;
}

// Returns a random int in interval [min, max-1]
function randInt(min, max) {
	return min + Math.floor(Math.random() * (max - min));
}

// x,y pixel coordinate to most approximate grid number
// in a gridW x gridH long grid (e.g. collision array)
// returns [gridX,gridY]
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
	return [gridX, gridY];
}

// opposite of pixelToGrid, gives the top left pixel coordinate
// of the supplied grid block
// returns [x,y]
function gridToPixel(gridX, gridY, gridW, gridH) {
	var canvas = global.get('canvas');
	return [
		Math.floor(gridX / gridW * canvas.width),
		Math.floor(gridY / gridH * canvas.height)
	];
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

util['containsDuplicates'] = containsDuplicates;
util['circularIdx'] = circularIdx;
util['randInt'] = randInt;
util['pixelToGrid'] = pixelToGrid;
util['gridToPixel'] = gridToPixel;
util['eatKey'] = eatKey;
util['objLen'] = objLen;
util['log'] = log;
util['warn'] = warn;

global.set('util', util);

}());
