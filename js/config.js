// Config object, accessed by global.get('config').val

(function () {

'use strict';

var config = {};

// diagnostics
config['drawBackgroundGrid'] = false;
config['drawPixelGrid'] = false;
config['drawBoundingBoxes'] = false;
config['snakeMode'] = false;
config['gravity'] = true;
config['clickToShowCoord'] = true;

config['GRAVITYCONSTANT'] = 0.001;
config['DEFAULTTERMINALSPEED'] = 0.5;

config['STARTINGSCENE'] = 'clearsky';

// sprites
config['SPRITEURL'] = 'img/spritesheets/';
config['BACKGROUNDURL'] = 'img/backgrounds/';
config['MENUITEMSURL'] = 'img/menuitems/';

global.set('config', config);

}());
