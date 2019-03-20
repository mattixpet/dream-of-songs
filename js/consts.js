// An object of constats, accessed by consts.val

(function () {

'use strict';

var consts = {};

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
consts['KEY_Q'] = 'Q'.charCodeAt(0);
consts['KEY_O'] = 'O'.charCodeAt(0);
consts['KEY_P'] = 'P'.charCodeAt(0);
consts['KEY_K'] = 'K'.charCodeAt(0);
consts['KEY_G'] = 'G'.charCodeAt(0);

// background consts
consts['NOBLOCK'] = 0;
consts['REGBLOCK'] = 1; // regular block
consts['PLATFORMBLOCK'] = 2; // block you can jump through but land on
consts['STAIRBLOCK'] = 3;
consts['TELEBLOCK'] = 4; // teleport block, special within each scene to go to another scene

// sprites
consts['SPRITEURL'] = 'img/spritesheets/';
consts['BACKGROUNDURL'] = 'img/backgrounds/';

// diagnostics
consts['drawBackgroundGrid'] = true;
consts['drawPixelGrid'] = false;
consts['drawBoundingBoxes'] = true;
consts['snakeMode'] = false;
consts['gravity'] = true;
consts['globalPlayer'] = true;

global.set('consts', consts);

}());
