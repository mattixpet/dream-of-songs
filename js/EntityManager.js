// Entity manager keeps tabs on all objects in game

(function () {

'use strict';

function EntityManager () {
	this.entities = {};
	this.lastId = -1;
}

EntityManager.prototype.register = function (entity) {
	this.entities[++this.lastId] = entity;
	entity.setId(this.lastId);
	return this.lastId;
};

EntityManager.prototype.delete = function (id) {
	delete this.entities[id];
};

global.set('class/EntityManager', EntityManager);

}());
