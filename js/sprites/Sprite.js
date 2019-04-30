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

// Opacity and position are optional arguments
Sprite.prototype.draw = function(x, y, position, opacity) {
	var ctx = global.get('ctx');
	ctx.save();
	if (opacity) {
		ctx.globalAlpha = opacity;
	}

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

	ctx.restore();
};

Sprite.prototype.drawMirrored = function(x, y, position, opacity) {
	var ctx = global.get('ctx');
	ctx.save();
	ctx.translate(x + this.dispW, y);
	ctx.scale(-1,1);
	this.draw(0, 0, position, opacity);
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

Sprite.prototype.resetResolution = function (ratio) {
	this.dispW = Math.round(this.dispW * ratio);
	this.dispH = Math.round(this.dispH * ratio);
};

global.set('class/Sprite', Sprite);

}());
