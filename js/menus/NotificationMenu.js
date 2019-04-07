// NotificationMenu, used for in game notifications
// e.g. first new chest, general new chest, new hidden chest

// This menu is a bit different from the others.
// If we're notified of a first-chest or a first-hidden-chest
// we put up a popup menu which pauses the game.

// However, if we get a general-chest or a hidden-chest after the first one,
// we only show a small notification which then fades away after a time

// So two types of notifications, one pauses, other one displays in game and then disappears

(function () {

'use strict';

// imports
var Menu = global.get('class/Menu');
var draw = global.get('draw');

function NotificationMenu () {
	this.name = 'notificationMenu';

	// call Menu constructor (it uses the .name property, so we must set it before calling)
	Menu.call(this);
	this.sprite = undefined; // we don't use the waterfallofdreams sprite Menu sets

	this.buttonActions['continue'] = this._handleContinue;

	// we change this if player notifies us what happened (first chest, hidden chest, etc.)
	// this is a key in data/menu-text-data.js 'notificationMenu'
	this.currentTextType = '';
	this.currentText = '';

	// this is set as true during a 'new song!' or a 'hidden chest!' or any notification
	// which appears and then disappears (a popup)
	this.inPopup = false;
	this.popupTime = 0;
	this.POPUPDURATION = 2500; // ms total display time of popup
	this.POPUPFADETIME = 1000; // will fade for last 1000 ms of popupduration 
	this.entityX = undefined; // entity which prompted the popup!
	this.entityY = undefined;
	this.entityWidth = undefined;
	this.entityHeight = undefined;
}

NotificationMenu.prototype = Object.create(Menu.prototype);

NotificationMenu.prototype._handleContinue = function () {
	this.hide();
	MainLoop.start();
};

// Player calls us (or someone) with type corresponding to keys in 'notificationMenu'
// in data/menu-text-data.js. Values is a single string value
// or an array of values to place in text in order at designated text replacement spots
// x, y, width, height only supplied with the popup notifications (general-chest and hidden-chest)
// and corresponds to the entity whose popup we show above (or below or left/right)
NotificationMenu.prototype.notify = function (type, values, x, y, width, height) {
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

	if (type === 'general-chest' || type === 'hidden-chest') {
		this.inPopup = true;
		this.popupTime = 0;
		this.entityX = x;
		this.entityY = y;
		this.entityWidth = width;
		this.entityHeight = height;
	}
};

// we overwrite this from Menu base class because we need to pause game
NotificationMenu.prototype.display = function () {
	MainLoop.stop();
	Menu.prototype.display.call(this);
};

NotificationMenu.prototype.update = function (dt) {
	if (this.inPopup) {
		this.popupTime += dt;
		if (this.popupTime > this.POPUPDURATION) {
			// end
			this.popupTime = 0;
			this.inPopup = false;
		}
	}
};

// We overwrite the draw, because we don't paint the waterfallofdreams background
NotificationMenu.prototype.draw = function () {
	if (global.get('inMenu')) {
		var data = global.get('menu-text-data')[this.name];
		this.itemsSprite.draw(0,0);
		this._drawText(data.textPos[0], data.textPos[1], data.textWidth);
		this._drawContinue();
	}
	if (this.inPopup) {
		this._drawPopup();
	}
};

// We draw popup default to the right and above player.
// If that is out of screen in any direction, mirror with respective axis
// (center of player) so it is on screen
// Popup will last for this.POPUPDURATION
// and will be fading away for this.POPUPFADETIME 'milliseconds'
NotificationMenu.prototype._drawPopup = function () {
	var x = this.entityX;
	var y = this.entityY;
	var w = this.entityWidth;
	var h = this.entityHeight;

	var data = global.get('menu-text-data')[this.name];
	var popupWidth = data.popupTextWidth;
	var popupHeight = data.popupTextHeight;

	var canvas = global.get('canvas');

	var popupX = x + w;
	if (popupX > canvas.width - popupWidth) {
		popupX = x - popupWidth;
	}
	var popupY = y - popupHeight - data.fontSize;
	if (popupY - data.fontSize < 0) {
		popupY = y + h + data.fontSize;
	}

	var opacity = undefined;
	var fadeTime = this.popupTime - (this.POPUPDURATION - this.POPUPFADETIME); // time we've been fading
	if (fadeTime > 0) {
		opacity = (this.POPUPFADETIME - fadeTime) / this.POPUPFADETIME; // goes from 1 - 0 in POPUPFADETIME ms
	}
	this._drawText(popupX, popupY, popupWidth, opacity, true);
};

// Draw our designated text !
// Should have been notified before so we can set our text key
// Draw at x,y with max width: width
// and opacity opacity, shadow is true if the text should have a shadow
NotificationMenu.prototype._drawText = function (x, y, width, opacity, shadow) {
	var data = global.get('menu-text-data')[this.name];
	draw.writeText(
		global.get('ctx'),
		this.currentText,
		x,
		y,
		data.font,
		data.fontSize,
		data.fontColor,
		width,
		data.spacing,
		opacity,
		shadow ? data.popupShadowColor : undefined,
		shadow ? data.popupShadowDistance : undefined
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

global.set('class/NotificationMenu', NotificationMenu);

}());