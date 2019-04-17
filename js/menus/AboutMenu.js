// AboutMenu

(function () {

'use strict';

// imports
var draw = global.get('draw');

var ScrollableMenu = global.get('class/ScrollableMenu');

function AboutMenu () {
	this.name = 'aboutMenu';

	var data = global.get('menu-text-data')[this.name];
	// call ScrollableMenu constructor (it uses the .name property, so we must set it before calling)
	ScrollableMenu.call(this, data.upArrowPos, data.downArrowPos);

	this.buttonActions['back'] = this._handleBack;
}

AboutMenu.prototype = Object.create(ScrollableMenu.prototype);

AboutMenu.prototype._handleBack = function () {
	global.get(this.previousMenu).display();
};

AboutMenu.prototype._handleUp = function () {
	console.log('up');
};

AboutMenu.prototype._handleDown = function () {
	console.log('down');
};

AboutMenu.prototype.onEnter = function () {
	this._handleBack();
};

AboutMenu.prototype.draw = function () {
	// draw the background and canvas for our text
	ScrollableMenu.prototype.draw.call(this);

	this._drawText();
	this._drawBackButton();
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
		'go', 
		data.backButtonPos.x,
		data.backButtonPos.y,
		common.font,
		common.fontSize,
		common.fontColor
	);

	draw.fillText(
		global.get('ctx'),
		'back', 
		data.backButtonPos.x - common.fontSize * 0.6,
		data.backButtonPos.y + common.fontSize * common.spacing,
		common.font,
		common.fontSize,
		common.fontColor
	);
};

global.set('class/AboutMenu', AboutMenu);

}());