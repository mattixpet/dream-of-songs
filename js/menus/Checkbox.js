// Checkbox is a helper class for SettingsMenu
// Represents one item to be checked on/off in SettingsMenu

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');
var draw = global.get('draw');
var collision = global.get('collision');

// local constants
const iconWidth = global.get('menu-text-data')['Common'].iconWidth;

// [[label]] is the text to be displayed with the checkbox
// [[configVariable]] is the name of the key in config.js, representing
//   the variable the checkbox is connected with
function Checkbox(label, configVariable) {
	this.label = label;
	this.configVariable = configVariable;

	this.checkboxSprite = global.get('imageHandler').getSprite('checkbox');
	this.checkmarkSprite = global.get('imageHandler').getSprite('checkmark');

	this.width = global.get('menu-text-data')['settingsMenu'].checkboxWidth;
	this.height = global.get('menu-text-data')['settingsMenu'].checkboxHeight;

	// coordinates of the actual box to be checked/unchecked (but let's check it out though)
	this.checkboxX = undefined;
	this.checkboxY = undefined;
}

Checkbox.prototype.draw = function (x, y) {
	this.x = x;
	this.y = y;

	var data = global.get('menu-text-data')['settingsMenu'];
	this._drawLabel(x + data.checkboxMargin, y + this.height - data.labelMargin);
	this.checkboxX = x + this.width - iconWidth - data.checkboxMargin * 2;
	this.checkboxY = y + data.checkboxMargin;
	this.checkboxSprite.draw(this.checkboxX, this.checkboxY);
	if (config[this.configVariable]) {
		this.checkmarkSprite.draw(this.checkboxX, this.checkboxY);
	}
};

// Is someone clicking our checkbox?
Checkbox.prototype.click = function (x, y) {
	if (collision.pixelWithinRect(x, y, this.checkboxX, this.checkboxY, iconWidth, iconWidth)) {
		config[this.configVariable] = !config[this.configVariable];
		util.log('Toggling ' + this.configVariable + ' ' + (config[this.configVariable] ? 'on.' : 'off.'));

		// need to redraw entire menu for checkbox to check on/off
		global.get('settingsMenu').draw();
	}
};

// Draw at topleft x,y
Checkbox.prototype._drawLabel = function (x, y) {
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

global.set('class/Checkbox', Checkbox);

}());