// Entity manager keeps tabs on all objects in game

(function () {

'use strict';

var config = global.get('config');
var Chest = global.get('class/Chest');
var Torch = global.get('class/Torch');
var Water = global.get('class/Water');

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
EntityManager.prototype.notifySceneChange = function (scene) {
	var oldScene = this.currentScene;
	var newScene = scene;
	if (!this.entities.hasOwnProperty(scene)) {
		// first time on this scene
		this.entities[newScene] = {};
	}

	// spawn all entities on this scene and move player to this scene
	this._movePlayerToScene(oldScene, newScene);
	this._spawnEntitiesOnScene(newScene);
	this.currentScene = newScene;

	this.scenesVisited[scene] = true;
};

EntityManager.prototype._spawnEntitiesOnScene = function (scene) {
	// Spawn all chests we need to spawn
	var data = global.get('chest-data');
	if (data.hasOwnProperty(scene)) {
		var chests = data[scene];
		for (var i = 0; i < chests.length; i++) {
			if (!this.scenesVisited[scene]) {
				// first time here
				var chest = new Chest(chests[i][0], chests[i][1], chests[i][2], chests[i][3]);
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

	// Spawn all torches if any
	data = global.get('torch-data')['spawns'];
	if (data.hasOwnProperty(scene)) {
		var torches = data[scene];
		for (var i = 0; i < torches.length; i++) {
			if (!this.scenesVisited[scene]) {
				// first time here
				var torch = new Torch(torches[i][0], torches[i][1]);
				this.register(torch, scene);
			}
		}
	}

	// Spawn all water animations (currently only in stalagmites)
	data = global.get('water-data');
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

EntityManager.prototype._movePlayerToScene = function (lastScene, newScene) {
	if (lastScene === newScene) {
		return; // initial call
	}
	var oldEntities = this.entities[lastScene];
	for (var key in oldEntities) {
		var ent = oldEntities[key];
		if (ent.getName() === 'player') {
			var id = ent.getId();
			this.entities[newScene][id] = ent;
			// delete player from old scene
			this._delete(id, lastScene);
			return;
		}
	}
	util.warn('Warning, something wrong, did not manage to move player from: ' + lastScene + ' to: ' + newScene);
};

EntityManager.prototype.getEntities = function () {
	return this.entities[this.currentScene];
};

EntityManager.prototype._delete = function (id, scene) {
	delete this.entities[scene][id];
};

global.set('class/EntityManager', EntityManager);

}());
