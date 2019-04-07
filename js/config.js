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
config['clickToShowCoord'] = false;
config['playTitleTheme'] = false;

// game values
config['GRAVITYCONSTANT'] = 0.001;
config['DEFAULTTERMINALSPEED'] = 0.5;

config['STARTINGSCENE'] = 'clearsky';

// paths/urls
config['SPRITEURL'] = 'img/spritesheets/';
config['BACKGROUNDURL'] = 'img/backgrounds/';
config['MENUITEMSURL'] = 'img/menuitems/';
config['AUDIOGUIURL'] = 'img/audiogui/';
config['SONGURL'] = 'http://dramattic.club/songs/';

global.set('config', config);

}());
