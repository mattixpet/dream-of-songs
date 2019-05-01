// Checkbox is a helper class for SettingsMenu
// Represents one item to be checked on/off in SettingsMenu

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');
var draw = global.get('draw');
var collision = global.get('collision');

// [[label]] is the text to be displayed with the checkbox
// [[configVariable]] is the name of the key in config.js, representing
//   the variable the checkbox is connected with
// [[callback]] is an optional argument which will be called
//   on a checkbox tick with [[configVariable]] as the argument
//   if the checkbox is not already ticked (e.g. used for multiple choice, Multibox.js)
//   The variable should still be in config :)
function Checkbox(label, configVariable, callback) {
	this.label = label;
	this.configVariable = configVariable;
	this.callback = callback;

	this.checkboxSprite = global.get('imageHandler').getSprite('checkbox');
	this.checkmarkSprite = global.get('imageHandler').getSprite('checkmark');

	this.width = global.get('menu-text-data')['settingsMenu'].checkboxWidth;
	this.height = global.get('menu-text-data')['settingsMenu'].checkboxHeight;

	this.iconWidth = global.get('menu-text-data')['Common'].iconWidth;

	// coordinates of the actual box to be checked/unchecked (but let's check it out though)
	this.checkboxX = undefined;
	this.checkboxY = undefined;
}

Checkbox.prototype.draw = function (x, y) {
	this.x = x;
	this.y = y;

	var data = global.get('menu-text-data')['settingsMenu'];
	this._drawLabel(x + data.checkboxMargin, y + this.height - data.labelMargin);
	this.checkboxX = x + this.width - this.iconWidth - data.checkboxMargin * 2;
	this.checkboxY = y + data.checkboxMargin;
	this.checkboxSprite.draw(this.checkboxX, this.checkboxY);
	if (config[this.configVariable]) {
		this.checkmarkSprite.draw(this.checkboxX, this.checkboxY);
	}
};

// Is someone clicking our checkbox?
Checkbox.prototype.click = function (x, y) {
	console.log('Clicked: ' + x + ', ' + y + ' on checkbox: ' + this.configVariable);

	if (collision.pixelWithinRect(x, y, this.checkboxX, this.checkboxY, this.iconWidth, this.iconWidth)) {
		if (this.callback) {
			if (!config[this.configVariable]) {
				config[this.configVariable] = true;
				this.callback.call(global.get('settingsMenu'), this.configVariable);
			}
		} else {
			config[this.configVariable] = !config[this.configVariable];
		}

		util.log('Toggling ' + this.configVariable + ' ' + (config[this.configVariable] ? 'on.' : 'off.'));

		if (this.callback) {
			return true;
		}

		// need to redraw entire menu for checkbox to check on/off
		global.get('settingsMenu').draw();
	}

	return false;
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

Checkbox.prototype.setWidth = function (width) {
	this.width = width;
};

Checkbox.prototype.setHeight = function (height) {
	this.height = height;
};

Checkbox.prototype.getConfigVariable = function () {
	return this.configVariable;
};

Checkbox.prototype.resetResolution = function (ratio) {
	this.width = Math.round(this.width * ratio);
	this.height = Math.round(this.height * ratio);
	this.iconWidth = Math.round(this.iconWidth * ratio);
};

global.set('class/Checkbox', Checkbox);

}());