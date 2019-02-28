// Player class

(function () {

'use strict';

// imports
var consts = global.get('consts');
var Entity = global.get('class/Entity');

function Player(posX, posY) {
	this.sprite = global.get('imageHandler').getSprite('player');
	this.x = posX;
	this.y = posY;
	this.speed = 0.4;
}

Player.prototype = new Entity();

Player.prototype.draw = function () {
	this.sprite.draw(0, this.x, this.y);
};

Player.prototype.update = function (dt) {
	var keys = global.get('keys');

	if (keys[consts.KEY_RIGHT] || keys[consts.KEY_D]) {
		this.x += this.speed * dt;
	} 
	if (keys[consts.KEY_LEFT] || keys[consts.KEY_A]) {
		this.x -= this.speed * dt;
	}
};

global.set('class/Player', Player); // export

}());
