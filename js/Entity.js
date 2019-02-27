// Entity, base class for all objects

function Entity() {

}

Entity.prototype.draw = function () {

};

Entity.prototype.update = function () {

};

Entity.prototype.setId = function (id) {
	this.id = id;
}
