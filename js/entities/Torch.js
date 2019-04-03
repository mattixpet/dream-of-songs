// Torch, class for the fire of the torches in background 
// (technically just the flames since the torch handles are part of background)
// There is no colliding with us

(function () {

'use strict';

var draw = global.get('draw');
var Entity = global.get('class/Entity');
var util = global.get('util');

// COLORS
const PRIMARY = 'red';
const SECONDARY = 'orange';
const TERTIARY = 'yellow';

// Constants
const FLICKERINTERVAL = 100; // flicker every .. milliseconds

// Represents the flame of the torch.
// posX, posY are top left position
// and flame is no larger than approximately width * height
function Torch(posX, posY) {
	this.name = 'torch'; // remember to set name before calling Entity constructor so it can use the name

	// use Entity constructor with placeholder sprite (we don't have a sprite),
	// then overwrite what we need to/ set what we need to after
	Entity.call(this, {'getWidth':function(){}, 'getHeight':function(){}},
				posX, posY, false);

	// Every FLICKERINTERVAL milliseconds, reset this to 0 and change animation
	this.timeElapsed = 0;

	var data = global.get('torch-data');

	this.animations = data.animations;
	this.currentAnimation = this.animations[0];

	// all curves to draw, set in this._calculateCurves()
	// Depending on our animation, we have a different set of curves
	// Format is:
	//     {'animationType' : [curves], etc.}
	this.bezierCurves = {};
	for (var i = 0; i < this.animations.length; i++) {
		this.bezierCurves[this.animations[i]] = [];
	}

	this._createCurves();
}

Torch.prototype = Object.create(Entity.prototype);

// Populate our bezier curve object with info from torch-data
// Torch-data has all our info, but relative to our x,y
// The 'bezier curve' object has 'sx', 'sy', 'cp1x,y', 'cp2x,y', 'ex,y' and 'color' properties, see data/torch-data.js
// Everything needed to draw the curve.
Torch.prototype._createCurves = function () {
	var data = global.get('torch-data');

	var x = this.x;
	var y = this.y;

	for (var i = 0; i < this.animations.length; i++) {
		var curves = util.deepCopy(data.bezierCurves[this.animations[i]]); // need to copy so other torches can use data
		for (var j = 0; j < curves.length; j++) {
			var c = curves[j];
			c.sx += x;
			c.sy += y;
			c.cp1x += x;
			c.cp1y += y;
			c.cp2x += x;
			c.cp2y += y;
			c.ex += x;
			c.ey += y;
			switch (c.color) {
				case 'primary':
					c.color = PRIMARY;
					break;
				case 'secondary':
					c.color = SECONDARY;
					break;
				case 'tertiary':
					c.color = TERTIARY;
					break;
				default:
					c.color = PRIMARY;
			}
		}
		this.bezierCurves[this.animations[i]] = curves;
	}
};

Torch.prototype.update = function (dt) {
	this.timeElapsed += dt; // dt is in milliseconds
	if (this.timeElapsed > FLICKERINTERVAL) {
		this.timeElapsed = 0;
		this.currentAnimation = this.animations[util.randInt(0, this.animations.length)];
	}
};

Torch.prototype.draw = function () {
	var curves = this.bezierCurves[this.currentAnimation];
	for (var i = 0; i < curves.length; i++) {
		var c = curves[i];
		draw.bezierCurve(global.get('ctx'), c.sx, c.sy, c.cp1x, c.cp1y, c.cp2x, c.cp2y, c.ex, c.ey, c.color);
	}
};

global.set('class/Torch', Torch);

}());
