// Menu, base class for all menus

(function () {

'use strict';

// imports
var util = global.get('util');

function Menu(sprite, callback) {
	// callback is a function you want menu to call when menu is hidden (removed from display)
	this.callback = callback;
	this.active = false; // flag to know if this menu is active or 'displaying' at the moment	
	this.name = 'menu';
	this.sprite = sprite;
}

Menu.prototype.draw = function () {
	this.sprite.draw(0,0);

	this._drawSpecific(); // code for children classes to use if they use the draw code above
};

Menu.prototype._drawSpecific = function () {
	// this needs to be implemented for children classes
};

Menu.prototype.display = function () {
	util.log('Displaying: ' + this.name);
	this.active = true;
	this.draw();
};

Menu.prototype.hide = function () {
	util.log('Hiding: ' + this.name);
	this.active = false;
	this.callback();
};

global.set('class/Menu', Menu);

}());
