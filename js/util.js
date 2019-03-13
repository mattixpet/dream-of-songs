// Utility library

(function () {

'use strict';

var util = {};

function containsDuplicates(arr) {
	return (new Set(arr)).size !== arr.length;
}

// randInt(0,10) gives random integer 0-9
function randInt(low, high) {
	return low + Math.floor(Math.random * high);
}

// x,y pixel coordinate to most approximate grid number
// in a gridW x gridH long grid (e.g. collision array)
// returns [gridX,gridY]
function pixelToGrid(pixelX, pixelY, gridW, gridH) {
	var canvas = global.get('canvas');
	return [
		Math.floor(pixelX / canvas.width * gridW),
		Math.floor(pixelY / canvas.height * gridH)
	];
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
util['randInt'] = randInt;
util['pixelToGrid'] = pixelToGrid;
util['gridToPixel'] = gridToPixel;
util['log'] = log;
util['warn'] = warn;

global.set('util', util);

}());
