// AboutMenu

(function () {

'use strict';

// imports
var draw = global.get('draw');

var Menu = global.get('class/Menu');

function AboutMenu () {
	this.name = 'aboutMenu';

	// call Menu constructor (it uses the .name property, so we must set it before calling)
	Menu.call(this);

	this.buttonActions['back'] = this._handleBack;

	this.upArrowSprite = global.get('imageHandler').getSprite('uparrow');
	this.downArrowSprite = global.get('imageHandler').getSprite('downarrow');
}

AboutMenu.prototype = Object.create(Menu.prototype);

AboutMenu.prototype._handleBack = function () {
	global.get(this.previousMenu).display();
};

AboutMenu.prototype.onEnter = function () {
	this._handleBack();
};

AboutMenu.prototype.draw = function () {
	// draw the background and canvas for our text
	Menu.prototype.draw.call(this);

	this._drawText();
	this._drawBackButton();
	this._drawUpDownArrows();
};

AboutMenu.prototype._drawText = function () {
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')[this.name];

	draw.writeText(
		global.get('ctx'),
		data.text,
		data.textPos.x,
		data.textPos.y,
		common.font,
		common.fontSize,
		common.fontColor,
		data.textWidth,
		common.spacing
	);
};

AboutMenu.prototype._drawBackButton = function () {
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')[this.name];

	draw.fillText(
		global.get('ctx'),
		'go back', 
		data.backButtonPos.x,
		data.backButtonPos.y,
		common.font,
		common.fontSize,
		common.fontColor
	);
};

AboutMenu.prototype._drawUpDownArrows = function () {
	// our up/down arrows have same position as in audio gui
	var data = global.get('audio-gui-data')['Spacings'];
	this.upArrowSprite.draw(data.upArrowPos.x, data.upArrowPos.y);
	this.downArrowSprite.draw(data.downArrowPos.x, data.downArrowPos.y);
};

global.set('class/AboutMenu', AboutMenu);

}());