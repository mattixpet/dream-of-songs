// Text for all menus !

(function () {

'use strict';

var consts = global.get('consts');

var menu_text_data = {
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
	}
};

global.set('menu-text-data', menu_text_data);

}());