// My javascript game Dream Of Songs
// Matthias Petursson - oldschool01123@gmail.com

(function () {

'use strict';

// imports
var util = global.get('util');
var config = global.get('config');
var consts = global.get('consts');
var LoadingBar = global.get('class/LoadingBar'); // loading bar constructor
var ImageHandler = global.get('class/ImageHandler');
var Player = global.get('class/Player');
var EntityManager = global.get('class/EntityManager');
var Background = global.get('class/Background');
var CollisionManager = global.get('class/CollisionManager');
var StartMenu = global.get('class/StartMenu');
var AboutMenu = global.get('class/AboutMenu');
var PauseMenu = global.get('class/PauseMenu');
var NameMenu = global.get('class/NameMenu');
var NotificationMenu = global.get('class/NotificationMenu');
var SettingsMenu = global.get('class/SettingsMenu');
var AudioManager = global.get('class/AudioManager');
var PlayerMouseAI = global.get('class/PlayerMouseAI');

global.set('canvas', document.getElementById('dreamOfSongs'));
var canvas = global.get('canvas');
global.set('ctx', canvas.getContext('2d')); // context
var ctx = global.get('ctx');

global.set('gameStarted', false);
global.set('activeTypebox', false); // see Typebox.js and input.js

function startLoading() {
	var loadingBar = new LoadingBar();
	global.set('loadingBar', loadingBar);

	loadingBar.preloadImage(continueLoading); // have to actually preload the (go figure) loading background
}

function continueLoading() {
	// background image of loading bar should now be loaded
	var loadingBar = global.get('loadingBar');
	loadingBar.start();

	var imageHandler = new ImageHandler(loadingBar);
	global.set('imageHandler', imageHandler);

	// load all images/sprites in game, then invoke initGame callback
	imageHandler.preloadImages(initGame);
}

function begin() {
	// only have these toggles possible when not typing into the typebox (enter code)
	if (!global.get('activeTypebox')) {
		// handle in game input logic (other logic is in input.js)
		if (config.hiddenChestsEnabled || config.devMode) {
			if (util.eatKey(consts.KEY_H)) {
				config.showHiddenChests = !config.showHiddenChests;
				util.log('Toggling hidden chests ' + (config.showHiddenChests ? 'on.' : 'off.'));
			}
		}
		if (config.snakeModeEnabled || config.devMode) {
			if (util.eatKey(consts.KEY_O)) {
				config.snakeMode = !config.snakeMode;
				global.get('player').setAsFlying(config.snakeMode);
				util.log('Toggling snake mode ' + (config.snakeMode ? 'on.' : 'off.'));
			}
		}
		if (config.devMode) {
			if (util.eatKey(consts.KEY_G)) {
				config.drawBackgroundGrid = !config.drawBackgroundGrid;
				util.log('Toggling grid ' + (config.drawBackgroundGrid ? 'on.' : 'off.'));
			}
			if (util.eatKey(consts.KEY_B)) {
				config.drawBoundingBoxes = !config.drawBoundingBoxes;
				util.log('Toggling bounding boxes ' + (config.drawBoundingBoxes ? 'on.' : 'off.'));
			}
			// click to show coordinate clicked
			if (util.eatKey(consts.KEY_C)) {
				config.clickToShowCoord = !config.clickToShowCoord;
				util.log('Toggling click to show coord ' + (config.clickToShowCoord ? 'on.' : 'off.'));
			}
			// print player info!
			if (util.eatKey(consts.KEY_I)) {
				var out = '';
				var player = global.get('player');
				for (var prop in player) {
					if (player.hasOwnProperty(prop)) {
						out += '\n' + prop + ': ' + player[prop];
					}
				}
				util.log('\nPlayer information: ' +
					out
				);
			}
			// increase player speed!
			if (util.eatKey(consts.KEY_M)) {
				let player = global.get('player');
				player.speedX += 0.2;
				player.speedY += 0.2;
				if (player.speedX === player.speedY) {
					player.speedY -= 0.2;
				}
				util.log('Speed up! (x:' + player.speedX + ', y:' + player.speedY + ')');
			}
			// decrease player speed!
			if (util.eatKey(consts.KEY_N)) {
				let player = global.get('player');
				player.speedX -= 0.2;
				player.speedY = Math.max(player.speedY - 0.2, 0);
				util.log('Speed down! (x:' + player.speedX + ', y:' + player.speedY + ')');
			}
		}
	}
}

function update(dt) {
	var entityManager = global.get('entityManager');
	var entities = entityManager.getEntities();
	for (var key in entities) {
		entities[key].update(dt);
	}

	global.get('audioGui').update(dt);

	global.get('notificationMenu').update(dt);
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	var background = global.get('background');
	background.draw();

	var entityManager = global.get('entityManager');
	var entities = entityManager.getEntities();
	var player = global.get('player');
	for (var key in entities) {
		var entity = entities[key];
		if (entity !== player) {
			entities[key].draw();
		}
	}
	// special case, let's always draw Player last (so he's in foreground)
	player.draw();

	// well let's draw the audio player last
	global.get('audioManager').drawGui();

	// now let's draw the popup last (if we're in a popup)
	global.get('notificationMenu').draw();
}

function end(fps, panic) {
	displayDiagnostics(fps);
	
	if (panic) {
        // This pattern introduces non-deterministic behavior, but in this case
        // it's better than the alternative (the application would look like it
        // was running very quickly until the simulation caught up to real
        // time). See the documentation for `MainLoop.setEnd()` for additional
        // explanation.
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        util.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }

    // for single stepping, see input.js
	if (global.get('inSingleCycle')) {
		MainLoop.stop();
		global.set('inSingleCycle', false);
	}
}

function checkMobile() {
	// From: http://detectmobilebrowsers.com/
	var check = false;
  	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){ check = true; }})(navigator.userAgent||navigator.vendor||window.opera);
  	
  	global.set('mobile', check);
  	config.mouseControls = check;
}

function initGame() {
	var loadingBar = global.get('loadingBar');
	// split whatever loading images left us (config.imagesPercentOfLoading)
	// into 5 loading points to place here
	var loadingIncr = (1 - config.imagesPercentOfLoading) / 5;

	// sets global.set('mobile') to true if we are on mobile
	checkMobile();

	// create all our entities and objects we need before we start the game
	var startMenu = new StartMenu();
	global.set('startMenu', startMenu);
	var aboutMenu = new AboutMenu();
	global.set('aboutMenu', aboutMenu);
	var pauseMenu = new PauseMenu();
	global.set('pauseMenu', pauseMenu);
	var nameMenu = new NameMenu(startGame); // this then calls startGame after user types in name
	global.set('nameMenu', nameMenu);

	loadingBar.incrementProgress(loadingIncr);

	var notificationMenu = new NotificationMenu();
	global.set('notificationMenu', notificationMenu);
	var settingsMenu = new SettingsMenu();
	global.set('settingsMenu', settingsMenu);

	loadingBar.incrementProgress(loadingIncr);

	// call 1-800-AUDIOMANAGER for everything audio
	var audioManager = new AudioManager();
	global.set('audioManager', audioManager);

	var entityManager = new EntityManager();
	global.set('entityManager', entityManager);

	var background = new Background();
	global.set('background', background);

	var collisionManager = new CollisionManager();
	global.set('collisionManager', collisionManager);

	loadingBar.incrementProgress(loadingIncr);

	// player stuff !
	var playerStartPos = global.get('sprite-data').player.startingPosition;
	var player = new Player(playerStartPos.x, playerStartPos.y);
	entityManager.register(player, config.STARTINGSCENE);
	global.set('player', player);

	var playerMouseAI = new PlayerMouseAI(player);
	global.set('playerMouseAI', playerMouseAI);
	player.setMouseController(playerMouseAI);
	//

	loadingBar.incrementProgress(loadingIncr);

	// send our sneaky analytics !!! (no ips though, very softcore)
	sendAnalytics();

	// start submitting high score every 10 seconds
	setInterval(sendHighScores, 10000);

	// load state if in local storage, see tools/state.js
	global.get('state').loadState();

	// always finish loading no matter what though !
	loadingBar.updateProgress(1);

	startMenu.display();
}

function sendHighScores () {
	global.get('postHighScoreToDb')();
}

function sendAnalytics () {
	fetch(config.IPCHECKURL)
	.then(function (response){
		if (response.ok) {
			return response.json();
		}
	})
	.then(function (data) {
		global.get('postToDb')({
			'type': 'pageload', 
			'country': (data && data.country) ? data.country : 'Unknown country', 
			'city': (data && data.city) ? data.city : 'Unknown city', 
			'user_agent': window.navigator.userAgent
		});
	})
	.catch(function () {
		// if we can't get country/city from ipcheck, let's still count it as a pageload/save the user agent
		global.get('postToDb')({
			'type': 'pageload', 
			'country': 'Unknown country', 
			'city': 'Unknown city', 
			'user_agent': window.navigator.userAgent
		});
	});
}

function startGame() {
	// Start the game !
	MainLoop.setBegin(begin).setUpdate(update).setDraw(draw).setEnd(end).start();
	global.set('gameStarted', true);
	setTimeout(function(){
		if (global.get('mobile')) {
			global.get('notificationMenu').notify('mobile');
			global.get('notificationMenu').display();
		}
	}, 500);
}

function displayDiagnostics(fps) {
	ctx.save();

	ctx.fillStyle = 'white';
	ctx.font = 'normal 12px Monospace';

	// Display FPS in bottom right corner
	ctx.fillText(fps.toPrecision(4) + ' fps', canvas.width - 75, canvas.height - 10);

	ctx.restore();
}

startLoading(); // kicks everything off 

}());
