// Big global object to encompass global functions and variables
// which are not from other modules, e.g. Consts (constants) and classes (e.g. Entity)

function Global() {

}

Global.prototype.set = function (name, value) {
	Global[name] = value;
};

Global.prototype.get = function (name) {
	return Global[name];
};

var global = new Global();