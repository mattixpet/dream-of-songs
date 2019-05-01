// Multibox is a helper class for SettingsMenu
// Represents one item to be checked on/off in SettingsMenu

(function () {

'use strict';

var config = global.get('config');
var draw = global.get('draw');
var Checkbox = global.get('class/Checkbox');

// [[label]] is the text to be displayed with the Multibox
// [[options]] is the name of the options to have
// on the format options: [
// 		{
//			'label' : asd
//          'action' : 'do asd'
//      }
// ]
// Where the action is the argument to [[callback]] on a click
function Multibox(label, options, callback) {
	this.label = label;

	this.checkboxWidth = global.get('menu-text-data')['settingsMenu'].multiboxCheckboxWidth;
	this.checkboxHeight = global.get('menu-text-data')['settingsMenu'].checkboxHeight * 0.9;

	this.width = global.get('menu-text-data')['settingsMenu'].checkboxWidth;
	this.height = global.get('menu-text-data')['settingsMenu'].multiboxHeight;

	this.iconWidth = global.get('menu-text-data')['Common'].iconWidth;

	this.checkboxes = [];
	for (var i = 0; i < options.length; i++) {
		this.checkboxes.push(
			new Checkbox(
				options[i].label,
				options[i].action,
				callback
			)
		);
		this.checkboxes[i].setWidth(this.checkboxWidth);
		this.checkboxes[i].setHeight(this.checkboxHeight);
	}
}

// Is someone clicking our Multibox?
Multibox.prototype.click = function (x, y) {
	/* jshint shadow:true */
	
	var wasClickedIndex;
	for (var i = 0; i < this.checkboxes.length; i++) {
		var wasClicked = this.checkboxes[i].click(x, y);
		if (wasClicked) {
			// set rest of checkboxes as false
			wasClickedIndex = i;
		}
	}

	if (wasClickedIndex || wasClickedIndex === 0) {
		for (var i = 0; i < this.checkboxes.length; i++) {
			if (i !== wasClickedIndex) {
				config[this.checkboxes[i].getConfigVariable()] = false;
			}
		}
	}

	// need to redraw entire menu for checkbox to check on/off
	global.get('settingsMenu').draw();
};

Multibox.prototype.draw = function (x, y) {
	this.x = x;
	this.y = y;

	var data = global.get('menu-text-data')['settingsMenu'];
	var labelHeight = this.height - this.checkboxes.length * this.checkboxHeight;
	this._drawLabel(
		x + data.checkboxMargin, 
		y + labelHeight - data.labelMargin
	);
	// draw checkboxes
	var checkboxX = x + this.width - this.checkboxWidth;
	var checkboxY = y + data.checkboxMargin + labelHeight - data.labelMargin;
	for (var i = 0; i < this.checkboxes.length; i++) {
		this.checkboxes[i].draw(checkboxX, checkboxY);
		checkboxY += this.checkboxHeight;
	}
};

// Draw at topleft x,y
Multibox.prototype._drawLabel = function (x, y) {
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

Multibox.prototype.resetResolution = function (ratio) {
	this.width = Math.round(this.width * ratio);
	this.height = Math.round(this.height * ratio);
	this.iconWidth = Math.round(this.iconWidth * ratio);
	this.checkboxWidth = Math.round(this.checkboxWidth * ratio);
	this.checkboxHeight = Math.round(this.checkboxHeight * ratio);

	for (var i = 0; i < this.checkboxes.length; i++) {
		this.checkboxes[i].resetResolution(ratio);
	}
};

global.set('class/Multibox', Multibox);

}());