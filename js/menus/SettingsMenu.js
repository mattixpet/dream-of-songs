// SettingsMenu

(function () {

'use strict';

// imports
var config = global.get('config');
var util = global.get('util');
var consts = global.get('consts');
var draw = global.get('draw');
var Menu = global.get('class/Menu');
var ScrollableMenu = global.get('class/ScrollableMenu');
var Checkbox = global.get('class/Checkbox');
var Typebox = global.get('class/Typebox');
var Multibox = global.get('class/Multibox');

function SettingsMenu () {
	this.name = 'settingsMenu';

	var data = global.get('menu-text-data')[this.name];
	// call ScrollableMenu constructor (it uses the .name property, so we must set it before calling)
	ScrollableMenu.call(this, data.upArrowPos, data.downArrowPos);

	this.buttonActions['back'] = this._handleBack;
	this.buttonActions['continue'] = this._handleContinue; // only when in notification

	this.notificationSprite = global.get('imageHandler').getSprite('notificationMenu');
	this.inNotification = false; // are we in notification after user types successful cheat code?

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
		this.handleTypedWord
	);
	// we only have one multibox (resolution)
	this.multibox = new Multibox(
		data.multibox.label,
		data.multibox.options,
		this.notifyAction
	);
}

SettingsMenu.prototype = Object.create(ScrollableMenu.prototype);

SettingsMenu.prototype._handleBack = function () {
	this.typebox.stopEnteringCode();
	global.get(this.previousMenu).display();
};

// Only does anything when we pop a notification up, then this will remove the notification
SettingsMenu.prototype._handleContinue = function () {
	if (this.inNotification) {
		this.inNotification = false;
		this.draw();
	}
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
	if (this.inNotification) {
		this._handleContinue();
	} else {
		this._handleBack();
	}
};

SettingsMenu.prototype._handleClick = function (x, y) {
	// make sure not to return when buttons not being displayed are 'clicked'
	var buttonClicked = Menu.prototype._handleClick.call(this, x, y);
	if ((this.inNotification && buttonClicked === 'continue') ||
		!this.inNotification && buttonClicked === 'back') {
		return;
	}
	// now check our checkboxes and typeboxes (well that one..) if they are being clicked
	for (var i = 0; i < this.checkboxes.length; i++) {
		this.checkboxes[i].click(x, y);
	}
	this.typebox.click(x, y);
	this.multibox.click(x, y);
};

// actions called from our multibox
SettingsMenu.prototype.notifyAction = function (action) {
	/* jshint shadow:true */

	var width, height;
	switch (action) {
		case '800x450':
			width = 800;
			height = 450;
			break;
		case 'windowWidth':
			var canvas = global.get('canvas');
			width = document.body.clientWidth - 2; // - 2 is because of the 1 px border of canvas
			height = Math.round(width / canvas.width * canvas.height);
			break;
		case 'fullscreen':
			this._requestFullscreen();
			var canvas = global.get('canvas');
			width = window.screen.width - 2 || document.body.clientWidth - 2;
			height = Math.round(width / canvas.width * canvas.height);
			break;
		default:
			// this is not used either.. but could be cool maybe someday
			width = parseInt(action.split('x')[0]);
			height = parseInt(action.split('x')[1]);
			break;
	}
	util.log('Changing resolution to ' + width + ' width with ' + height + ' height.');
	global.get('changeResolution')(width, height);
};

SettingsMenu.prototype._requestFullscreen = function () {
	var canvas = global.get('canvas');
	(canvas.requestFullScreen || 
		canvas.webkitRequestFullScreen || 
		canvas.mozRequestFullScreen || 
		canvas.msRequestFullScreen)
	.call(canvas);
};

// Called by our typebox when user types a word and hits Return
SettingsMenu.prototype.handleTypedWord = function (word) {
	util.log('Settings called with word: ' + word);
	this.draw();

	if (word.toLowerCase() === consts.WHYISARAVENLIKEAWRITINGDESK) {
		this.typebox.stopEnteringCode();
		config.hiddenChestsEnabled = true;
		config.showHiddenChests = true;

		this.inNotification = true;
		this._drawBigNotification(global.get('menu-text-data')[this.name]['raven-notification']);
	} else if (word.toLowerCase() === consts.THEONLYWAYTOFLY) {
		this.typebox.stopEnteringCode();
		config.snakeModeEnabled = true;
		config.snakeMode = true;
		global.get('player').setAsFlying(true);

		this.inNotification = true;
		this._drawBigNotification(global.get('menu-text-data')[this.name]['flying-notification']);
	} else if (word.toLowerCase() === consts.THEONLYWAYTODEVMODE) {
		config.devMode = !config.devMode;
		util.log('Dev mode: ' + config.devMode);
	} else {
		this._drawSmallNotification('Nothing happened.');
	}
};

SettingsMenu.prototype.draw = function () {
	// draw the background and canvas for our text
	ScrollableMenu.prototype.draw.call(this);

	this._drawBackButton();
	this._drawTypebox(); // typebox will be at top
	this._drawCheckboxes();

	var data = global.get('menu-text-data')[this.name];
	this.multibox.draw(data.firstCheckboxPos.x, data.firstCheckboxPos.y + data.checkboxHeight * 2);
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

SettingsMenu.prototype._drawBigNotification = function (text) {
	this.draw(); // get rid of 'Nothing happened.' if present
	this.notificationSprite.draw(0,0);
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')['notificationMenu'];
	draw.writeText(
		text,
		data.textPos.x,
		Math.floor(data.textPos.y * 0.85), // let our notification text start a little higher than notificationmenus
		common.font,
		common.fontSize,
		common.fontColor,
		data.textWidth,
		common.spacing
	);
	this._drawContinue();
};

SettingsMenu.prototype._drawSmallNotification = function (text) {
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')[this.name];
	draw.fillText(
		text, 
		data.smallNotificationPos.x,
		data.smallNotificationPos.y,
		common.font,
		common.fontSize,
		common.fontColor
	);
};

// Draws the 'continue' button
SettingsMenu.prototype._drawContinue = function () {
	var common = global.get('menu-text-data')['Common'];
	var data = global.get('menu-text-data')['notificationMenu'];
	draw.fillText(
		'continue', 
		data.continueButtonPos.x,
		data.continueButtonPos.y,
		common.font,
		common.fontSize,
		common.fontColor
	);
};

SettingsMenu.prototype.resetResolution = function (ratio) {
	// we need to change our checkboxes/typeboxes
	for (var i = 0; i < this.checkboxes.length; i++) {
		this.checkboxes[i].resetResolution(ratio);
	}
	this.typebox.resetResolution(ratio);
	this.multibox.resetResolution(ratio);
};

global.set('class/SettingsMenu', SettingsMenu);

}());