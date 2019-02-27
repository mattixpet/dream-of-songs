// Entity, base class for all objects

function Entity() {

}

Entity.prototype.draw = function () {

};

Entity.prototype.update = function (dt) {

};

Entity.prototype.setId = function (id) {
	this.id = id;
}
