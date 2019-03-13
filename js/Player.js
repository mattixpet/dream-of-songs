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
	this.speed = 0.2;
	this.width = this.sprite.getWidth();
	this.height = this.sprite.getHeight();
}

Player.prototype = new Entity();

Player.prototype.draw = function () {
	this.sprite.draw(this.x, this.y, 0);
};

Player.prototype.update = function (dt) {
	var keys = global.get('keys');

	if (keys[consts.KEY_RIGHT] || keys[consts.KEY_D]) {
		var nextX = this.x + Math.floor(this.speed * dt);
		if (!this.isColliding(nextX, this.y)) {
			this.x = nextX;
		}
	} 
	if (keys[consts.KEY_LEFT] || keys[consts.KEY_A]) {
		var nextX = this.x - Math.floor(this.speed * dt);
		if (!this.isColliding(nextX, this.y)) {
			this.x = nextX;
		}
	}
};

global.set('class/Player', Player); // export

}());
