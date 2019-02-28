// Entity, base class for all objects

(function () {

'use strict';

function Entity() {

}

Entity.prototype.draw = function () {

};

Entity.prototype.update = function (dt) {

};

Entity.prototype.setId = function (id) {
	this.id = id;
}

global.set('class/Entity', Entity);

}());
