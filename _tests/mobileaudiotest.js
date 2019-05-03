// javascript file to test audio on mobiles goddamn !

// turns out it was that e.preventDefault() in the touchstart made
// the event 'non-trusted' meaning it wouldn't play the audio !!!

console.log = log;

function log(arg) {
	document.getElementById('debug').innerHTML += arg + '<br>';
}

log('Can play ogg: ' + !!(new Audio().canPlayType('audio/ogg; codecs="vorbis"')));
log('Can play aac/m4a: ' + !!(new Audio().canPlayType('audio/aac')));
log('Can play mpeg: ' + !!(new Audio().canPlayType('audio/mpeg')));

function handleTouchstart () {
	simpleButtonClick();
}

//document.getElementById('canvas').addEventListener("touchstart", handleTouchstart);
document.getElementById('canvas').addEventListener("mousedown", handleTouchstart);

function buttonClick () {
	var songUrl = 'songs/Tonlist_haha/2015/kristjan/pompei.ogg';
	var currentSong = new Audio();
	// from http://hpr.dogphilosophy.net/test/ THANK YOU Epicanis !
	currentSong.pause();
	currentSong.src=''; //force playback to stop and quit buffering. Not sure if this is strictly necessary.
	currentSong.src=songUrl;
	currentSong.currentSrc=songUrl; //can I even do this?...
	currentSong.load();

	var audioReady = this.currentSong.readyState;
	if (audioReady > 2) {
	    this.currentSong.play();
  	} else if(this.currentSong.error) {
		console.log('audio error !');
  	} else {
  		// if we're not ready yet, try again in half a second
		setTimeout(function(){ buttonClick(); }, 500);
  	}
}

function simpleButtonClick() {
	var songUrl = 'songs/Tonlist_haha/2015/kristjan/pompei.ogg';
	var currentSong = new Audio(songUrl);
	currentSong.play();
}