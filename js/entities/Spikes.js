// Spikes, kill player

(function () {

'use strict';

var Entity = global.get('class/Entity');

function Spikes(posX, posY, width, height, scene) {
	this.name = 'spikes';

	// use Entity constructor with placeholder sprite (we don't have a sprite),
	// then overwrite what we need to/ set what we need to after
	Entity.call(this, {'getWidth':function(){}, 'getHeight':function(){}, 'draw':function(){}},
				posX, posY, false);
	this.width = width;
	this.height = height;
	this.scene = scene;// which scene do we reside in?

	// how many times has player died on us hehe
	this.numDeaths = 0;
	// true iff player is colliding with us
	this.onSpikes = false;
}

Spikes.prototype = Object.create(Entity.prototype);

Spikes.prototype.update = function (dt) {
	/* jshint unused:false */

	// check collision with player (or anything, but counter only works for one entity)
	var collision = global.get('collisionManager').isColliding(this, this.x, this.y);
	if (collision && collision.entityCollision) { // not that we should ever be colliding with background
		var entity = collision.entityCollision;

		this._increaseNumDeaths();
		this.onSpikes = true;
		// whatever hits us, we 'kill' it, spawn it back and place notification
		this._notifyDeath();
		// spawn it again, the timeout is a bit of a hacky solution
		// so we don't show the player spawned before user clicks continue
		// the timeout interval just has to be greater than the interval
		// in NotificationMenu.js, because that adds a delay to stop to redraw the song.
		var spike_entity = this;
		setTimeout(function(){
			spike_entity._spawnEntityAgain(entity);
			spike_entity.onSpikes = false;
		}, 60);
	}
};

// Do not increase the num deaths if player is on spikes, only do that once
// the onSpikes boolean is reset after player is spawned on a new place.
Spikes.prototype._increaseNumDeaths = function () {
	if (!this.onSpikes) {
		this.numDeaths++;
	}
};

// Places notification with notificationMenu of death (just display)
Spikes.prototype._notifyDeath = function () {
	var deadManyTimesMessage;
	switch (this.numDeaths) {
		case 1:
			deadManyTimesMessage = '!';
			break;
		case 2:
			deadManyTimesMessage = ' again!';
			break;
		case 3:
			deadManyTimesMessage = '! (now for the third time..)';
			break;
		case 4:
			deadManyTimesMessage = ' yet again! (this is getting awkward..)';
			break;
		default:
			// find what to place after the number
			var numDescriptor = ''; // st, nd, rd, th (1st, 2nd, 3rd, 4th)
			var deathS = this.numDeaths.toString();
			switch (deathS[deathS.length-1]) {
				case '1':
					numDescriptor = 'st';
					break;
				case '2':
					numDescriptor = 'nd';
					break;
				case '3':
					numDescriptor = 'rd';
					break;
				default:
					numDescriptor = 'th';
					break;
			}
			// special case for (..)11-19 always ends in th
			if (deathS.length >= 2 && deathS[deathS.length-2] === '1') {
				numDescriptor = 'th';
			}

			// now make the appropriate message
			deadManyTimesMessage = ' again! (for the '+this.numDeaths+numDescriptor+' time)';
			if (this.numDeaths >= 25) {
				deadManyTimesMessage = 	' yet again! (now '+this.numDeaths+
									   	' times?? damn you must really want that chest)';
			}
			if (this.numDeaths >= 80) {
				deadManyTimesMessage = ' for the millionth time? (I\'m quite impressed with your ambition)';
			}
			if (this.numDeaths >= 100) {
				deadManyTimesMessage = 	' for the '+this.numDeaths+numDescriptor+' time?!'+
										' (I wish you the best of luck with that chest, it should be worth it)';
			}
			break;
	}
	global.get('notificationMenu').notify('dead-to-spikes', deadManyTimesMessage);
	global.get('notificationMenu').display();
};

Spikes.prototype._spawnEntityAgain = function (entity) {
	var data = global.get('spike-data')[this.scene];
	entity.setX(data.respawnX);
	entity.setY(data.respawnY);
};

global.set('class/Spikes', Spikes);

}());
