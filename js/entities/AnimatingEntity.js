// AnimatingEntity

// Allows for sprite animation
// Updates the 'this.spritePosition' which entities can use to draw the correct sprite position
// Uses the this.distanceTraveledX and this.distanceTraveledY which is updated in this._updatePos()
//   from entity base class.

(function () {

'use strict';

var Entity = global.get('class/Entity');

function AnimatingEntity(sprite, posX, posY, affectedByGravity) {
	Entity.call(this, sprite, posX, posY, affectedByGravity);

	this.animation = undefined; // current animation type, e.g. still, flying, walking, undefined means we do nothing
	this.spritePosition = 0; // current sprite position

	// multiple possible animations depending on state
	this.animations = {};

	this.positionsIndex = 0; // index in animation.positions

	// for sprite animations, keep record of distance traveled
	this.distanceTraveledX = 0;
	this.distanceTraveledY = 0;
}

AnimatingEntity.prototype = Object.create(Entity.prototype);

AnimatingEntity.prototype.update = function (dt) {
	this._updateAnimations(dt);
};

AnimatingEntity.prototype.draw = function () {
	this.sprite.draw(this.x, this.y, this.spritePosition);

	this._drawBoundingBox();
};

// [[name]] is an identifier for this animation, used when activating it in this.setAnimation
// [[positions]] is an array with the possible positions of the sprite
// and in the correct order if [[format]] is 'sequential', e.g. [STANDING, WALKING, WALKING2, STANDING, WALKING3]
// if [[type]] is 'singleSprite' we only draw the sprite positions (single number)
// [[durations]] is an array equally long as [[animations]] to show how long
// (or how far walked/moved) each animation should be. If durations is just 
// a single time value, assume all animations to have equal time/distance.
// Distance animations so far can only use durations as a single number.
// [[format]] is in which order to change the sprites, so far 'sequential'
// is the only option. But other possible options to program are of course 'random'
// [[type]] is 'time' or 'distanceX', 'distanceY' or 'distanceXY' or 'singleSprite'
// where time means every durations milliseconds (dt) we change animation,
// distance means every something distance in X, Y or both (XY) direction, we change animation
// singleSprite means [[positions]] is only a single position of the sprite to always draw
AnimatingEntity.prototype._addAnimation = function (name, positions, durations, format, type) {
	this.animations[name] = {
		'positions' : positions,
		'durations' : durations,
		'format' : format,
		'type' : type,
		'timeElapsed' : 0
	};
};

// Do all the animation work, when to switch to another sprite position
// Our child classes must call this during update sometime
AnimatingEntity.prototype._updateAnimations = function (dt) {
	if (this.animation) {
		var animation = this.animations[this.animation];
		if (animation.type !== 'singleSprite') {
			if (animation.type === 'time') {
				this._handleTimeAnimation(animation, dt);
			} else {
				this._handleDistanceAnimation(animation); // don't need dt because of distanceTraveled set in _updatePos
			}	
		}
	}
};

AnimatingEntity.prototype._handleTimeAnimation = function (animation, dt) {
	animation.timeElapsed += dt; // dt is 'milliseconds'

	if (typeof(animation.durations) === 'object') {
		// durations is an array of durations corresponding to each animation in animation.animations
		if (animation.timeElapsed > animation.durations[this.positionsIndex]) {
			animation.timeElapsed = 0;
			this._setNextSequentialAnimation(animation);
		}
	} else if (typeof(animation.durations) === 'number') {
		// durations is a single number, how long to keep each animation
		if (animation.timeElapsed > animation.durations) {
			animation.timeElapsed = 0;
			this._setNextSequentialAnimation(animation);
		}
	}
};

AnimatingEntity.prototype._handleDistanceAnimation = function (animation) {
	var distanceMetric;
	switch (animation.type) {
		case 'distanceX' :
			distanceMetric = this.distanceTraveledX;
			break;
		case 'distanceY' :
			distanceMetric = this.distanceTraveledY;
			break;
		case 'distanceXY' :
			distanceMetric = this.distanceTraveledX + this.distanceTraveledY;
			break;
	}

	if (distanceMetric > animation.durations) {
		this.distanceTraveledX = 0;
		this.distanceTraveledY = 0;
		this._setNextSequentialAnimation(animation);
	}
};

AnimatingEntity.prototype._setNextSequentialAnimation = function (animation) {
	this.positionsIndex = (this.positionsIndex + 1) % animation.positions.length;
	this.spritePosition = animation.positions[this.positionsIndex];
};

// Set animation [[name]] as the current active animation
// undefined means we are not in animation, we do nothing in that case
AnimatingEntity.prototype._setAnimation = function (name) {
	if (this.animation !== name) {
		this.animation = name;
		
		// reset since we're changing animation
		if (name) {
			var animation = this.animations[name];
			if (animation.type !== 'singleSprite') {
				this.positionsIndex = 0;
				this.spritePosition = animation.positions[this.positionsIndex];
				animation.timeElapsed = 0;
				this.distanceTraveledX = 0;
				this.distanceTraveledY = 0;
			} else {
				this.spritePosition = animation.positions;
			}
		}
	}
};

AnimatingEntity.prototype._updatePos = function (nextX, nextY) {
	this.distanceTraveledX += Math.abs(nextX - this.x);
	this.distanceTraveledY += Math.abs(nextY - this.y);

	Entity.prototype._updatePos.call(this, nextX, nextY);
};

global.set('class/AnimatingEntity', AnimatingEntity);

}());