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
util['log'] = log;
util['warn'] = warn;

global.set('util', util);

}());
