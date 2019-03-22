// Entity manager keeps tabs on all objects in game

(function () {

'use strict';

var consts = global.get('consts');
var Chest = global.get('class/Chest');

function EntityManager () {
	// maintain all entities in game in this object
	// format:
	// entities = {
	//		'sceneName' : {'id' : entity, 'id2' : entity, ..},
	// 		'anotherScene' : ..
	//}
	// move player from scene to scene, see this._movePlayerToScene()
	this.entities = {};
	this.currentScene = consts.STARTINGSCENE;

	this._lastId = -1;

	this.notifySceneChange(consts.STARTINGSCENE); // initial spawns
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
	if (this.entities.hasOwnProperty(scene)) {
		this.currentScene = newScene;
		this._movePlayerToScene(oldScene, newScene);
	} else {
		// first time on this scene
		this.entities[newScene] = {};
		// spawn all entities on this scene and move player to this scene
		this._movePlayerToScene(oldScene, newScene);
		this._spawnEntitiesOnScene(newScene);
		this.currentScene = newScene;
	}
};

EntityManager.prototype._spawnEntitiesOnScene = function (scene) {
	// Spawn all chests we need to spawn
	var data = global.get('chest-data');
	if (data.hasOwnProperty(scene)) {
		var chests = data[scene];
		for (var i = 0; i < chests.length; i++) {
			var chest = new Chest(chests[i][0], chests[i][1], chests[i][2]);
			this.register(chest, scene);
		}
	}
	// else no chests on scene
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
