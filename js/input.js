//

(function () {

global.set('keys', []);
var keys = global.get('keys');

function handleKeydown(e) {
	keys[e.keyCode] = true;

	if (keys[consts.KEY_W]) {
		console.log('KEY_W is pressed!');
	}

	e.preventDefault();
}

function handleKeyup(e) {
	keys[e.keyCode] = false;
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);

}());