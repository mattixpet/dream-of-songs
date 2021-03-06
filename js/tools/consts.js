// An object of constants, accessed by global.get('consts').val

(function () {

'use strict';

var consts = {};

// facts
consts['NUMCHESTS'] = undefined; // these should be set in data/chest-data.js
consts['NUMHIDDENCHESTS'] = undefined;

// input
consts['KEY_W'] = 'W'.charCodeAt(0);
consts['KEY_A'] = 'A'.charCodeAt(0);
consts['KEY_S'] = 'S'.charCodeAt(0);
consts['KEY_D'] = 'D'.charCodeAt(0);
consts['KEY_LEFT'] = 37;
consts['KEY_UP'] = 38;
consts['KEY_RIGHT'] = 39;
consts['KEY_DOWN'] = 40;
consts['KEY_SPACE'] = 32;
consts['KEY_L'] = 'L'.charCodeAt(0);
consts['KEY_O'] = 'O'.charCodeAt(0);
consts['KEY_P'] = 'P'.charCodeAt(0);
consts['KEY_K'] = 'K'.charCodeAt(0);
consts['KEY_G'] = 'G'.charCodeAt(0);
consts['KEY_I'] = 'I'.charCodeAt(0);
consts['KEY_B'] = 'B'.charCodeAt(0);
consts['KEY_C'] = 'C'.charCodeAt(0);
consts['KEY_ENTER'] = 13;
consts['KEY_SPACE'] = 32;
consts['KEY_H'] = 'H'.charCodeAt(0);
consts['KEY_BACKSPACE'] = 8;

// background consts
consts['NOBLOCK'] = '0';
consts['REGBLOCK'] = '1'; // regular block
consts['PLATFORMBLOCK'] = '2'; // block you can jump through but land on
consts['STAIRBLOCK'] = '3';
consts['TELEBLOCK'] = '4'; // teleport block, special within each scene to go to another scene
consts['STAIRTOPBLOCK'] = '5'; // the top of all stairs (which you can stand on, as opposed to regular stair blocks)
consts['SECONDARYTELEBLOCK'] = '6'; // if there are two teleports on one scene, this behaves exactly as teleblock otherwise
								  	// requests the 'secondary-special' from background instead of the normal special
consts['TERTIARYTELEBLOCK'] = '7'; // three teleports on scene
consts['WATERBLOCK'] = '8';
consts['WATERTOPBLOCK'] = '9';

// scenes which player should have swimming goggles on for the entire time
consts['FULLWATERSCENES'] = ['cavewater'];

// c h e a t s
// if you're looking at this STOP NOW
// just kidding.. cool I guess. But you could have figured this out from the riddles in the game!
consts['WHYISARAVENLIKEAWRITINGDESK'] = ['alice', 'nevar', 'never'];
consts['THEONLYWAYTOFLY'] = 'mescaline';
// now this is just for advanced users :P
consts['THEONLYWAYTODEVMODE'] = 'renaissance';

global.set('consts', consts);

}());
