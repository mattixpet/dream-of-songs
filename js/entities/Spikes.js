// Spikes, kill player

(function () {

'use strict';

var Entity = global.get('class/Entity');

// Constants
const ANIMATIONTIME = 100; // animate every .. milliseconds

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
		// whatever hits us, we 'kill' it, spawn it back and place notification
		this._notifyDeath();
		// spawn it again
		this._spawnEntityAgain(entity);

		this.numDeaths++;
	}
};

Spikes.prototype._notifyDeath = function () {
	var deadManyTimesMessage;
	switch (this.numDeaths) {
		case 0:
			deadManyTimesMessage = '!';
			break;
		case 1:
			deadManyTimesMessage = ' again!';
			break;
		case 2:
			deadManyTimesMessage = '! (now for the third time..)';
			break;
		case 3:
			deadManyTimesMessage = ' yet again! (this is getting awkward..)';
			break;
		case 29:
			deadManyTimesMessage = ' yet again! (now 30 times?? damn you must really want that chest)';
			break;
		case 132:
			deadManyTimesMessage = ' for the millionth time? (I\'m quite impressed with your ambition)';
			break;
		default:
			deadManyTimesMessage = ' again! (for the '+(this.numDeaths+1)+'th time)';
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
