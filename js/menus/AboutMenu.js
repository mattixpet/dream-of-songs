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

	// populated in this._splitText()
	// depending on how much we can fit on one page (and then the scroll goes between pages here)
	// this.text.length num pages
	this.text = [];
	this.textIndex = 0;
	this._splitText();
}

AboutMenu.prototype = Object.create(ScrollableMenu.prototype);

AboutMenu.prototype._handleBack = function () {
	global.get(this.previousMenu).display();
	this.textIndex = 0;
};

AboutMenu.prototype._handleUp = function () {
	this.textIndex = this.textIndex - 1 === -1 ? this.text.length - 1 : this.textIndex - 1;
	this.draw();
};

AboutMenu.prototype._handleDown = function () {
	this.textIndex = (this.textIndex + 1) % this.text.length;
	this.draw();
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
		this.text[this.textIndex],
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


// Take the entire text in menu-text-data.aboutMenu.text and split
// it into pages that can fit for us (then scroll between)
// Populates this.text array
AboutMenu.prototype._splitText = function () {
	// we can fit roughly numWordsPerPage words on each page
	var numWordsPerPage = 110;
	// menu-text-data.aboutMenu.text should be split on newlines which can fit each of our page
	var words = global.get('menu-text-data')[this.name].text.split(' ');
	var wordsDone = 0;
	while (wordsDone + numWordsPerPage < words.length) {
		this.text.push(words.slice(wordsDone, wordsDone+numWordsPerPage).join(' '));
		wordsDone += numWordsPerPage;
	}
	this.text.push(words.slice(wordsDone, words.length).join(' '));
};

global.set('class/AboutMenu', AboutMenu);

}());