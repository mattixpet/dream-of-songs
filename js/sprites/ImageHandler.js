// Handles image preloading and all loading of images
// also contains information about spritesheet data/pixel locations

(function () {

'use strict';

// imports
var config = global.get('config');
var util = global.get('util');
var Sprite = global.get('class/Sprite');

function ImageHandler() {
	this.imagesLoaded = []; // promise array with the onload of each image
	this.sprites = {};

	this.imageCounter = 0; // this can be accessed by async
	this.imageCounterLock = false; // true if someone is modifying the imageCounter

	var sprite_data = global.get('sprite-data');
	var menu_data = global.get('menu-data');
	var background_data = global.get('background-data');
	var audio_gui_data = global.get('audio-gui-data');

	// total number of images to be loaded here, to update progress of loading bar
	// the -1 is because background_data has a Connections object which does not correspond to an image
	// and likewise audio_gui_data has a Spacings object
	this.totalImageCount = 	util.objLen(sprite_data) + util.objLen(menu_data) + 
							util.objLen(audio_gui_data) - 1 + util.objLen(background_data) - 1;

	// load all the images !
	this._handleSprites();
	this._handleMenuItems();
	this._handleBackground();
	this._handleGuiItems();
}

ImageHandler.prototype._handleSprites = function () {
	var sprite_data = global.get('sprite-data');

	for (var sprite in sprite_data) {
		var data = sprite_data[sprite];
		this._createSpriteFromImage(
			sprite, data.fileurl,
			data.dispWidth, data.dispHeight,
			data.srcWidth, data.srcHeight,
			data.positions
		);
	}
};

ImageHandler.prototype._handleMenuItems = function () {
	var menu_data = global.get('menu-data');
	var canvas = global.get('canvas');

	for (var menu in menu_data) {
		this._createSpriteFromImage(
			menu, config.MENUITEMSURL + menu.toLowerCase() + '.png',
			canvas.width, canvas.height
		);
	}
};

ImageHandler.prototype._handleBackground = function () {
	var background_data = global.get('background-data');
	var canvas = global.get('canvas');

	for (var bg in background_data) {
		if (bg !== 'Connections') {
			this._createSpriteFromImage(
				bg, config.BACKGROUNDURL + bg + '.jpg',
				canvas.width, canvas.height
			);
		}
	}
};

ImageHandler.prototype._handleGuiItems = function () {
	var audio_gui_data = global.get('audio-gui-data');

	for (var item in audio_gui_data) {
		var itemInfo = audio_gui_data[item];
		if (item !== 'Spacings') {
			this._createSpriteFromImage(
				item, config.AUDIOGUIURL + item + '.png',
				itemInfo.width, itemInfo.height
			);
		}
	}
};

ImageHandler.prototype._createSpriteFromImage = 
	function _createSpriteFromImage(name, fileurl, dispWidth, dispHeight, srcWidth, srcHeight, positions) {
		var img = new Image();
		this.imagesLoaded.push(
			new Promise(function(resolve, reject){
				img.onload = function () {
					var imageHandler = global.get('imageHandler');
					imageHandler.incrementImageCounter();
					util.log('Loaded ' + 	imageHandler.imageCounter + '/' + 
											imageHandler.totalImageCount + ' images.');
					global.get('loadingBar').updateProgress(
						imageHandler.imageCounter / imageHandler.totalImageCount
					);
					resolve();
				};
			})
		);
		img.src = fileurl;
		// if srcWidth, srcHeight and positions are undefined, it's okay, sprite handles that
		var sprite = new Sprite(img, 	dispWidth, dispHeight,
										srcWidth, srcHeight,
										positions
								);
		this.sprites[name] = sprite;
	};

ImageHandler.prototype.incrementImageCounter = function () {
	if (!this.imageCounterLock) {
		this.imageCounterLock = true;
		this.imageCounter++;
		this.imageCounterLock = false;
	} else {
		util.warn('Image counter tried to be accessed async by two threads, not doing anything.');
	}
};

ImageHandler.prototype.preloadImages = function (callback) {
	Promise.all(this.imagesLoaded).then(function(values){
		callback();
	});
};

ImageHandler.prototype.getSprite = function (key) {
	return this.sprites[key];
};

// exports
global.set('class/ImageHandler', ImageHandler);

}());
