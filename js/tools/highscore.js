// Function to post high scores to our database, through php/highscores.php

(function () {

'use strict';

var config = global.get('config');
var util = global.get('util');


function postHighScoreToDb() {
    // Saves a unique id gotten from php code and uses that to update our
    // player score on subsequent requests
    const player = global.get('player');
    const last_score = player.last_highscore;
    const new_score = player.numChests;

    // No need to send score if we haven't even reached 10 chests yet.
    if (new_score <= last_score || new_score <= 10) {
        return;
    }

    if (Math.abs(player._q - new_score) > 3) {
        if (!player.username.includes(' (cheater!)')) {
            player.username += ' (cheater!)';
            player.highscore_id = null;
        }        
    }

    const spikes = global.get('spikes') || {'numDeaths': 0};

    // data == {
    //     'name': 'asdf',
    //     'score': 67,
    //     'deaths': 5,
    //     'date': '2023-01-01 00:00:00',
    // }
    const data = {
        'name': player.username,
        'score': new_score,
        'deaths': spikes.numDeaths,
        'date': new Date().toUTCString(),
        'unique_id': player.highscore_id,
    };

    util.log('Sending high score of ' + data.score + ' for ' + data.name + ' to server.');

    fetch(config.HIGHSCOREURL, {
        method: 'POST',
        mode: config.fetchMode,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function(res){
        player.last_highscore = new_score;
        return res.text();
    }).then(function(data){
        if (!player.highscore_id) {
            player.highscore_id = data;
        }
    });
}

global.set('postHighScoreToDb', postHighScoreToDb);

}());
