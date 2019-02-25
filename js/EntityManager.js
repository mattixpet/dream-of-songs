// Entity manager keeps tabs on all objects in game

function EntityManager () {
	this.entities = {};
	this.lastId = -1;
}

EntityManager.prototype.register = function (entity) {
	this.entities[++this.lastId] = entity;
	return this.lastId;
};

EntityManager.prototype.delete = function (id) {
	delete this.entities[id];
};