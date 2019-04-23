// PauseMenu

(function () {

'use strict';

// imports
var ScrollableMenu = global.get('class/ScrollableMenu');

function PauseMenu () {
	this.name = 'pauseMenu';

	var data = global.get('menu-text-data')[this.name];
	// call ScrollableMenu constructor (it uses the .name property, so we must set it before calling)
	ScrollableMenu.call(this, data.upArrowPos, data.downArrowPos);

	this.buttonActions['resume'] = this._handleResume;
	this.buttonActions['settings'] = this._handleSettings;
	this.buttonActions['about'] = this._handleAbout;
}

PauseMenu.prototype = Object.create(ScrollableMenu.prototype);

PauseMenu.prototype._handleResume = function () {
	this.hide();
	MainLoop.start();
};

PauseMenu.prototype._handleSettings = function () {
	global.get('settingsMenu').display();
};

PauseMenu.prototype._handleAbout = function () {
	global.get('aboutMenu').display();
};

// The scrollable functions
PauseMenu.prototype._handleUp = function () {
	global.get('audioGui').notifyUp();
};

PauseMenu.prototype._handleDown = function () {
	global.get('audioGui').notifyDown();
};

PauseMenu.prototype.onEnter = function () {
	this._handleResume();
};

// we overwrite this from Menu base class because we need to draw the audio gui as well
// whenever we draw ourselves
PauseMenu.prototype.display = function () {
	global.get('audioGui').notifyPause(); // so audio gui can prep for display
	ScrollableMenu.prototype.display.call(this);
	global.get('audioManager').drawGui();
	// let audio manager know we are in pause so he can update the drawing songs
	global.get('audioManager').setIntervalForSongInMenu();
};

PauseMenu.prototype.hide = function () {
	ScrollableMenu.prototype.hide.call(this);
	// let audio manager know to stop the periodic updates of drawing the songs
	global.get('audioManager').stopIntervalForSongInMenu();
};

global.set('class/PauseMenu', PauseMenu);

}());