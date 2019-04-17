// Text and config data for all menus !

(function () {

'use strict';

var consts = global.get('consts');
var menu_data = global.get('menu-data');

var canvasWidth = 800;
var canvasHeight = 450;
var iconWidth = global.get('audio-gui-data')['Spacings'].iconWidth;

var menu_text_data = {
	'Common' : {
		'font' : 'Monospace',
		'fontSize' : 18,
		'fontColor' : 'white',
		'spacing' : 1.5, // line spacing
	},
	'pauseMenu' : {
		'upArrowPos' : {'x':canvasWidth - iconWidth - 12, 'y':12},
		'downArrowPos' : {'x':canvasWidth - iconWidth - 12, 'y':canvasHeight - iconWidth - 12}
	},
	'notificationMenu' : {
		// common
		'font' : 'Monospace',
		'fontSize' : 18,
		'fontColor' : 'white',
		'spacing' : 1.5, // line spacing
		// pausing notification
		'textPos' : {'x':160,'y':130},
		'textWidth' : 420, // px
		'continueButtonPos' : {'x':551,'y':358},
		// popup notifiction
		'popupTextWidth' : 171,
		'popupTextHeight' : 36,
		'popupShadowColor' : 'black',
		'popupShadowDistance' : 2,
		'first-chest' : 'You have found your first chest! ' +
						'\n Each chest contains a song ' +
						'idea I wrote. Click \'space\' to play! ' +
						'\n\n ' +
						'Maybe there are some more chests to be found? ' +
						'You can always check ' +
						'out the songs you have collected in the pause menu (click \'p\').',
		'general-chest' : 'New song! {}/' + (consts.NUMCHESTS+1) + ' \n {}', //+ 1 here because of title theme
		'first-hidden-chest' : 	'Congratulations you found a hidden chest! \n Hidden chests ' +
							'are much rarer than normal chests and can\'t be seen with ' +
							'the naked eye. Well done.',
		'hidden-chest' : 'Hidden chest! {}/' + consts.NUMHIDDENCHESTS + ' \n {}',
		//                  {} === [[[yet]? again]?! [(for the xth time)]?]?
		'dead-to-spikes' : 'Whoops! You are dead{} \n\n ' + 
						   'But you can\'t really die in this world, so I\'ll just spawn you again.',
		'only-way-to-fly' : '        What\'s the only way to fly? \n\n ' +
							'        (hint: try to get some R&R)',
		'raven' : 	'      Why am I like a writing desk? \n\n ' +
					'              - Raven'
		},
	'aboutMenu' : {
		'textPos' : {'x':170,'y':50},
		'textWidth' : 410, // px
		'backButtonPos' : {'x':menu_data.aboutMenu.back.x + 12,'y':menu_data.aboutMenu.back.y + 25},
		'text' : 'When I was younger I used to record ideas for songs everytime I got them so that one day when I\'d be \'grown up and a songwriter\' I would use them if I needed some material. Turns out, there is no moment in time when suddenly now you\'re a songwriter, you just have to go right now and write songs, do what you want to do. This little adventure of mine is an exploration of these recordings (which I still use and add new ones, so you could say it worked) and this world I\'ve created around them.' + ' \n ' + 
'The song ideas range in length from around MINLENGTH seconds to MAXLENGTH minutes with an average duration of 3 minutes and 8 seconds. Everytime you load the game the songs are randomized, so make sure to download it if you land on a good song, otherwise it might take a while to find it again :) In addition, in the pause menu (click \'p\') you can download all the songs you\'ve collected in one zip file (might take some time for the game to zip it if it\'s a lot of songs, so be patient), and not only that, my song ideas/songs are all free to use for you for anything you can think of! Commercial or otherwise, and this applies to all songs I write, past, present and future. I don\'t like copyright to stand in the way of good music, if you can take something I did and make it better, that\'s awesome. All I ask is to be credited somewhere (and would be nice to be notified so I can check out your stuff).' + ' \n ' +
'It is quite hard, maybe damn near impossible to find all the chests, so if you do good job. However if you know where to look and have your wits about you there may be a few things that can help you on your quest. You can enter \'cheat\' codes in the settings menu, and you can do a fair bit of tweaking of the game as well, so I\'d check it out.' + ' \n ' +
'If you are interested in the game itself, it\'s written completely in javascript and almost totally from scratch, meaning I was having fun with some collision errors early in the writing process, but it was a good journey. I also drew all the sprites and art myself using public domain content as my source material, and the game is on (LINK)github(/LINK) if you\'d like to check it out.'
	}
};

global.set('menu-text-data', menu_text_data);

}());