// Player class

function Player(posX, posY) {
	this.sprite = global.get('imageHandler').getSprite('player');
	this.x = posX;
	this.y = posY;
}

Player.prototype = new Entity();

Player.prototype.draw = function () {
	this.sprite.draw(0, this.x, this.y)
};

Player.prototype.update = function (delta) {

};
