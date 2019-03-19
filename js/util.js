// Utility library

(function () {

'use strict';

var util = {};

function containsDuplicates(arr) {
	return (new Set(arr)).size !== arr.length;
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
util['pixelToGrid'] = pixelToGrid;
util['gridToPixel'] = gridToPixel;
util['eatKey'] = eatKey;
util['log'] = log;
util['warn'] = warn;

global.set('util', util);

}());
