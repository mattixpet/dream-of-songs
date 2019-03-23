// StartMenu, first menu after loading and before starting game

(function () {

'use strict';

// imports
var Menu = global.get('class/Menu');

function StartMenu(sprite, callback) {
	// callback is a function you want menu to call when menu is hidden (removed from display)
	this.callback = callback;
	this.active = false; // flag to know if this menu is active or 'displaying' at the moment	
	this.name = 'startMenu';
	this.sprite = sprite;
}

StartMenu.prototype = Object.create(Menu.prototype);

StartMenu.prototype._drawSpecific = function () {
	// this needs to be implemented for children classes
};

global.set('class/StartMenu', StartMenu);

}());