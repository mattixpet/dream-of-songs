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
}

Spikes.prototype = Object.create(Entity.prototype);

Spikes.prototype.update = function (dt) {
	// check collision with player (or anything, but counter only works for one entity)
	var collision = global.get('collisionManager').isColliding(this, this.x, this.y);
	if (collision && collision.entityCollision) { // not that we should ever be colliding with background
		var entity = collision.entityCollision;

		this.numDeaths++;
		// whatever hits us, we 'kill' it, spawn it back and place notification
		this._notifyDeath();
		// spawn it again
		this._spawnEntityAgain(entity);
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
			if (this.numDeaths >= 30) {
				deadManyTimesMessage = 	' yet again! (now '+this.numDeaths+
									   	' times?? damn you must really want that chest)';
			}
			if (this.numDeaths >= 133) {
				deadManyTimesMessage = ' for the millionth time? (I\'m quite impressed with your ambition)';
			}
			if (this.numDeaths >= 166) {
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
