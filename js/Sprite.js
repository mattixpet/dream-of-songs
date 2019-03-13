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
	// Positions in src image of sprite animations
	// e.g.     x, y      x,   y  ..
	//       [[23,400], [103, 400], [163, 200]]
	this.positions = positions;
}

Sprite.prototype.draw = function(x, y, position) {
	var ctx = global.get('ctx');

	if (this.positions) {
		var pos = this.positions[position];
		ctx.drawImage(
			this.img,
			pos[0], pos[1], this.srcW, this.srcH,
			x, y, this.dispW, this.dispH
		);
	} else {
		ctx.drawImage(
			this.img,
			x, y, this.dispW, this.dispH
		);
	}
}

Sprite.prototype.getWidth = function() {
	return this.dispW;
}

Sprite.prototype.getHeight = function() {
	return this.dispH;
}

global.set('class/Sprite', Sprite);

}());
