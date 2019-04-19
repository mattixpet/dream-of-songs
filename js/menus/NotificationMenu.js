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
var draw = global.get('draw');

var Menu = global.get('class/Menu');
var Popup = global.get('class/Popup');

function NotificationMenu () {
	this.name = 'notificationMenu';

	// call Menu constructor (it uses the .name property, so we must set it before calling)
	Menu.call(this);
	this.sprite = undefined; // we don't use the waterfallofdreams sprite Menu sets

	this.buttonActions['continue'] = this._handleContinue;

	this.currentText = ''; // text being displayed which is not a popup

	// popup notification we have at the moment
	// (always overwrite, have only one)
	this.popup = undefined;
}

NotificationMenu.prototype = Object.create(Menu.prototype);

NotificationMenu.prototype._handleContinue = function () {
	this.hide();
	MainLoop.start();
};

NotificationMenu.prototype.onEnter = function () {
	this._handleContinue();
};

// Player calls us (or someone) with type corresponding to keys in 'notificationMenu'
// in data/menu-text-data.js. Values is a single string value
// or an array of values to place in text in order at designated text replacement spots
// x, y, width, height only supplied with the popup notifications (general-chest and hidden-chest)
// and corresponds to the entity whose popup we show above (or below or left/right)
NotificationMenu.prototype.notify = function (type, values, x, y, width, height) {
	var text = global.get('menu-text-data')[this.name][type];
	if (typeof(values) === 'object') {
		for (var i = 0; i < values.length; i++) {
			text = text.replace('{}', values[i]);
		}
	} else if (typeof(values) === 'string') {
		text = text.replace('{}', values);
	}

	if (type === 'general-chest' || type === 'hidden-chest') {
		this.popup = new Popup(
			text,
			x,
			y,
			width,
			height
		);
	} else {
		this.currentText = text;
	}
};

// Callback for popups to call when they are done, so we can remove them from our list
// Since we only have one popup, delete that one on the done call.
NotificationMenu.prototype.popupDone = function (popup) {
	this.popup = undefined;
};

// we overwrite this from Menu base class because we need to pause game
NotificationMenu.prototype.display = function () {
	Menu.prototype.display.call(this);
	// stop after here because we want to get one cycle in to redraw the gui with the current song
	// timeout necessary to get in at least one cycle after song is updated
	setTimeout(function(){MainLoop.stop();}, 60);
};

NotificationMenu.prototype.update = function (dt) {
	if (this.popup) {
		this.popup.update(dt);
	}
};

// We overwrite the draw, because we don't paint the waterfallofdreams background
NotificationMenu.prototype.draw = function () {
	if (this.popup) {
		this.popup.draw();
	}

	if (global.get('inMenu')) {
		var data = global.get('menu-text-data')[this.name];
		this.itemsSprite.draw(0,0);
		this._drawText(data.textPos.x, data.textPos.y, data.textWidth);
		this._drawContinue();
	}
};

// Draw our designated text !
// Should have been notified before so we can set our text key
// Draw at x,y with max width: width
// and opacity opacity, shadow is true if the text should have a shadow
NotificationMenu.prototype._drawText = function (x, y, width, opacity, shadow) {
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')[this.name];
	draw.writeText(
		this.currentText,
		x,
		y,
		common.font,
		common.fontSize,
		common.fontColor,
		width,
		common.spacing,
		opacity,
		shadow ? data.popupShadowColor : undefined,
		shadow ? data.popupShadowDistance : undefined
	);
};

// Draws the 'continue' button
NotificationMenu.prototype._drawContinue = function () {
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')[this.name];
	draw.fillText(
		'continue', 
		data.continueButtonPos.x,
		data.continueButtonPos.y,
		common.font,
		common.fontSize,
		common.fontColor
	);
};

global.set('class/NotificationMenu', NotificationMenu);

}());