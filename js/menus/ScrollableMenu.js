// ScrollableMenu, base class for menus which have up/down arrow (scroll), e.g. PauseMenu and AboutMenu
// Inherits from Menu
// All menus must set a name before calling constructor for the Menu constructor

(function () {

'use strict';

// imports
var util = global.get('util');
var collision = global.get('collision');
var Menu = global.get('class/Menu');

function ScrollableMenu(upArrowCoords, downArrowCoords) {
	Menu.call(this);

	this.upArrowCoords = upArrowCoords;
	this.downArrowCoords = downArrowCoords;

	// add our up/down buttons to our menu
	var iconWidth = global.get('audio-gui-data')['Spacings'].iconWidth;
	this.buttons['up'] = {'x':upArrowCoords.x, 'y':upArrowCoords.y, 'width':iconWidth, 'height':iconWidth};
	this.buttons['down'] = {'x':downArrowCoords.x, 'y':downArrowCoords.y, 'width':iconWidth, 'height':iconWidth};
	this.buttonActions['up'] = this._handleUp;
	this.buttonActions['down'] = this._handleDown;

	this.upArrowSprite = global.get('imageHandler').getSprite('uparrow');
	this.downArrowSprite = global.get('imageHandler').getSprite('downarrow');
}

ScrollableMenu.prototype = Object.create(Menu.prototype);

// These handleUp/Down functions must be overwritten by the children class!
ScrollableMenu.prototype._handleUp = function () {
	util.warn('Why would you have a scroll menu but no up scroll functionality? in ' + this.name);
};

ScrollableMenu.prototype._handleDown = function () {
	util.warn('Why would you have a scroll menu but no down scroll functionality? in ' + this.name);
};

ScrollableMenu.prototype.draw = function () {
	Menu.prototype.draw.call(this);

	// draw the up/down arrows to scroll, up arrow in top right corner, down arrow in top left corner
	this.upArrowSprite.draw(this.upArrowCoords.x, this.upArrowCoords.y);
	this.downArrowSprite.draw(this.downArrowCoords.x, this.downArrowCoords.y);
};

global.set('class/ScrollableMenu', ScrollableMenu);

}());
