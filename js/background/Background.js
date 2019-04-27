// The map/background

(function () {

'use strict';

// imports
var config = global.get('config');
var util = global.get('util');
var draw = global.get('draw');
var consts = global.get('consts');
var collision = global.get('collision');

// local consts
const WINNINGCOMBINATION = ['right', 'right', 'left', 'left', 'right'];

function Background() {
	this.scenes = {}; // scene = page, stage whatever you want to call it, one background image
	this.currentScene = config.STARTINGSCENE;
	this.currentSceneTemplate = undefined; // this is set as e.g. 'sky' when scene is 'sky0' (reusable backgrounds)

	// load collision data for each background image
	this.cData = global.get('background-data');

	// blocks entity can stand on
	this.standableBlocks = [consts.REGBLOCK, consts.PLATFORMBLOCK, consts.STAIRTOPBLOCK, consts.WATERTOPBLOCK];

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

	this.heavenNotification = false; // display notification on player entering skyvault or topskyvault

	// Object with the entities (well only player really..) which
	// have gone the correct directions in underwater{00,01} scenes
	// ending in the youwin screen !
	// Winning combination: right, right, left, left, right
	// Format, anywhere from an empty array to this:
	// {
	//		'entityName' : ['right', 'right', 'left', 'left, 'right']
	// }
	// if it's like this ^ then entity has gotten to the youwin screen !
	this.youWinTrail = {};
}

Background.prototype.draw = function () {
	this._drawBg();
	if (config.drawBackgroundGrid) {
		this._drawGrid();
	}
	if (config.drawPixelGrid) {
		this._drawPixelGrid(50); // draw 50 by 50 grid
	}
};

// dat name tho
Background.prototype._drawBg = function () {
	var imageHandler = global.get('imageHandler');
	imageHandler.getSprite(this.currentSceneTemplate ? this.currentSceneTemplate : this.currentScene).draw(0, 0);
};

Background.prototype._drawGrid = function () {
	// iterate over the cData for the current scene, which is an array of strings
	// with 0 for no collision, >0 for collision
	// e.g. [
	//			'000000',
	//			'001110',
	//			..
	//		]
	// and draw a different colored box for each place a collision could happen, 
	// depending on type of collision (ground, stairs, teleport, etc.), draw a grid
	// i is x
	// j is y
	var canvas = global.get('canvas');
	var data = this.cData[this.currentSceneTemplate ? this.currentSceneTemplate : this.currentScene];
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
				} else if (block === consts.SECONDARYTELEBLOCK) {
					color = '#00ff00';
				} else if (block === consts.TERTIARYTELEBLOCK) {
					color = 'teal';
				} else if (block === consts.WATERBLOCK) {
					color = 'black';
				} else if (block === consts.WATERTOPBLOCK) {
					color = '#888888';
				}
				// collision block, draw it
				var x = Math.floor(i / this.gridW * canvas.width);
				var y = Math.floor(j / this.gridH * canvas.height);
				draw.drawBox(x, y, this.blockWidth, this.blockHeight, color);
			}
		}
	}
};

// set on or off with 'drawPixelGrid' in config.
// Draws a size by size pixel grid to see better where pixels are.
Background.prototype._drawPixelGrid = function (size) {
	var canvas = global.get('canvas');
	for (var i = 0; i < canvas.width; i+=size) {
		for (var j = 0; j < canvas.height; j+=size) {
			draw.drawBox(i, j, size, size, 'blue');
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
	var data = this.cData[this.currentSceneTemplate ? this.currentSceneTemplate : this.currentScene];

	// go from bot right to top left because we assume the most common
	// collision is rectangle with ground
	for (var j = gridBotRight.gridY; j >= gridTopLeft.gridY; j--) {
		for (var i = gridBotRight.gridX; i >= gridTopLeft.gridX; i--) {
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
// botLeft, botRight are {'x':x,'y':y} coordinates in pixels of the bottom cornerpoints of the entity (rectangle collision)
Background.prototype.isEntityOnGround = function (botLeft, botRight) {
	var gridBotLeft = util.pixelToGrid(botLeft.x, botLeft.y, this.gridW, this.gridH);
	var gridBotRight = util.pixelToGrid(botRight.x, botRight.y, this.gridW, this.gridH);

	// check only the grid tiles under gridBotLeft up until gridBotRight (to see if he's on ground)
	// the y coordinate should be fixed and same for botLeft, botRight (then we add 1 to it to check 'below')
	// if no tile under gridBotLeft..gridBotRight is a 1 in the grid, player is not on ground
	var data = this.cData[this.currentSceneTemplate ? this.currentSceneTemplate : this.currentScene];
	for (var i = gridBotLeft.gridX; i <= gridBotRight.gridX; i++) {
		// check for out of bounds of our +1 check for block below
		if (gridBotLeft.gridY + 1 < data.length) {
			// "if data[grid..] is in standableBlocks"
			var block = data[gridBotLeft.gridY + 1][i];
			if (this.standableBlocks.indexOf(block) >= 0) {
				return block;
			}
		} else {
			break;
		}
	}
	return false;
};

// request scene, moving 'left', 'up', 'right', 'down' or 'special' (teleport)
// change entities coordinates depending on what it is
// return true if change scene is valid/successful
// return false if not !
Background.prototype.requestNextScene = function (entity, direction) {
	var nextScene = this.cData['Connections'][this.currentScene][direction];
	if (nextScene) {
		// check if we are in one of the multi-use scenes (end with 00-99)
		// e.g. sky00 means we use scene sky
		// then we set the template for collision and drawing use
		var scene = nextScene.scene;
		if (Number.isInteger(Number.parseInt(scene.substring(scene.length-2)))) {
			this.currentSceneTemplate = scene.slice(0,scene.length-2);
		} else {
			this.currentSceneTemplate = undefined;
		}

		// if all the correct directions, scene will be 'youwin'
		scene = this._processYouWinTrail(entity.getName(), scene, direction);

		// update scene
		this.currentScene = scene;

		// let player know he is in heaven ! (only once though)
		if (!this.heavenNotification && (scene === 'skyvault00' || scene === 'topskyvault00')) {
			global.get('notificationMenu').notify('welcome-to-heaven');
			global.get('notificationMenu').display();
			this.heavenNotification = true;
		}

		// let's not just change scene, let's also notify entityManager so he can
		// spawn/take care of entities on that scene and move entity between scenes
		global.get('entityManager').notifySceneChange(scene, entity);

		var coords = nextScene.coords;
		var canvas = global.get('canvas');
		if (coords === 'flip') {
			switch (direction) {
				case 'left':
					entity.setX(entity.getX() + canvas.width);
					break;
				case 'up':
					entity.setY(entity.getY() + canvas.height);
					break;
				case 'right':
					entity.setX(entity.getX() - canvas.width);
					break;
				case 'down':
					entity.setY(entity.getY() - canvas.height);
					break;
				default:
					util.warn('Invalid direction: ' + direction + ' for background: ' + this.currentScene);
					return false;
			}
		} else if (coords === 'nochange') {
			// do nothing to entities coordinates
		} else {
			entity.setX(coords.x);
			entity.setY(coords.y);
		}

		return true;
	}

	return false;
};

Background.prototype._processYouWinTrail = function (entityName, scene, direction) {
	// first make sure the previous scene was the underwater scene
	var prevScene = this.currentScene;
	if (!(prevScene === 'underwater00' || prevScene === 'underwater01')) {
		return scene;
	}

	if (!this.youWinTrail[entityName]) {
		this.youWinTrail[entityName] = [];
	}
	var entityTrail = this.youWinTrail[entityName];
	entityTrail.push(direction);
	if (util.arrayEquals(entityTrail, WINNINGCOMBINATION.slice(0, entityTrail.length))) {
		if (entityTrail.length === WINNINGCOMBINATION.length) {
			util.log('CONGRATULATIONS! Top of the morning to ya.');
			this.youWinTrail[entityName] = []; // reset so he can go again
			// set the correct nextScene in youwin (to go back to underwater00 if that's
			// where we were or underwater01 otherwise)
			var youWinScene = this.cData['Connections'].youwin;
			youWinScene.left.scene = 
				youWinScene.up.scene = 
				youWinScene.right.scene = 
				youWinScene.down.scene = prevScene;
			return 'youwin';
		}
	} else {
		// reset on a wrong direction
		this.youWinTrail[entityName] = [];
	}
	return scene;
};

Background.prototype.getGridWidth = function () {
	return this.gridW;
};

Background.prototype.getGridHeight = function () {
	return this.gridH;
};

// returns an array with the blocks you can stand on (consts.REGBLOCK, consts.PLATFORMBLOCK, etc.)
Background.prototype.getStandableBlocks = function () {
	return this.standableBlocks.slice();
};

Background.prototype.getCurrentScene = function () {
	return this.currentScene;
};

global.set('class/Background', Background);

}());