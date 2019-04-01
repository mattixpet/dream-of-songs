// PauseMenu

(function () {

'use strict';

// imports
var Menu = global.get('class/Menu');

function PauseMenu () {
	this.name = 'pauseMenu';

	// call Menu constructor (it uses the .name property, so we must set it before calling)
	Menu.call(this);

	this.buttonActions['resume'] = this._handleResume;
	this.buttonActions['up'] = this._handleUp;
	this.buttonActions['down'] = this._handleDown;
}

PauseMenu.prototype = Object.create(Menu.prototype);

PauseMenu.prototype._handleResume = function () {
	this.hide();
	MainLoop.start();
};

PauseMenu.prototype._handleUp = function () {
	this.hide();
	MainLoop.start();
};

PauseMenu.prototype._handleDown = function () {
	this.hide();
	MainLoop.start();
};

global.set('class/PauseMenu', PauseMenu);

}());