// Resolution changer
// Goes through the data files changes all coordinates/positions/etc
// Then reloads the sprites for each object which needs it as well

// Pre: requires [[newWidth]], [[newHeight]] to maintain 16:9 aspect ratio
// Usage: call changeResolution(newWidth, newHeight)

(function () {

'use strict';

var util = global.get('util');
var config = global.get('config');

function changeResolution (width, height) {
	var canvas = global.get('canvas');
	var oldWidth = canvas.width;
	//var oldHeight = canvas.height;

	if (width/height !== 16/9) {
		util.warn('Warning, 16:9 aspect ratio not respected in resolution change. Still changing.');
	}

	// this must be changed before loading is called to have correct dimensions
	canvas.width = width;
	canvas.height = height;

	// now calculate the constant to multiply all our old coordinates with
	var ratio = width / oldWidth; // should be same constant for width and height with 16:9 aspect ratio

	// IMPORTANT TO DO THIS FIRST because the classes/stuff rely on this for information
	modifyDataFiles(ratio);

	// modify variables in config/consts we need to
	// the lessened gravity for ratio over 1 was because we didn't
	// seem to get to the flying chest without doing this
	// I still think acceleration is only used linearly
	// so it should work to multiply by it, but it doesn't seem to :/
	config.GRAVITYCONSTANT *= ratio > 1 ? ratio * 0.95 : ratio;
	config.DEFAULTTERMINALSPEED *= ratio;
	// again seemed to not be able to jump on the cross??? wtf man let's give him a little jump boost
	config.DEFAULTJUMPSPEED *= ratio > 1 ? ratio * 1.05 : ratio;

	// now we need to reinitialize/modify sprites and stuff with the classes which need it
	// audio
	// Song is the only thing we might need to change, but there's a new song created all the time
	// so should be fine

	// background
	util.log('Resetting background..');
	global.get('background').setBlockDimensions(width, height);

	// entities
	// goes through all our entities and changes the resolution
	util.log('Resetting resolution of entities..');
	global.get('entityManager').resetResolution(ratio);

	// menus
	util.log('Resetting all menu resolutions..');
	global.get('settingsMenu').resetResolution(ratio);

	// sprites
	util.log('Modifying all sprites..');
	global.get('imageHandler').resetResolution(ratio);

	// final
	util.log('Completed resolution change.');
}

// [[ratio]] is the constant to multiply all our coordinates with
function modifyDataFiles (ratio) {
	util.log('Modifying data files...');

	// stuff like 'pos' meaning if anything ends with 'Pos' or 'pos' change the value
	var postfixes = [
		'pos',
		'margin',
		'marginright',
		'fontsize',
		'coord',
		'width',
		'height',
		'radius',
		'thickness',
		'distance',
		'padding',
		'position',
		'delta',
		'reduction',
		'marginx',
		'marginy'
	];
	// exceptions to postfixes, like 'srcWidth' we don't want to change for example
	var noModifyKeys = ['srcWidth', 'srcHeight', 'positions', 'popupShadowDistance'];

	generalModification(global.get('audio-gui-data'), postfixes, noModifyKeys, ratio);
	modifyBackgroundData(ratio); // modifies the teleport coordinates
	modifyGeneralEntityCoords(global.get('chest-data'), ratio, ['topskyvault', 'skyvault00', 'topskyvault00']);
	modifyMenuData(ratio);
	generalModification(global.get('menu-text-data'), postfixes, noModifyKeys, ratio);
	modifyMenuTextDataSprites(ratio);
	modifyRavenData(ratio);
	modifySpikeData(ratio);
	generalModification(global.get('sprite-data'), postfixes, noModifyKeys, ratio);
	modifyTorchData(ratio);
	modifyWaterData(ratio);

	util.log('Finished modifying 11 data files.');
}

function modifyWaterData (ratio) {
	var data = global.get('water-data');
	for (var scene in data) {
		data[scene].x = Math.round(data[scene].x * ratio);
		data[scene].y = Math.round(data[scene].y * ratio);
	}
}

function modifyTorchData (ratio) {
	var data = global.get('torch-data');
	// first let's modify all our torch bezier curve animations
	for (var animation in data['bezierCurves']) {
		var curves = data['bezierCurves'][animation];
		for (var i = 0; i < curves.length; i++) {
			var curve = curves[i];
			for (var prop in curve) {
				if (prop.endsWith('x') || prop.endsWith('y')) {
					curve[prop] = Math.round(curve[prop] * ratio);
				}
			}
		}
	}
	// second and this is the easy part, modify the spawns
	modifyGeneralEntityCoords(data.spawns, ratio, []);
}

function modifySpikeData (ratio) {
	var data = global.get('spike-data');
	for (var scene in data) {
		// should only be one but whatever
		data[scene].x = Math.round(data[scene].x * ratio);
		data[scene].y = Math.round(data[scene].y * ratio);
		data[scene].width = Math.round(data[scene].width * ratio);
		data[scene].height = Math.round(data[scene].height * ratio);
		data[scene].respawnX  = Math.round(data[scene].respawnX * ratio);
		data[scene].respawnY = Math.round(data[scene].respawnY * ratio);
	}
}

function modifyRavenData (ratio) {
	var data = global.get('raven-data');
	var hidden_data = global.get('raven-hidden-data');
	// should only be one key, but whatever
	for (var key in data) {
		data[key].x = Math.round(data[key].x * ratio);
		data[key].y = Math.round(data[key].y * ratio);
	}
	for (var order in hidden_data) {
		// first, sceond etc
		hidden_data[order].coords.x = Math.round(hidden_data[order].coords.x * ratio);
		hidden_data[order].coords.y = Math.round(hidden_data[order].coords.y * ratio);
	}
}

function modifyMenuTextDataSprites (ratio) {
	var data = global.get('menu-text-data')['settingsMenu'].sprites;
	data.checkbox.width = Math.round(data.checkbox.width * ratio);
	data.checkbox.height = Math.round(data.checkbox.height * ratio);
	data.checkmark.width = Math.round(data.checkmark.width * ratio);
	data.checkmark.height = Math.round(data.checkmark.height * ratio);
	data.typebox.width = Math.round(data.typebox.width * ratio);
	data.typebox.height = Math.round(data.typebox.height * ratio);
}

function modifyMenuData (ratio) {
	var data = global.get('menu-data');
	for (var menu in data) {
		for (var button in data[menu]) {
			data[menu][button].x = Math.round(data[menu][button].x * ratio);
			data[menu][button].y = Math.round(data[menu][button].y * ratio);
			data[menu][button].width = Math.round(data[menu][button].width * ratio);
			data[menu][button].height = Math.round(data[menu][button].height * ratio);
		}
	}
}

// changes e.g. data = {
//	'scene0' : [
//		{'x':34, 'y':45}, ..
//	], ..
//}
// like chest-data and torch-data.spawns
// [[exceptions]] is an array of scenes not to change (
// e.g. only change skyvault and undergroundvault, not skyvaul00 etc)
function modifyGeneralEntityCoords (data, ratio, exceptions) {
	for (var scene in data) {
		if (exceptions.indexOf(scene) >= 0) {
			continue;
		}
		for (var i = 0; i < data[scene].length; i++) {
			data[scene][i].x = Math.round(data[scene][i].x * ratio);
			data[scene][i].y = Math.round(data[scene][i].y * ratio);
		}
	}
}

function modifyBackgroundData (ratio) {
	// helper
	function modifyXYObject(obj) {
		if (typeof(obj) === 'object') {
			obj.x = Math.round(obj.x * ratio);
			obj.y = Math.round(obj.y * ratio);
		}
	}

	var data = global.get('background-data')['Connections'];
	for (var scene in data) {
		var dirs = data[scene];
		if (dirs.special) {
			modifyXYObject(dirs.special.coords);
		}
		if (dirs['secondary-special']) {
			modifyXYObject(dirs['secondary-special'].coords);
		}
		if (dirs['tertiary-special']) {
			modifyXYObject(dirs['tertiary-special'].coords);
		}
	}
}

// Does the 'typical' modification, gets the global.get(data)
// and iterates every 'data': { 'key' : { 'keyToBeChecked0' : object0, .. }, .. }
// key and keyToBeChecked/object pair, checking only the keyToBeChecked for postfixes
//
// e.g. audio_gui_data = { 'Spacings' : { 'arrowPos' : {'x':.. }, .. }, .. }
//
// where [[postfixes]] is a list of endings of the keys which should be changed (their vaules) (non-case sensitive)
// and [[noModifyKeys]] are keys which fall under the [[postfixes]] but should not be changed
// (the exceptions) (case sensitive)
function generalModification (data, postfixes, noModifyKeys, ratio) {
	for (var key in data) {
		for (var keyToBeChecked in data[key]) {
			// check if keyToBeChecked ends with any of the strings in postfixes
			var hasPostfix = false;
			for (var i = 0; i < postfixes.length; i++) {
				if (keyToBeChecked.toLowerCase().endsWith(postfixes[i].toLowerCase())) {
					hasPostfix = true;
					break;
				}
			}
			// but that it is not equal to anything in noModifyKeys
			if (noModifyKeys.indexOf(keyToBeChecked) >= 0) {
				hasPostfix = false;
			}
			// now let's actually modify the number with our ratio
			if (hasPostfix) {
				var varToBeChanged = data[key][keyToBeChecked];
				if (typeof(varToBeChanged) === 'number') {
					// if it is a number, just multiply with ratio rounded if int
					// not rounded if double
					if (util.isInteger(varToBeChanged)) {
						data[key][keyToBeChecked] = Math.round(varToBeChanged * ratio);
					} else {
						data[key][keyToBeChecked] *= ratio;
					}
				} else if (typeof(varToBeChanged) === 'object') {
					// if it's an object, check if it has an x or y, then multiply that value
					if (varToBeChanged.hasOwnProperty('x')) {
						varToBeChanged.x = Math.round(varToBeChanged.x * ratio);
					}
					if (varToBeChanged.hasOwnProperty('y')) {
						varToBeChanged.y = Math.round(varToBeChanged.y * ratio);
					}
				}
			}
		}
	}
}

global.set('changeResolution', changeResolution);

}());
