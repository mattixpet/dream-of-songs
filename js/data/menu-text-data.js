// Text for all menus !

(function () {

'use strict';

var menu_text_data = {
	'notificationMenu' : {
		'font' : 'Monospace',
		'fontSize' : 18,
		'fontColor' : 'white',
		'textPos' : [160, 130],
		'textWidth' : 420, // px
		'spacing' : 1.5, // line spacing
		'continueButtonPos' : [551,358],
		'toggleOffPos' : [140,358],
		'first-chest' : 'You have found your first chest! ' +
						'\n Each chest contains a song ' +
						'idea I wrote. Click \'space\' to play! ' +
						'\n\n ' +
						'Maybe there are some more chests to be found? ' +
						'You can always check ' +
						'out the songs you have collected in the pause menu (click \'p\').',
		'general-chest' : 'CONGRATULATIONS NEW {} {} {} CHEST', // MAKE THIS NOTIFICATION show song name and 2/261 chests and just have it pop up, not stay and pause the game!
		'hidden-chest' : 	'Congratulations you found a hidden chest! \n Hidden chests ' +
							'are much rarer than normal chests and can\'t be seen with ' +
							'the naked eye. Well done.'
	}
};

global.set('menu-text-data', menu_text_data);

}());