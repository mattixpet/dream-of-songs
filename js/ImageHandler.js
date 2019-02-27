// Handles image preloading and all loading of images
// also contains information about spritesheet data/pixel locations

function ImageHandler() {
	this.imagesLoaded = []; // promise array with the onload of each image
	this.sprites = {};

	// Sprite creation and data
	var playerImg = new Image();
	this.imagesLoaded.push(
		new Promise(function(resolve, reject){
			playerImg.onload = resolve;
		})
	);
	playerImg.src = consts.SPRITEURL + 'protagonist-spritesheet.png';
	var playerSprite = new Sprite(playerImg, 	600, 1000, 
												180, 300, 
												[[0,0], [0,1000], [600,0], [600,1000], [1200,0]]);
	this.sprites['player'] = playerSprite;
}

ImageHandler.prototype.preloadImages = function (callback) {
	Promise.all(this.imagesLoaded).then(function(values){
		util.print('All images loaded!');
		callback();
	});
}

ImageHandler.prototype.getSprite = function (key) {
	return this.sprites[key];
}