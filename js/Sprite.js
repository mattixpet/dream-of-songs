// Sprite class

function Sprite(img, srcWidth, srcHeight, displayWidth, displayHeight, positions) {
	this.img = img;
	this.srcW = srcWidth;
	this.srcH = srcHeight;
	this.dispW = displayWidth;
	this.dispH = displayHeight;
	// Positions in src image of sprite animations
	// e.g.     x, y      x,   y  ..
	//       [[23,400], [103, 400], [163, 200]]
	this.positions = positions;
}

Sprite.prototype.draw = function(position, x, y) {
	var ctx = global.get('context');

	var pos = this.positions[position];
	ctx.drawImage(
		this.img,
		pos[0], pos[1], this.srcW, this.srcH,
		x, y, this.dispW, this.dispH
	);
}