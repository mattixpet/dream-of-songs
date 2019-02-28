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

Global.prototype.set = function (name, value) {
	this.refs[name] = value;
};

Global.prototype.get = function (name) {
	if (this.refs[name] === undefined) {
		util.warn('Nothing found with name: ' + name + ' in global');
	}
	return this.refs[name];
};

global = new Global();

}());
