// Popup is a helper class for NotificationMenu
// Represents one popup notification

(function () {

'use strict';

var draw = global.get('draw');

// Where entityX relates to the entity which prompted the popup,
// to decide where to display it (right, left above etc.)
function Popup(text, entityX, entityY, entityW, entityH) {
	this.text = text;

	this.entityX = entityX; // entity which prompted the popup!
	this.entityY = entityY;
	this.entityWidth = entityW;
	this.entityHeight = entityH;

	this.popupTime = 0;
	this.POPUPDURATION = 2500; // ms total display time of popup
	this.POPUPFADETIME = 1000; // will fade for last 1000 ms of popupduration
}

Popup.prototype.update = function (dt) {
	this.popupTime += dt;
	if (this.popupTime > this.POPUPDURATION) {
		global.get('notificationMenu').popupDone(this);
	}
};

// We draw popup default to the right and above player.
// If that is out of screen in any direction, mirror with respective axis
// (center of player) so it is on screen
// Popup will last for this.POPUPDURATION
// and will be fading away for this.POPUPFADETIME 'milliseconds'
Popup.prototype.draw = function () {
	var x = this.entityX;
	var y = this.entityY;
	var w = this.entityWidth;
	var h = this.entityHeight;

	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')['notificationMenu'];
	var popupWidth = data.popupTextWidth;
	var popupHeight = data.popupTextHeight;

	var canvas = global.get('canvas');

	var popupX = x + w;
	if (popupX > canvas.width - popupWidth) {
		popupX = x - popupWidth;
	}
	var popupY = y - popupHeight - common.fontSize;
	if (popupY - common.fontSize < 0) {
		popupY = y + h + common.fontSize;
	}

	var opacity = undefined;
	var fadeTime = this.popupTime - (this.POPUPDURATION - this.POPUPFADETIME); // time we've been fading
	if (fadeTime > 0) {
		opacity = (this.POPUPFADETIME - fadeTime) / this.POPUPFADETIME; // goes from 1 - 0 in POPUPFADETIME ms
	}
	this._drawText(popupX, popupY, popupWidth, opacity, true);
};

// Draw at x,y with max width: width
// and opacity opacity, shadow is true if the text should have a shadow
// not 100% dry, this is also in notificationmenu almost the same, but to be fair
// it is only a function call
Popup.prototype._drawText = function (x, y, width, opacity, shadow) {
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')['notificationMenu'];
	draw.writeText(
		global.get('ctx'),
		this.text,
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

global.set('class/Popup', Popup);

}());