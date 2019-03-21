// Config object, accessed by global.get('config').val

(function () {

'use strict';

var config = {};

// diagnostics
config['drawBackgroundGrid'] = true;
config['drawPixelGrid'] = false;
config['drawBoundingBoxes'] = true;
config['snakeMode'] = false;
config['gravity'] = true;
config['globalPlayer'] = true;

config['GRAVITYCONSTANT'] = 0.001;
config['DEFAULTTERMINALSPEED'] = 0.5;

global.set('config', config);

}());
