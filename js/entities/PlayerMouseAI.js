// 'AI' to move the player when mouse controls are enabled

// Basic AI at the moment: 
// 
// Normal mode:
//   If player is at EDGEMARGIN pixels from left or right edge
//   we will try to move him to the next scene (by initiating moveLeft, moveRight)
//
//   Clicking on the player or FEETMARGIN below him will initiate a straight jump
//
//   Clicking in line with players feet +- FEETMARGIN (30 pixels?) will 
//   initiate a moveRight or a moveLeft
//
//   Clicking below player will initiate a moveRight, moveLeft
//
//   Clicking above the feet margin of player will initiate a jump in that direction
//
//   Once the x coordinates of the clicked point are achieved, stop moving in x direction
//   (this should make it possible to jump far or short)
//
// In flying mode:
//   Just move to the objective point x, y with center of player (let's not go crazy with A* or anything here
//   player will just have to click a few times to go past obstacles)
//		
//   If player is at EDGEMARGIN pixels from ANY edge (left, up, right or down)
//   try to move him over that edge over to the next screen
//
// Any mode:
//   After an objective point is reached (x coord in normal mode, x and y coord in flying)
//   initiate a stop move action so player will stop.
//
//   If we can't reach the objective point, initiate stop action after CANCELTIME seconds
//
//   If we collide, well then player will stop anyway I guess.


(function () {

'use strict';

function PlayerMouseAI(player) {
	this.player = player;
}

PlayerMouseAI.prototype.notifyClick = function (x, y) {

};

global.set('class/PlayerMouseAI', PlayerMouseAI);

}());
