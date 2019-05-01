// Menu, base class for all menus (example StartMenu, AboutMenu and PauseMenu)
// All menus must set a name before calling Menu constructor for the button initialization

(function () {

'use strict';

// imports
var collision = global.get('collision');

function Menu(callback) {
	// callback is an optional function you want menu to call at some point
	this.callback = callback;

	this.sprite = global.get('imageHandler').getSprite('waterfallofdreams');
	// sprite with png of buttons to go over normal sprite
	this.itemsSprite = global.get('imageHandler').getSprite(this.name);

	this.previousMenu = false; // set in this.display

	// keep our buttons as rectangular coordinates, format
	// buttons: {
	//		'start' : {'x':292, 'y':199, 'width':210, 'height':68},
	//      etc. exactly like in menu-data.js	
	// }
	this.buttons = global.get('menu-data')[this.name];

	// this should be set up with functions to call if buttons are clicked, format e.g.
	// buttonActions: {
	//		'start' : this._handleStart,
	//		'settings' : this._handleSettings,
	//		etc.	
	// }
	this.buttonActions = {};
}

Menu.prototype.draw = function () {
	var canvas = global.get('canvas');
	global.get('ctx').clearRect(0, 0, canvas.width, canvas.height);
	this.sprite.draw(0,0);
	this.itemsSprite.draw(0,0);
};

// get notified from event handling (input.js) whenever user clicks
// with mouse and he is in some menu
Menu.prototype.notifyClick = function (x, y) {
	this._handleClick(x, y);
};

// Every menu has a handler for user pressing enter
// should overwrite this function.
// Usually Enter means going forward, start game, unpause, etc.
Menu.prototype.onEnter = function () {

};

// handle a click from user and process if it is within a button
// returns the button clicked if a button was clicked, otherwise false
Menu.prototype._handleClick = function (x, y) {
	var buttonClicked = this._pixelWithinButton(x, y);
	if (buttonClicked) {
		// call relevant handler for this button and since they are stored as function pointers
		// only, remember to pass the correct 'this' to them :)
		this.buttonActions[buttonClicked].call(this);
		return buttonClicked;
	}
	return false;
};

// returns the button if pixel is within it, otherwise returns false
Menu.prototype._pixelWithinButton = function (x, y) {
	// check all our buttons
	for (var button in this.buttons) {
		var rect = this.buttons[button];
		if (collision.pixelWithinRect(x, y, rect.x, rect.y, rect.width, rect.height)) {
			return button;
		}
	}
	return false;
};

Menu.prototype.display = function () {
	// log the menu before us (false if no) and set us as the current menu
	this.previousMenu = global.get('inMenu');
	global.set('inMenu', this.name);
	this.draw();
};

Menu.prototype.hide = function () {
	global.set('inMenu', false);
};

global.set('class/Menu', Menu);

}());
