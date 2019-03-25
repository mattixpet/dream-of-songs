// Data for scenes and spawn points for all Chests in game

(function () {

'use strict';

var menu_data = {
	// format
	// {
	//		'menuType' : {
	//			'buttonName' : {'x':x, 'y':y, 'width':w, 'height':h},
	//			'anotherButton' : ..
	//		},
	//      'anotherMenuType' : ..
	//	} 
	// where menuType is for example startMenu (title screen), pauseMenu, settingsMenu, aboutMenu, etc.
	// and x, y are top left coordinates of the clickable box which is our button
	// and width, height are the widths heights of same box
	'startMenu' : {
		'start' : 		{'x':292, 'y':199, 'width':210, 'height':68},
		'settings' : 	{'x':292, 'y':268, 'width':210, 'height':68},
		'about' : 		{'x':292, 'y':336, 'width':210, 'height':68}
	},
	'aboutMenu' : {
		'back' :  		{'x':552, 'y':352, 'width':164, 'height':63}
	}
}

global.set('menu-data', menu_data);

}());