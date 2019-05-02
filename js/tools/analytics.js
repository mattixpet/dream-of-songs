// Simple function to post to our database, through php/analytics.php

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');

// [[data]] must have a very specific format. Possible formats are:
//
// {'type':'pageload', 'country':country, 'city':city, user_agent':user_agent}
// {'type':'download', 'number':1+, 'song':'songName' or ''}
//   where number is more than 1 if download all was issued and then song is empty string
//   otherwise number is 1 and song is the songName to be added to db
// {'type':'milestone', 'value':'over50songs', 'over100songs' or 'beatgame'}
// {'type':'code', 'code':'code typed in'}
function postToDb(data) {
	util.log('Sending data of type: ' + data.type + ' to server.');

	fetch(config.POSTURL, {
		method: 'POST',
		mode: config.fetchMode,
		headers: {
            'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
	});
	// .then(function (response) {
	// 	if (response.ok) {
	// 		console.log('Success ! ' + response.status);
	// 		return response.json();
	// 	} else {
	// 		console.log('Error ! ' + response.status);
	// 		return response.json();
	// 	}
	// })
	// .then(function (data) {
	// 	console.log(data);
	// })
	// .catch(function (error) {
	// 	console.log(error);
	// });
}

global.set('postToDb', postToDb);

}());
