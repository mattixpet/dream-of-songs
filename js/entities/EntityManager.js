// Entity manager keeps tabs on all objects in game

(function () {

'use strict';

var config = global.get('config');
var Chest = global.get('class/Chest');
var Torch = global.get('class/Torch');
var Water = global.get('class/Water');
var Spikes = global.get('class/Spikes');
var Raven = global.get('class/Raven');

function EntityManager () {
	// maintain all entities in game in this object
	// format:
	// entities = {
	//		'sceneName' : {'id' : entity, 'id2' : entity, ..},
	// 		'anotherScene' : {'id' : .., ..
	//}
	// and then we move player from scene to scene, see this._movePlayerToScene()
	this.entities = {};
	this.currentScene = config.STARTINGSCENE;
	this.scenesVisited = {}; // Keep a record of scenes we've visited for the first time (or again)
							 // format: {'sceneName' : true, ..}

	this._lastId = -1;

	this.notifySceneChange(config.STARTINGSCENE); // initial spawns
}

EntityManager.prototype.register = function (entity, scene) {
	if (!scene) {
		util.warn('Scene, ' + scene + ', supplied not part of entities. Not registering.');
		return -1;
	}
	this.entities[scene][++this._lastId] = entity;
	entity.setId(this._lastId);
	return this._lastId;
};

// Background calls us here when he changes scene
// [[entity]] is an optional argument of the entity which is moving
// between screens so we can respawn them on the next one
EntityManager.prototype.notifySceneChange = function (scene, entity) {
	var oldScene = this.currentScene;
	var newScene = scene;
	if (!this.entities.hasOwnProperty(scene)) {
		// first time on this scene
		this.entities[newScene] = {};
	}

	// spawn all entities on this scene and move player to this scene
	this._moveEntityToScene(oldScene, newScene, entity);
	this._spawnEntitiesOnScene(newScene);
	this.currentScene = newScene;

	this.scenesVisited[scene] = true;
};

EntityManager.prototype._spawnEntitiesOnScene = function (scene) {
	this._spawnChests(scene);
	this._spawnTorches(scene);
	this._spawnWater(scene);
	this._spawnSpikes(scene);
	this._spawnRavens(scene);
};

EntityManager.prototype._spawnChests = function (scene) {
	var data = global.get('chest-data');
	if (data.hasOwnProperty(scene)) {
		var chests = data[scene];
		for (var i = 0; i < chests.length; i++) {
			if (!this.scenesVisited[scene]) {
				// first time here
				var chest = new Chest(
					chests[i].x, chests[i].y, 
					chests[i].flipped, 
					chests[i].hidden,
					chests[i].message // optional
				);
				this.register(chest, scene);
			} else {
				// we've been here before, still let's reset chests to their starting coordinates
				for (var key in this.entities[scene]) {
					var ent = this.entities[scene][key];
					if (ent.getName() === 'chest') {
						ent.resetToStartingPosition();
					}
				}
			}
		}
	}
	// else no chests on scene
};

EntityManager.prototype._spawnTorches = function (scene) {
	var data = global.get('torch-data')['spawns'];
	if (data.hasOwnProperty(scene)) {
		var torches = data[scene];
		for (var i = 0; i < torches.length; i++) {
			if (!this.scenesVisited[scene]) {
				// first time here
				var torch = new Torch(torches[i].x, torches[i].y);
				this.register(torch, scene);
			}
		}
	}
};

// Spawn all water animations (currently only in stalagmites)
EntityManager.prototype._spawnWater = function (scene) {
	var data = global.get('water-data');
	if (data.hasOwnProperty(scene)) {
		var water = data[scene];
		if (!this.scenesVisited[scene]) {
			// first time in scene, always only one water in scene
			this.register(
				new Water(
					global.get('imageHandler').getSprite(scene + '-water'),
					water.x,
					water.y
				),
				scene
			);
		}
	}
};

EntityManager.prototype._spawnSpikes = function (scene) {
	var data = global.get('spike-data');
	if (data.hasOwnProperty(scene)) {
		var spike = data[scene];
		if (!this.scenesVisited[scene]) {
			// first time in scene, always only one spike in scene
			this.register(
				new Spikes(
					spike.x,
					spike.y,
					spike.width,
					spike.height,
					scene
				),
				scene
			);
		}
	}
};

// Spawn that one raven on the cross in hilltop..
EntityManager.prototype._spawnRavens = function (scene) {
	var data = global.get('raven-data');
	if (data.hasOwnProperty(scene)) {
		var raven = data[scene];
		if (!this.scenesVisited[scene]) {
			this.register(
				new Raven(
					raven.x,
					raven.y
				),
				scene
			);
		}
	}
};

// YA
EntityManager.prototype._moveEntityToScene = function (lastScene, newScene, entity) {
	if (lastScene === newScene || !entity) {
		return; // initial call
	}
	// delete entity from lastScene
	this._delete(entity.getId(), lastScene);
	// move the entity to newScene
	this.entities[newScene][entity.getId()] = entity;
};

EntityManager.prototype.getEntities = function () {
	return this.entities[this.currentScene];
};

EntityManager.prototype._delete = function (id, scene) {
	delete this.entities[scene][id];
};

EntityManager.prototype.destroy = function (id) {
	// things should only die on the current scene we are on
	this._delete(id, this.currentScene);
};

global.set('class/EntityManager', EntityManager);

}());
