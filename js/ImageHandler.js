// Handles image preloading and all loading of images
// also contains information about spritesheet data/pixel locations

function ImageHandler() {
	this.imagesLoaded = []; // promise array with the onload of each image
	this.sprites = {};

	// Sprite creation and data
	this._createSpriteFromImage(
		'player', 'protagonist-spritesheet.png', 
		600, 1000, 
		180, 300, 
		[[0,0], [0,1000], [600,0], [600,1000], [1200,0]]
	);
}

ImageHandler.prototype._createSpriteFromImage = 
	function createSpriteFromImage(name, filename, srcWidth, srcHeight, dispWidth, dispHeight, positions) {
		var img = new Image();
		this.imagesLoaded.push(
			new Promise(function(resolve, reject){
				img.onload = resolve;
			})
		);
		img.src = consts.SPRITEURL + filename;
		var sprite = new Sprite(img, 	srcWidth, srcHeight,
										dispWidth, dispHeight,
										positions
								);
		this.sprites[name] = sprite;
	};

ImageHandler.prototype.preloadImages = function (callback) {
	Promise.all(this.imagesLoaded).then(function(values){
		util.print('All images loaded!');
		callback();
	});
}

ImageHandler.prototype.getSprite = function (key) {
	return this.sprites[key];
}