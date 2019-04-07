// NotificationMenu, used for in game notifications
// e.g. first new chest, general new chest, new hidden chest

(function () {

'use strict';

// imports
var Menu = global.get('class/Menu');
var draw = global.get('draw');

function NotificationMenu () {
	this.name = 'notificationMenu';

	// call Menu constructor (it uses the .name property, so we must set it before calling)
	Menu.call(this);

	this.buttonActions['continue'] = this._handleContinue;
	this.buttonActions['toggleoff'] = this._handleToggleOff;

	// we change this if player notifies us what happened (first chest, hidden chest, etc.)
	// this is a key in data/menu-text-data.js 'notificationMenu'
	this.currentTextType = '';
	this.currentText = '';

	// these are set as true if player doesn't want to see these notifications anymore
	this.generalChestOff = false;
	this.hiddenChestOff = false;
}

NotificationMenu.prototype = Object.create(Menu.prototype);

NotificationMenu.prototype._handleContinue = function () {
	this.hide();
	MainLoop.start();
};

NotificationMenu.prototype._handleToggleOff = function () {
	if (this.currentTextType === 'general-chest') {
		this.generalChestOff = true;
	} else if (this.currentTextType === 'hidden-chest') {
		this.hiddenChestOff = true;
	}
	this._handleContinue(); // exit menu
};

// Player calls us (or someone) with type corresponding to keys in 'notificationMenu'
// in data/menu-text-data.js. Values is a single string value
// or an array of values to place in text in order at designated text replacement spots
NotificationMenu.prototype.notify = function (type, values) {
	this.currentTextType = type;
	var text = global.get('menu-text-data')[this.name][type];
	if (typeof(values) === 'object') {
		for (var i = 0; i < values.length; i++) {
			text = text.replace('{}', values[i]);
		}
	} else if (typeof(values) === 'string') {
		text = text.replace('{}', values);
	}
	this.currentText = text;
};

// we overwrite this from Menu base class because we need to pause game
NotificationMenu.prototype.display = function () {
	// REMOVE THIS for disappearing notification
	if (this.currentTextType === 'general-chest' && this.generalChestOff) {
		return;
	}
	if (this.currentTextType === 'hidden-chest' && this.hiddenChestOff) {
		return;
	}

	MainLoop.stop();
	Menu.prototype.display.call(this);
};

// We overwrite the draw, because we don't paint the waterfallofdreams background
NotificationMenu.prototype.draw = function () {
	// REMOVE THIS
	if (this.currentTextType === 'general-chest' && this.generalChestOff) {
		return;
	}
	if (this.currentTextType === 'hidden-chest' && this.hiddenChestOff) {
		return;
	}

	this.itemsSprite.draw(0,0);
	this._drawText();
	this._drawContinue();
	if (this.currentTextType === 'general-chest' || this.currentTextType === 'hidden-chest') {
		this._drawToggleOff();
	}
};

// Draw our designated text !
// Should have been notified before so we can set our text key
NotificationMenu.prototype._drawText = function () {
	var data = global.get('menu-text-data')[this.name];
	draw.writeText(
		global.get('ctx'),
		this.currentText,
		data.textPos[0],
		data.textPos[1],
		data.font,
		data.fontSize,
		data.fontColor,
		data.textWidth,
		data.spacing
	);
};

// Draws the 'continue' button
NotificationMenu.prototype._drawContinue = function () {
	var data = global.get('menu-text-data')[this.name];
	draw.fillText(
		global.get('ctx'),
		'continue', 
		data.continueButtonPos[0],
		data.continueButtonPos[1],
		data.font,
		data.fontSize,
		data.fontColor
	);
};

NotificationMenu.prototype._drawToggleOff = function () {
	var data = global.get('menu-text-data')[this.name];
	draw.fillText(
		global.get('ctx'),
		'don\'t show again', 
		data.toggleOffPos[0],
		data.toggleOffPos[1],
		data.font,
		data.fontSize,
		data.fontColor
	);
};

global.set('class/NotificationMenu', NotificationMenu);

}());