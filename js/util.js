// Utility library

util = {};

(function () {

function containsDuplicates(arr) {
	return (new Set(arr)).size !== arr.length;
}

// randInt(0,10) gives random integer 0-9
function randInt(low, high) {
	return low + Math.floor(Math.random * high);
}

util['containsDuplicates'] = containsDuplicates;

}());