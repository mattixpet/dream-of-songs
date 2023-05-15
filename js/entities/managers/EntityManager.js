// Entity manager keeps tabs on all objects in game

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');

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

	this.raven = undefined; // will contain our Raven entity (since we need to move him between scenes)
	this.ravenLastScene = undefined;

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

EntityManager.prototype._spawnChests = function (scene, chestsFromState) {
	var data = global.get('chest-data');
	if (data.hasOwnProperty(scene)) {
		var chests = data[scene];
		if (!this.scenesVisited[scene]) {
			if (!this.entities.hasOwnProperty(scene)) {
				this.entities[scene] = {};
			}
			if (chestsFromState && chestsFromState.length > 0) {
				// we've been here before in another life
				util.log(`Loading chests from state for scene: ${scene}, chests: ${JSON.stringify(chestsFromState)}`);
				for (let i = 0; i < chests.length; i++) {
					let chestInState = false;  // was chest in state or not
					for (let j = 0; j < chestsFromState.length; j++) {
						if (chestsFromState[j].x === chests[i].x && chestsFromState[j].y === chests[i].y) {
							chestInState = true;
							break;
						}
					}
					let chestInst;
					if (chestInState) {
						// we have found this specific chest on this scene
						chestInst = new Chest(
							chests[i].x, chests[i].y,
							chests[i].flipped,
							chests[i].hidden,
							undefined, // don't display any chest message
							chests[i].flying // also optional
						);
						// chest should be open since we opened it before
						chestInst.loot();
					} else {
						// unopened chest on scene
						chestInst = new Chest(
							chests[i].x, chests[i].y,
							chests[i].flipped,
							chests[i].hidden,
							chests[i].message,
							chests[i].flying,
						);
					}
					this.register(chestInst, scene);
				}
			} else {
				// first time here
				for (var i = 0; i < chests.length; i++) {
					const chestInst = new Chest(
						chests[i].x, chests[i].y,
						chests[i].flipped,
						chests[i].hidden,
						chests[i].message, // optional
						chests[i].flying, // also optional
					);
					this.register(chestInst, scene);
				}
			}
		} else {
			// we've been here before, still let's reset chests to their starting coordinates
			for (var key in this.entities[scene]) {
				var ent = this.entities[scene][key];
				if (ent.getName() === 'chest') {
					ent.resetToStartingPosition();
				}
			}
		}
		// because we bypass _notifySceneChange when loading the state
		if (chestsFromState) {
			this.scenesVisited[scene] = true;
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
			let spikes = new Spikes(
				spike.x,
				spike.y,
				spike.width,
				spike.height,
				scene
			);
			this.register(spikes, scene);
			global.set('spikes', spikes); // to get numDeaths for high score
		}
	}
};

// Spawn that one raven on the cross in hilltop..
EntityManager.prototype._spawnRavens = function (scene) {
	var data = global.get('raven-data');
	if (data.hasOwnProperty(scene)) {
		var ravenData = data[scene];
		// since we don't check if this is our first time on the scene (because raven flies and respawns)
		// let's make sure we delete the raven data from raven_data
		if (!this.raven) {
			this.raven = 	new Raven(
								ravenData.x,
								ravenData.y
							);
			this.register(
				this.raven,
				scene
			);
			this.ravenLastScene = scene;
		} else {
			// we have spawned him before, but now we need to move him since he's moved to this scene
			this._moveEntityToScene(this.ravenLastScene, scene, this.raven);
			this.raven.setX(ravenData.x);
			this.raven.setY(ravenData.y);
			this.ravenLastScene = scene;
		}
		delete data[scene];
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

EntityManager.prototype.getAllEntities = function () {
	return this.entities;
};

EntityManager.prototype._delete = function (id, scene) {
	delete this.entities[scene][id];
};

EntityManager.prototype.destroy = function (id) {
	// things should only die on the current scene we are on
	this._delete(id, this.currentScene);
};

// Reset sprites/related distance info on all our entities on 
// a resolution change
EntityManager.prototype.resetResolution = function (ratio) {
	for (var scene in this.entities) {
		for (var id in this.entities[scene]) {
			this.entities[scene][id].resetResolution(ratio);
		}
	}
};

// chestsState as described in tools/state.js
EntityManager.prototype.spawnChestsFromState = function (chestsState) {
	for (let scene in chestsState) {
		this._spawnChests(scene, chestsState[scene]);
	}
};

global.set('class/EntityManager', EntityManager);

}());
