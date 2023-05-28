// Save state of game in local storage so user can continue where he left off
//
// Notes: Does not save which songs were picked, picks new songs at random for the chests

(function () {

'use strict';

const util = global.get('util');
const config = global.get('config');

async function saveState() {
    util.log('Saving state.');
    const entityManager = global.get('entityManager');
    // not sure why entityManager.getAllEntities() did not work, but bracket 
    // notation did, so here we are
    const entities = entityManager['getAllEntities']();

    // our state to be json stringified and saved in local storage
    // Looks like e.g.:
    // {
    //    chests: {'clearsky': [{'x': 400, 'y': -200}, ..], ..},
    //    player: {
    //        'username': 'Matti',
    //        'codes': ['flying', 'hidden'],
    //        'highscore_id': 'bfa393d4-c585-4e2b-9a5c-1ad0accb654a\n',
    //        'scene': 'abovecave',
    //        'x': 560,
    //        'y': 200,
    //        'numChests': 44,
    //        'numHiddenChests': 20,
    //        '_q': 43,
    //        'currentlyFlying': true,
    //        'deaths': 50
    //    }
    // }
    // where x and y are chest.startingX and startingY (same as in chest-data.js)
    // flying === player can fly, hidden === player can see hidden chests
    const stateObj = {
        chests: {},
        player: {},
    };

    // save all chests that are looted to state
    for (let scene in entities) {
        const sceneEntities = entities[scene];
        if (Object.keys(sceneEntities).length > 0) {
            stateObj.chests[scene] = [];
        }
        for (let id in sceneEntities) {
            const entity = sceneEntities[id];
            if (entity.getName() === 'chest' && entity.isLooted()) {
                stateObj.chests[scene].push({
                    x: entity.startingX,
                    y: entity.startingY,
                });
            }
        }
    }

    // save player data
    const player = global.get('player');
    stateObj.player.username = player.username;
    stateObj.player.codes = [];
    if (config.snakeModeEnabled) {
        stateObj.player.codes.push('flying');
        stateObj.player.currentlyFlying = config.snakeMode;
    }
    if (config.hiddenChestsEnabled) {
        stateObj.player.codes.push('hidden');
    }
    stateObj.player.highscore_id = player.highscore_id;
    stateObj.player.scene = entityManager.currentScene;
    stateObj.player.x = player.x;
    stateObj.player.y = player.y;
    stateObj.player.numChests = player.numChests;
    stateObj.player.numHiddenChests = player.numHiddenChests;
    stateObj.player._q = player._q;
    stateObj.player.deaths = player.deaths;

    window.localStorage.setItem('serializedState', JSON.stringify(stateObj));
}

function loadState() {
    const serializedState = window.localStorage.getItem('serializedState');
    if (!serializedState) {
        return;
    }
    util.log('Loading state.');
    const s = JSON.parse(serializedState);
    const player = global.get('player');
    // set player accordingly with correct data, coordinates etc.
    player.username = s.player.username;
    if (s.player.codes.includes('flying')) {
		config.snakeModeEnabled = true;
		config.snakeMode = true;
        if (s.player.currentlyFlying) {
            player.setAsFlying(true);
        }
    }
    if (s.player.codes.includes('hidden')) {
		config.hiddenChestsEnabled = true;
		config.showHiddenChests = true;
    }
    player.highscore_id = s.player.highscore_id;
    player.setX(s.player.x);
    player.setY(s.player.y);
    player.numChests = s.player.numChests;
    player.numHiddenChests = s.player.numHiddenChests;
    player._q = s.player._q;
    player.deaths = s.player.deaths;

    const entityManager = global.get('entityManager');
    // since entity manager spawns the first clearsky scene, we have to delete the
    // chest from there (we already moved player from there) before we spawn
    // all the chests (it should just be one chest, but let's loop through anyway)
    const startingSceneEntities = entityManager.getEntities();
    for (let id in startingSceneEntities) {
        const entity = startingSceneEntities[id];
        if (entity.name === 'chest') {
            entityManager.destroy(entity.getId());
        }
    }
    entityManager.scenesVisited[config.STARTINGSCENE] = false;
    entityManager.spawnEntitiesFromState(s.chests);

    const scene = s.player.scene;
    entityManager.notifySceneChange(scene, player);

    const background = global.get('background');
    background.currentScene = scene;
    // handle multiuse scenes like sky00, sky01 etc.
    if (Number.isInteger(Number.parseInt(scene.substring(scene.length-2)))) {
        background.currentSceneTemplate = scene.slice(0, scene.length-2);
    } else {
        background.currentSceneTemplate = undefined;
    }
}

const state = {
    'saveState': saveState,
    'loadState': loadState,
};

global.set('state', state);

}());
