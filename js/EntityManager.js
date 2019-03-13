// Entity manager keeps tabs on all objects in game

(function () {

'use strict';

function EntityManager () {
	this.entities = {}; // or use map to maintain order?
	this._lastId = -1;
}

EntityManager.prototype.register = function (entity) {
	this.entities[++this._lastId] = entity;
	entity.setId(this._lastId);
	return this._lastId;
};

EntityManager.prototype.delete = function (id) {
	delete this.entities[id];
};

global.set('class/EntityManager', EntityManager);

}());
