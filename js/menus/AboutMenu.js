// AboutMenu

(function () {

'use strict';

// imports
var Menu = global.get('class/Menu');

function AboutMenu () {
	this.name = 'aboutMenu';

	// call Menu constructor (it uses the .name property, so we must set it before calling)
	Menu.call(this);

	this.buttonActions['back'] = this._handleBack;
}

AboutMenu.prototype = Object.create(Menu.prototype);

AboutMenu.prototype._handleBack = function () {
	global.get(this.previousMenu).display();
};

AboutMenu.prototype.onEnter = function () {
	this._handleBack();
};

global.set('class/AboutMenu', AboutMenu);

}());