// Special file for the jasmine tests, modifies config urls so we can at least start the game
// and load the images

(function () {

'use strict';

var config = global.get('config');

// sprites
config.SPRITEURL = '../../' + config.SPRITEURL;
config.BACKGROUNDURL = '../../' + config.BACKGROUNDURL;
config.MENUITEMSURL = '../../' + config.MENUITEMSURL;

}());
