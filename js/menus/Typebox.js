// Typebox is a helper class for SettingsMenu
// Represents a typebox where user can type something in and hit Return to send the text

(function () {

'use strict';

var draw = global.get('draw');
var collision = global.get('collision');

// local constants
const iconWidth = global.get('menu-text-data')['Common'].iconWidth;

// [[label]] is the text to be displayed with the typebox
// [[callback]] is a function to call when user has typed something
//   and hit Return
function Typebox(label, callback) {
	this.label = label;
	this.callback = callback;

	this.typeboxSprite = global.get('imageHandler').getSprite('typebox');

	this.width = global.get('menu-text-data')['settingsMenu'].checkboxWidth;
	this.height = global.get('menu-text-data')['settingsMenu'].checkboxHeight;

	this.typeboxX = undefined;
	this.typeboxY = undefined;
}

Typebox.prototype.draw = function (x, y) {
	var data = global.get('menu-text-data')['settingsMenu'];
	this._drawLabel(x + data.checkboxMargin, y + this.height - data.labelMargin);
	this.typeboxX = x + this.width - this.typeboxSprite.getWidth() - data.checkboxMargin;
	this.typeboxY = y + data.checkboxMargin;
	this.typeboxSprite.draw(this.typeboxX, this.typeboxY);
};

// Check if our box is being clicked, and then allow typing.
Typebox.prototype.click = function (x, y) {
	if (collision.pixelWithinRect(
		x, y, 
		this.typeboxX, this.typeboxY, 
		this.typeboxSprite.getWidth(), this.typeboxSprite.getHeight()
	)) {
		this.callback();
	}
};

// Draw at topleft x,y
Typebox.prototype._drawLabel = function (x, y) {
	var common = global.get('menu-text-data')['Common'];
	draw.fillText(
		this.label,
		x,
		y,
		common.font,
		common.fontSize,
		common.fontColor
	);
};

global.set('class/Typebox', Typebox);

}());