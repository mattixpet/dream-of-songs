// StartMenu, first menu after loading and before starting game

(function () {

'use strict';

// imports
var Menu = global.get('class/Menu');

function StartMenu (callback) {
	this.name = 'startMenu';

	// call Menu constructor (it uses the .name property, so we must set it before calling)
	Menu.call(this, callback);

	this.callback = callback;

	this.buttonActions['start'] = this._handleStart;
	this.buttonActions['settings'] = this._handleSettings;
	this.buttonActions['about'] = this._handleAbout;

	this.startedPlayingTheme = false;

	// this should be first menu to be called, lets set a 'inMenu' flag in global
	// will only be populated with our name once this.display() is called though
	global.set('inMenu', false);
}

StartMenu.prototype = Object.create(Menu.prototype);

StartMenu.prototype._handleStart = function () {
	this.callback(); // should have been provided with function to start game on creation, that is callback
	this.hide();
};

StartMenu.prototype._handleSettings = function () {
	global.get('settingsMenu').display();
};

StartMenu.prototype._handleAbout = function () {
	global.get('aboutMenu').display();
};

StartMenu.prototype.onEnter = function () {
	this._handleStart();
};

global.set('class/StartMenu', StartMenu);

}());