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
		'start' : 		{'x':700, 'y':478, 'width':168, 'height':164},
		'settings' : 	{'x':700, 'y':642, 'width':168, 'height':164},
		'about' : 		{'x':700, 'y':806, 'width':168, 'height':164}
	}
}

global.set('menu-data', menu_data);

}());