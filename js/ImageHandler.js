// Handles image preloading and all loading of images
// also contains information about spritesheet data/pixel locations

(function () {

'use strict';

// imports
var consts = global.get('consts');
var util = global.get('util');
var Sprite = global.get('class/Sprite');

function ImageHandler() {
	this.imagesLoaded = []; // promise array with the onload of each image
	this.sprites = {};

	this.imageCounter = 0; // this can be accessed by async
	this.imageCounterLock = false; // true if someone is modifying the imageCounter
	// UPDATE THIS VARIABLE MANUALLY
	this.totalImageCount = 9; 	// total number of images to be loaded here, to update progress of loading bar

	this.canvas = global.get('canvas');

	// Sprite creation and data
	this._createSpriteFromImage(
		'player', consts.SPRITEURL + 'protagonist-spritesheet.png', 
		80, 100, 
		600, 1000, 
		[[0,0], [0,1000], [600,0], [600,1000], [1200,0]]
	);

	// backgrounds
	this._createSpriteFromImage(
		'clearsky', consts.BACKGROUNDURL + 'clearsky.jpg',
		this.canvas.width, this.canvas.height
	);
	this._createSpriteFromImage(
		'clearskyclouds', consts.BACKGROUNDURL + 'clearskyclouds.jpg',
		this.canvas.width, this.canvas.height
	);
	this._createSpriteFromImage(
		'smallcliff', consts.BACKGROUNDURL + 'smallcliff.jpg',
		this.canvas.width, this.canvas.height
	);
	this._createSpriteFromImage(
		'cave0', consts.BACKGROUNDURL + 'cave0.jpg',
		this.canvas.width, this.canvas.height
	);
	this._createSpriteFromImage(
		'cave1', consts.BACKGROUNDURL + 'cave1.jpg',
		this.canvas.width, this.canvas.height
	);
	this._createSpriteFromImage(
		'cavestairs', consts.BACKGROUNDURL + 'cavestairs.jpg',
		this.canvas.width, this.canvas.height
	);
	this._createSpriteFromImage(
		'brokenstairs', consts.BACKGROUNDURL + 'brokenstairs.jpg',
		this.canvas.width, this.canvas.height
	);
	this._createSpriteFromImage(
		'abovecave', consts.BACKGROUNDURL + 'abovecave.jpg',
		this.canvas.width, this.canvas.height
	);
}

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
