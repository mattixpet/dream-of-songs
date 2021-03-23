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
config['devMode'] = false;
config['drawBackgroundGrid'] = false;
config['drawPixelGrid'] = false;
config['drawBoundingBoxes'] = false;
config['gravity'] = true;
config['clickToShowCoord'] = false;

// settings menu checkboxes
config['audioControlsFade'] = false; // always visible or fade in/out, default: no fade
config['autoplay'] = true; // autoplay next song, default: yes
config['allowParallelSongs'] = false; // only play one song at a time or not, default: one song at a time
config['repeatSongs'] = false; // repeat the current song, default: no
config['mouseControls'] = false; // use the mouse to control player, default: NO (yes on mobile)
config['doubleTapToPause'] = true; // for mobile only
// multibox (resolution)
config['fullscreen'] = false;
config['windowWidth'] = false;
config['800x450'] = true; // default resolution

// misc
// options: no-cors, cors, same-origin, depending on where your audio is located
// see config.SONGURL
config['fetchMode'] = 'same-origin'; // devel: 'cors';
config['sendAnalytics'] = true; // devel: false;
config['imagesPercentOfLoading'] = 0.95; // assume loading the images is 95% of the total loading

// game values
config['GRAVITYCONSTANT'] = 0.001;
config['DEFAULTTERMINALSPEED'] = 0.5;
config['DEFAULTJUMPSPEED'] = 0.4;

config['STARTINGSCENE'] = 'clearsky';

// paths/urls
// in local testing, change /img/etc to img/etc.
config['SPRITEURL'] = '/img/dreamofsongs/spritesheets/'; // img/dreamofsongs/etc. is just needed for the site (matthiaspetursson.com)
config['BACKGROUNDURL'] = '/img/dreamofsongs/backgrounds/';
config['MENUITEMSURL'] = '/img/dreamofsongs/menuitems/';
config['AUDIOGUIURL'] = '/img/dreamofsongs/audiogui/';
config['SONGURL'] = '/songs/'; // devel: 'https://matthiaspetursson.com/songs/';
config['POSTURL'] = '/php/analytics.php'; // devel: 'https://matthiaspetursson.com/php/analytics.php';
config['IPCHECKURL'] = 'https://ipinfo.io/json';

global.set('config', config);

}());
