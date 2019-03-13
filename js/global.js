// Big global object to encompass global functions, classes and variables
// accessed by for example
//   var consts = global.get('consts');
// and to 'export' just set it in global
//   global.set('util', util);

var global;

(function () {

'use strict';

function Global() {
	this.refs = {}; // the all seeing eye
}

Global.prototype.set = function (key, value) {
	this.refs[key] = value;
};

Global.prototype.get = function (key) {
	if (this.refs[key] === undefined) {
		this.get('util').warn('Nothing found with name: ' + key + ' in global\n\nStack trace: ' + new Error().stack);
	}
	return this.refs[key];
};

Global.prototype.delete = function (key) {
	delete this.refs[key];
};

global = new Global();

}());
