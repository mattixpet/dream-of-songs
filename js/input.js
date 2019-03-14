//

(function () {

'use strict';

var consts = global.get('consts');

var keys = [];

function handleKeydown(e) {
	keys[e.keyCode] = true;

	e.preventDefault();
}

function handleKeyup(e) {
	keys[e.keyCode] = false;
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);

global.set('keys', keys);

}());