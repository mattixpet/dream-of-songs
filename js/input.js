//

var g_keys = [];

const KEY_W = 'W'.charCodeAt(0);
const KEY_A = 'A'.charCodeAt(0);
const KEY_S = 'S'.charCodeAt(0);
const KEY_D = 'D'.charCodeAt(0);
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_SPACE = 32;

function handleKeydown(e) {
	g_keys[e.keyCode] = true;

	if (g_keys[KEY_W]) {
		console.log('KEY_W is pressed!');
	}

	e.preventDefault();
}

function handleKeyup(e) {
	g_keys[e.key] = false;
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);