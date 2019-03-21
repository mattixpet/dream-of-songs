// The map/background

(function () {

'use strict';

// imports
var util = global.get('util');
var draw = global.get('draw');
var consts = global.get('consts');
var collision = global.get('collision');

function Background() {
	this.scenes = {}; // scene = page, stage whatever you want to call it, one background image
	this.currentScene = 'smallcliff'; // starting scene

	// load collision data for each background image
	this.cData = global.get('background_data');

	// blocks entity can stand on
	this.standableBlocks = [consts.REGBLOCK, consts.PLATFORMBLOCK, consts.STAIRTOPBLOCK];

	// depending on our cData, set the granularity of our grid/ widths etc.
	// split map into blocks, depending on the cData array (>0 is collision brick, 0 is not)
	// see this._drawGrid
	var canvas = global.get('canvas');
	this.gridW = this.cData[this.currentScene][0].length;
	this.gridH = this.cData[this.currentScene].length;
	this.blockWidth = canvas.width / this.gridW;
	this.blockHeight = canvas.height / this.gridH;

	if (!Number.isInteger(this.blockWidth) || !Number.isInteger(this.blockHeight)) {
		util.warn('Brick width or height is not integer, setting to floor.');
		this.blockHeight = Math.floor(this.blockHeight);
		this.blockWidth = Math.floor(this.blockWidth);
	}
}

Background.prototype.draw = function () {
	this._drawBg();
	if (consts.drawBackgroundGrid) {
		this._drawGrid();
	}
	if (consts.drawPixelGrid) {
		this._drawPixelGrid(50); // draw 50 by 50 grid
	}
};

// dat name tho
Background.prototype._drawBg = function () {
	var imageHandler = global.get('imageHandler');
	imageHandler.getSprite(this.currentScene).draw(0, 0);
};

Background.prototype._drawGrid = function () {
	// iterate over the cData for the current scene, which is a double array
	// with 0 for no collision, >0 for collision
	// e.g. [
	//			[0,0,0,0,0,0],
	//			[0,0,1,1,1,0],
	//			..
	//		]
	// and draw a different colored box for each place a collision could happen, 
	// depending on type of collision (ground, stairs, teleport, etc.), draw a grid
	// i is x
	// j is y
	var canvas = global.get('canvas');
	var ctx = global.get('ctx');

	var data = this.cData[this.currentScene];
	for (var i = 0; i < this.gridW; i++) {
		for (var j = 0; j < this.gridH; j++) {
			var block = data[j][i];
			if (block !== consts.NOBLOCK) {
				var color = 'red'; // default
				// draw different color grid depending on type of collision block
				if (block === consts.PLATFORMBLOCK) {
					color = 'blue'; // only top collision
				} else if (block === consts.STAIRBLOCK) {
					color = 'yellow'; // stairs
				} else if (block === consts.TELEBLOCK) {
					color = 'green'; // teleport for bottom of feet of entity touching it
				} else if (block === consts.STAIRTOPBLOCK) {
					color = 'orange';
				}
				// collision block, draw it
				var x = Math.floor(i / this.gridW * canvas.width);
				var y = Math.floor(j / this.gridH * canvas.height);
				draw.drawBox(ctx, x, y, this.blockWidth, this.blockHeight, color);
			}
		}
	}
};

// set on or off with 'drawPixelGrid' in consts.
// Draws a size by size pixel grid to see better where pixels are.
Background.prototype._drawPixelGrid = function (size) {
	var canvas = global.get('canvas');
	var ctx = global.get('ctx')
	for (var i = 0; i < canvas.width; i+=size) {
		for (var j = 0; j < canvas.height; j+=size) {
			draw.drawBox(ctx, i, j, size, size, 'blue');
		}
	}
};

// is this rectangle colliding with us (the background!)
// returns object with some info about the collision
// Format:
// {
//		'block' : type of block hit
//		'gridX' : grid coordinate in x direction of hit block
//		'gridY' : grid coordinate in y direction of hit block
// }
// or 
// false if no block hit
Background.prototype.isRectangleCollidingWith = function (rX, rY, rW, rH) {
	// check only parts of the grid which are bounded by the rectangle
	var gridTopLeft = util.pixelToGrid(rX, rY, this.gridW, this.gridH); // pixel to grid sets to boundaries if out of bounds
	var gridBotRight = util.pixelToGrid(rX + rW, rY + rH, this.gridW, this.gridH);
	var data = this.cData[this.currentScene];

	// go from bot right to top left because we assume the most common
	// collision is rectangle with ground
	for (var j = gridBotRight[1]; j >= gridTopLeft[1]; j--) {
		for (var i = gridBotRight[0]; i >= gridTopLeft[0]; i--) {
			var block = data[j][i];
			if (block !== consts.NOBLOCK) {
				// collision
				return {
					'block' : block,
					'gridX' : i,
					'gridY' : j
				};
			}
		}
	}

	return false; // no collision
};

// Check if Entity is touching the ground anywhere (it's feet on something of the background)
// botLeft, botRight are [x,y] coordinates in pixels of the bottom cornerpoints of the entity (rectangle collision)
Background.prototype.isEntityOnGround = function (botLeft, botRight) {
	var gridBotLeft = util.pixelToGrid(botLeft[0], botLeft[1], this.gridW, this.gridH);
	var gridBotRight = util.pixelToGrid(botRight[0], botRight[1], this.gridW, this.gridH);

	// check only the grid tiles under gridBotLeft up until gridBotRight (to see if he's on ground)
	// the y coordinate should be fixed and same for botLeft, botRight (then we add 1 to it to check 'below')
	// if no tile under gridBotLeft..gridBotRight is a 1 in the grid, player is not on ground
	var data = this.cData[this.currentScene];
	for (var i = gridBotLeft[0]; i <= gridBotRight[0]; i++) {
		// "if data[grid..] is in standableBlocks"
		if (this.standableBlocks.indexOf(data[gridBotLeft[1] + 1][i]) >= 0) { // 57
			return true;
		}
	}
	return false;
}

Background.prototype.getGridWidth = function () {
	return this.gridW;
}

Background.prototype.getGridHeight = function () {
	return this.gridH;
}

global.set('class/Background', Background);

}());