// Sprite class

(function () {

'use strict';

function Sprite(img, displayWidth, displayHeight, srcWidth, srcHeight, positions) {
	this.img = img;
	this.dispW = displayWidth;
	this.dispH = displayHeight;
	// optional, for spritesheets, if undefined, then just sprite is entire image
	this.srcW = srcWidth;
	this.srcH = srcHeight;
	// Positions top left in src image of sprite animations
	// e.g. [{x:23,y:400}, {x:103,y:400}, {x:163,y:200}]
	this.positions = positions;
}

Sprite.prototype.draw = function(x, y, position) {
	var ctx = global.get('ctx');

	if (this.positions) {
		var pos = this.positions[position];
		ctx.drawImage(
			this.img,
			pos.x, pos.y, this.srcW, this.srcH,
			x, y, this.dispW, this.dispH
		);
	} else {
		ctx.drawImage(
			this.img,
			x, y, this.dispW, this.dispH
		);
	}
};

Sprite.prototype.drawMirrored = function(x, y, position) {
	var ctx = global.get('ctx');
	ctx.save();
	ctx.translate(x + this.dispW, y);
	ctx.scale(-1,1);
	this.draw(0, 0, position);
	ctx.restore();
};

Sprite.prototype.getWidth = function() {
	return this.dispW;
};

Sprite.prototype.getHeight = function() {
	return this.dispH;
};

Sprite.prototype.getNumPositions = function () {
	return this.positions.length;
};

global.set('class/Sprite', Sprite);

}());
