// SettingsMenu

(function () {

'use strict';

// imports
var draw = global.get('draw');
var Menu = global.get('class/Menu');
var ScrollableMenu = global.get('class/ScrollableMenu');
var Checkbox = global.get('class/Checkbox');
var Typebox = global.get('class/Typebox');

function SettingsMenu () {
	this.name = 'settingsMenu';

	var data = global.get('menu-text-data')[this.name];
	// call ScrollableMenu constructor (it uses the .name property, so we must set it before calling)
	ScrollableMenu.call(this, data.upArrowPos, data.downArrowPos);

	this.buttonActions['back'] = this._handleBack;

	// create our checkboxes/typeboxes to be drawn later
	this.checkboxes = [];
	for (var i = 0; i < data.checkboxes.length; i++) {
		this.checkboxes.push(
			new Checkbox(
				data.checkboxes[i].label,
				data.checkboxes[i].variable
			)
		);
	}
	// we only have the 'Enter code' typebox
	this.typebox = new Typebox(
		data.typebox.label,
		this.enteringCode
	);
}

SettingsMenu.prototype = Object.create(ScrollableMenu.prototype);

SettingsMenu.prototype._handleBack = function () {
	global.get(this.previousMenu).display();
	//this.textIndex = 0;
};

SettingsMenu.prototype._handleUp = function () {
	//this.textIndex = this.textIndex - 1 === -1 ? this.text.length - 1 : this.textIndex - 1;
	this.draw();
};

SettingsMenu.prototype._handleDown = function () {
	//this.textIndex = (this.textIndex + 1) % this.text.length;
	this.draw();
};

SettingsMenu.prototype.onEnter = function () {
	this._handleBack();
};

SettingsMenu.prototype._handleClick = function (x, y) {
	// checks for button clicks (back button)
	Menu.prototype._handleClick.call(this, x, y);
	// now check our checkboxes and typeboxes (well that one..) if they are being clicked
	for (var i = 0; i < this.checkboxes.length; i++) {
		this.checkboxes[i].click(x, y);
	}
	this.typebox.click(x, y);
};

// This function is called by our typebox when user clicks it
// means we grab the input and analyse what user writes
SettingsMenu.prototype.enteringCode = function () {
	console.log('ENTERING CODE BIATCH');
};

SettingsMenu.prototype.draw = function () {
	// draw the background and canvas for our text
	ScrollableMenu.prototype.draw.call(this);

	this._drawBackButton();
	this._drawTypebox(); // typebox will be at top
	this._drawCheckboxes();
};

SettingsMenu.prototype._drawTypebox = function () {
	var data = global.get('menu-text-data')[this.name];
	this.typebox.draw(
		data.firstCheckboxPos.x,
		data.firstCheckboxPos.y
	);
};

// Draw our checkboxes, remember there is one typebox already drawn above us
SettingsMenu.prototype._drawCheckboxes = function () {
	var data = global.get('menu-text-data')[this.name];
	var x = data.firstCheckboxPos.x;
	var y = data.firstCheckboxPos.y + data.checkboxHeight;
	for (var i = 0; i < this.checkboxes.length; i++) {
		this.checkboxes[i].draw(x, y);
		y += data.checkboxHeight;
	}
};

SettingsMenu.prototype._drawBackButton = function () {
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')[this.name];

	draw.fillText(
		'go', 
		data.backButtonPos.x,
		data.backButtonPos.y,
		common.font,
		common.fontSize,
		common.fontColor
	);

	draw.fillText(
		'back', 
		data.backButtonPos.x - common.fontSize * 0.6,
		data.backButtonPos.y + common.fontSize * common.spacing,
		common.font,
		common.fontSize,
		common.fontColor
	);
};

global.set('class/SettingsMenu', SettingsMenu);

}());