// Typebox is a helper class for SettingsMenu
// Represents a typebox where user can type something in and hit Return to send the text

(function () {

'use strict';

var draw = global.get('draw');
var collision = global.get('collision');
var consts = global.get('consts');

// [[label]] is the text to be displayed with the typebox
// [[callback]] is a function to call when user types something and hits Return with the word as an argument
// [[parentMenu]] is the object of the calling menu, e.g. new SettingsMenu() or new NameMenu()
function Typebox(label, callback, parentMenu) {
	this.label = label;
	this.callback = callback;

	this.parentMenu = parentMenu;

	this.typeboxSprite = global.get('imageHandler').getSprite('typebox');

	this.width = global.get('menu-text-data')['settingsMenu'].checkboxWidth;
	this.height = global.get('menu-text-data')['settingsMenu'].checkboxHeight;

	this.x = undefined;
	this.y = undefined;

	this.typeboxX = undefined;
	this.typeboxY = undefined;

	this.text = ''; // what has the user typed?
}

// Check if our box is being clicked, and then allow typing.
Typebox.prototype.click = function (x, y) {
	if (collision.pixelWithinRect(
		x, y, 
		this.typeboxX, this.typeboxY, 
		this.typeboxSprite.getWidth(), this.typeboxSprite.getHeight()
	)) {
		if (global.get('mobile')) {
			this.text = prompt() || '';
			this.handleTypedCharacter({'keyCode':consts.KEY_ENTER}); // bogus event to trigger word check in settings menu
			return;
		}
		this._enteringCode();
	} else {
		this.stopEnteringCode();
	}
};

// This function is called when user clicks our entry field
// means we grab the input and analyse what user writes
Typebox.prototype._enteringCode = function () {
	global.set('activeTypebox', this);
};

// Called if user clicks out of the Enter code text field
// or if a successful code was entered
Typebox.prototype.stopEnteringCode = function () {
	this.text = '';
	global.set('activeTypebox', false);
};

// This is the function called by input.js when in typingMode
Typebox.prototype.handleTypedCharacter = function (keyEvent) {
	if (keyEvent.keyCode === consts.KEY_ENTER) {
		var oldText = this.text;
		this.text = ''; // need to reset this before the draw call to clear the typebox
		this.callback.call(this.parentMenu, oldText); // make sure to call function with correct 'this'
		return;
	}

	if (keyEvent.keyCode === consts.KEY_BACKSPACE) {
		this.text = this.text.slice(0,this.text.length-1);
		this.parentMenu.draw();
	}

	// only add normal characters, like a-z, 0-9 etc. Not 'CapsLock' or 'Shift'
	if (keyEvent.key.length === 1) {
		this.text += keyEvent.key;
		this.draw(this.x, this.y); // display text in text box
	}
};

Typebox.prototype.draw = function (x, y) {
	this.x = x;
	this.y = y;

	var data = global.get('menu-text-data')['settingsMenu'];
	this._drawText(this.label, x + data.checkboxMargin, y + this.height - data.labelMargin);
	this.typeboxX = x + this.width - this.typeboxSprite.getWidth() - data.checkboxMargin;
	this.typeboxY = y + data.checkboxMargin;
	this.typeboxSprite.draw(this.typeboxX, this.typeboxY);
	this._drawText(
		this.text,
		this.typeboxX + data.typeboxPadding,
		this.typeboxY + this.typeboxSprite.getHeight() - data.typeboxPadding
	);
};

// Draw the current text user has typed into us
Typebox.prototype._drawText = function (text, x, y) {
	var common = global.get('menu-text-data')['Common'];
	draw.fillText(
		text,
		x,
		y,
		common.font,
		common.fontSize,
		common.fontColor
	);
};

Typebox.prototype.getHeight = function () {
	return this.height;
};

Typebox.prototype.resetResolution = function (ratio) {
	this.width = Math.round(this.width * ratio);
	this.height = Math.round(this.height * ratio);
};

global.set('class/Typebox', Typebox);

}());
