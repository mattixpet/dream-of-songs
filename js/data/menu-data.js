// Data for menus, where each buttons bounding box is and where the buttons are.

(function () {

'use strict';

var util = global.get('util');

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
		'settings' : 	{'x':292, 'y':267, 'width':210, 'height':68},
		'about' : 		{'x':292, 'y':335, 'width':210, 'height':68}
	},
	'aboutMenu' : {
		'back' :  		{'x':638, 'y':170, 'width':90, 'height':100}
	},
	'pauseMenu' : {
		'resume' :      {'x':80, 'y':123, 'width':210, 'height':68},
		'settings' :    {'x':80, 'y':191, 'width':210, 'height':68},
		'about' :      	{'x':80, 'y':259, 'width':210, 'height':68}
	},
	'notificationMenu' : {
		// 11 = margin
		// 18 = font size
		'continue' :    {'x':551-11, 'y':358-11-18, 'width':18/2*'continue'.length+2*11, 'height':18+2*11}
	},
	'settingsMenu' : {
		'back' : undefined, // reuse aboutMenu
		'continue' : undefined // reuse notificationMenu
	}
};

menu_data['settingsMenu'].back = util.shallowCopy(menu_data['aboutMenu'].back);
menu_data['settingsMenu'].continue = util.shallowCopy(menu_data['notificationMenu'].continue);

global.set('menu-data', menu_data);

}());