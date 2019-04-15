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
	this.buttonActions['settings'] = this._handleSettings;
	this.buttonActions['about'] = this._handleAbout;
}

PauseMenu.prototype = Object.create(Menu.prototype);

PauseMenu.prototype._handleResume = function () {
	this.hide();
	MainLoop.start();
};

PauseMenu.prototype._handleSettings = function () {
	// we don't do anything at the moment for settings
};

PauseMenu.prototype._handleAbout = function () {
	global.get('aboutMenu').display();
};

PauseMenu.prototype.onEnter = function () {
	this._handleResume();
};

// we overwrite this from Menu base class because we need to draw the audio gui as well
// whenever we draw ourselves
PauseMenu.prototype.display = function () {
	global.get('audioGui').notifyPause(); // so audio gui can prep for display
	Menu.prototype.display.call(this);
	global.get('audioManager').drawGui();
	// let audio manager know we are in pause so he can update the drawing songs
	global.get('audioManager').setIntervalForSongInMenu();
};

PauseMenu.prototype.hide = function () {
	Menu.prototype.hide.call(this);
	// let audio manager know to stop the periodic updates of drawing the songs
	global.get('audioManager').stopIntervalForSongInMenu();
};

global.set('class/PauseMenu', PauseMenu);

}());