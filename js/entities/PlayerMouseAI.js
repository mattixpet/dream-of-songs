// 'AI' to move the player when mouse controls are enabled

// Basic AI at the moment: 
// 
//   If player is at EDGEMARGIN pixels from ANY edge (left, up, right or down)
//   try to move him over that edge over to the next screen
//
//   Clicking on the player will initiate a straight jump up
//
//   Clicking in line with players feet +- FEETMARGIN (90 pixels?) will 
//   initiate a moveRight or a moveLeft
//
//   Clicking below player will initiate a moveRight, moveLeft
//
//   Clicking above the feet margin of player will initiate a jump in that direction
//
//   Once the x coordinates of the clicked point are achieved, stop moving in x direction
//   (this should make it possible to jump far or short)
//
//   Just move to the objective point x, y with center of player (let's not go crazy with A* or anything here
//   player will just have to click a few times to go past obstacles)
//
//   After an objective point is reached initiate a stop move action so player will stop.
//
//   If we can't reach the objective point, initiate stop action after CANCELTIME seconds
//
//   If we collide, well then player will stop anyway I guess.

// imports
var config = global.get('config');
var util = global.get('util');
var collision = global.get('collision');

// local variables
// how close to the edge (OH BABY) do we have to be do get pulled in to the next scene
const EDGEMARGIN = global.get('sprite-data').player['EDGEMARGIN'];
// above how many pixels above our feet should we count as a jump?
const FEETMARGIN = global.get('sprite-data').player['FEETMARGIN'];
// how long after a command has been issued should we issue stop? (if we don't reach destination)
const CANCELTIME = global.get('sprite-data').player['CANCELTIME'];
// how close to destination/objective pixel location do we have to be?
const DESTMARGIN = global.get('sprite-data').player['DESTMARGIN'];
// how long after scene change do we tell player to stop?
const SCENECHANGESTOPTIME = global.get('sprite-data').player['SCENECHANGESTOPTIME'];

(function () {

'use strict';

function PlayerMouseAI(player) {
	this.player = player;

	this.canvasWidth = global.get('canvas').width;
	this.canvasHeight = global.get('canvas').height;

	this.currentTimeoutId = undefined;

	// where is player trying to move to?
	this.objectiveX = undefined;
	this.objectiveY = undefined;
}

// Let's attempt to move dat player !
PlayerMouseAI.prototype.notifyClick = function (x, y) {
	// Cancel previous cancel command (cancelception)
	clearTimeout(this.currentTimeoutId);
	// Stop player after CANCELTIME milliseconds
	this.currentTimeoutId = setTimeout(function () {
		global.get('player').moveStop();
	}, CANCELTIME);

	// Only handle one movement command at a time (the most recent one)
	this.player.moveStop();

	this._handleMovement(x, y);
};

// Called by Player (or technically MovingEntity class)
// on a scene change.
// On a scene change let's stop our movement since we were drawn into it
PlayerMouseAI.prototype.notifySceneChange = function () {
	// clear our objectives
	this.objectiveX = undefined;
	this.objectiveY = undefined;
	setTimeout(function(){
		global.get('player').moveStop();
	}, SCENECHANGESTOPTIME);
};

// MovingEntity (player) let's us know he has moved positions
// so we know of that
// If we have reached our objective, we stop
PlayerMouseAI.prototype.notifyPositionChange = function (oldX, oldY, newX, newY) {
	// first lets check if we are at an edge if we are moving in the edges direction
	if (this._checkForEdge(oldX, newX, oldY, newY)) {
		return;
	}

	// second let's check if we are at our objective
	var p = this.player;
	var cX = p.getX() + Math.floor(p.getWidth() / 2);
	var cY = p.getY() + Math.floor(p.getHeight() / 2);
	var atObjectiveX = util.almostEqual(cX, this.objectiveX, DESTMARGIN);
	var atObjectiveY = util.almostEqual(cY, this.objectiveY, DESTMARGIN);

	if (atObjectiveX) {
		// stop left/right
		this.player.moveLeft(true);
		this.player.moveRight(true);
	}
	if (atObjectiveY) {
		// stop up/down
		this.player.moveUp(true);
		this.player.moveDown(true);
	}
};

PlayerMouseAI.prototype._handleMovement = function (x, y) {
	var p = this.player;
	var cX = p.getX() + Math.floor(p.getWidth() / 2);	
	if (x <= cX - DESTMARGIN) {
		this.player.moveLeft();
	} else if (x > cX + DESTMARGIN) {
		this.player.moveRight();
	}

	var topY = p.getY();
	var botY = topY + p.getHeight();
	if (y <= topY) {
		this.player.moveUp();
	} else if (y > botY) {
		this.player.moveDown();
	}

	if (!config.snakeMode && (y <= botY - FEETMARGIN ||
		// jump on clicking on player
		collision.pixelWithinRect(x, y, p.getX(), p.getY(), p.getWidth(), p.getHeight()))) {
		this.player.moveJump();
	}

	this.objectiveX = x;
	this.objectiveY = y;
};

// Check if newX, centerY (newY + height /2) is within EDGEMARGIN of edges of scene
// and that we are moving in the direction of the edge
// If only oldX, newX is supplied only check left right edge
// if X, Y is supplied check all edges
// If an edge is detected, pull player toward that edge (issue appropriate 
// move command to draw him to next scene in that direction)
PlayerMouseAI.prototype._checkForEdge = function (oldX, newX, oldY, newY) {
	if (newX <= EDGEMARGIN && newX < oldX) {
		this.player.moveLeft();
		return true;
	} else if (newX + this.player.getWidth() >= this.canvasWidth - EDGEMARGIN && newX > oldX) {
		this.player.moveRight();
		return true;
	} else if (newY && newY + Math.floor(this.player.getHeight() / 2) <= EDGEMARGIN && newY < oldY) {
		this.player.moveUp();
		return true;
	} else if (newY && newY + Math.floor(this.player.getHeight() / 2) >= this.canvasHeight - EDGEMARGIN && newY > oldY) {
		this.player.moveDown();
		return true;
	}
	return false;
};

global.set('class/PlayerMouseAI', PlayerMouseAI);

}());
