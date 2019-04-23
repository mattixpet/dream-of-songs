// Config object, accessed by global.get('config').val

(function () {

'use strict';

var config = {};

// allowed in game after code is typed correctly
config['hiddenChestsEnabled'] = false;
config['snakeModeEnabled'] = false;
// these are the actual toggles on/off
config['showHiddenChests'] = false;
config['snakeMode'] = false;

// diagnostics
config['devMode'] = true; // obv let's not forget to set this as false on release
config['drawBackgroundGrid'] = false;
config['drawPixelGrid'] = false;
config['drawBoundingBoxes'] = false;
config['gravity'] = true;
config['clickToShowCoord'] = false;

// settings menu checkboxes
config['audioControlsAlwaysOn'] = false; // always visible or default: fade out
config['autoplay'] = true; // autoplay next song, default: yes
config['allowParallelSongs'] = false; // only play one song at a time or not, default: one song at a time
config['repeatSongs'] = false; // repeat the current song, default: no

// misc
config['playTitleTheme'] = false;
// options: no-cors, cors, same-origin, depending on where your audio is located
// see config.SONGURL
config['fetchMode'] = 'cors';

// game values
config['GRAVITYCONSTANT'] = 0.001;
config['DEFAULTTERMINALSPEED'] = 0.5;
config['DEFAULTJUMPSPEED'] = 0.4;

config['STARTINGSCENE'] = 'clearsky';

// paths/urls
config['SPRITEURL'] = 'img/spritesheets/';
config['BACKGROUNDURL'] = 'img/backgrounds/';
config['MENUITEMSURL'] = 'img/menuitems/';
config['AUDIOGUIURL'] = 'img/audiogui/';
config['SONGURL'] = 'https://matthiaspetursson.com/songs/';

global.set('config', config);

}());
