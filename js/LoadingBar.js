// Loading bar

(function () {

'use strict';

// imports
var consts = global.get('consts');
var util = global.get('util');

function LoadingBar() {
	this.progress = 0; // 0-1
	this.canvas = global.get('canvas');
	this.ctx = global.get('ctx');
	this.bgUrl = consts.BACKGROUNDURL + 'loading.jpg';
	this.img = undefined; // set in this.preloadImage
	// positions of loading bar bar (go figure)
	this.x = Math.floor(this.canvas.width / 3.031);
	this.y = Math.floor(this.canvas.height / 2.275);
	this.w = Math.floor(this.canvas.width / 2.735);
	this.h = Math.floor(this.canvas.height / 12.86);
	this.color = '#889158';
}

LoadingBar.prototype.preloadImage = function(callback) {
	util.log('Actually loading the loading bar image..');
	var ctx = this.ctx;
	ctx.save();
	ctx.fillStyle = '#999966';
	ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	ctx.font = '20px Monospace';
	ctx.fillStyle = '#113333';
	ctx.fillText(	'Actually loading the loading bar.. go figure :)', 
						Math.floor(this.canvas.width/6), Math.floor(this.canvas.height/2));
	ctx.restore();

	var img = new Image();
	this.img = img;
	img.onload = callback;
	img.src = this.bgUrl;
}

// call this in the callback to this.preloadImage to start
LoadingBar.prototype.start = function() {
	util.log('Started proper loading.');
	this._drawBg();
}

LoadingBar.prototype.updateProgress = function(progress) {
	this.progress = progress;
	if (progress < 0 || progress > 1) {
		util.warn('Something is wrong, progress bar says: ' + progress);
	}
	this._draw();
	if (progress === 1) {
		util.log('Loading finished.');
	}
}

LoadingBar.prototype._drawBg = function() {
	this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
}

LoadingBar.prototype._draw = function() {
	var ctx = this.ctx;
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, Math.floor(this.progress * this.w), this.h);
	ctx.restore();
}

global.set('class/LoadingBar', LoadingBar);

}());
