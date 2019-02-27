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

function print(arg) {
	var date = new Date();
	console.log(
		arg + ' ' + 
		date.getFullYear() + '-' +
		date.getMonth() + '-' +
		date.getDate() + ' ' +
		date.getHours() + ':' +
		date.getMinutes() + ':' +
		date.getSeconds() + '.' +
		date.getMilliseconds()
	);
}

util['containsDuplicates'] = containsDuplicates;
util['randInt'] = randInt;
util['print'] = print;

}());