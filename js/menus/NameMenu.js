// NameMenu, prompt for user to type in name, shown after user clicks Start game

(function () {

'use strict';

// imports
var consts = global.get('consts');
var Menu = global.get('class/Menu');
var Typebox = global.get('class/Typebox');


function NameMenu (callback) {
    this.name = 'nameMenu';

    // call Menu constructor (it uses the .name property, so we must set it before calling)
    Menu.call(this, callback);

    this.callback = callback;

    this.buttonActions['enter'] = this.onEnter;

    this.typebox = new Typebox(
        '',
        this._handleEnter,
        this,
        'Enter name:'
    );
    // don't clear text for our textbox
    this.typebox.stopEnteringCode = function () {
        global.set('activeTypebox', false);
        this.parentMenu.draw();
    };
    global.set('activeTypebox', this.typebox); // grab focus
}

NameMenu.prototype = Object.create(Menu.prototype);

NameMenu.prototype._handleEnter = function (text) {
    const player = global.get('player');
    if (text) {
        player.username = text;
    } else {
        // populate typebox with a random name, and return
        const nameChoices = global.get('menu-text-data').nameMenu.nameDefaults;
        const name = nameChoices[Math.floor(Math.random() * nameChoices.length)];
        this.typebox.text = name + Math.floor(Math.random() * 10000);
        this.draw();
        return;
    }

    this.callback(); // call startGame()!
    this.hide();

    this.typebox.stopEnteringCode();

    global.get('util').log(`Player name is: ${player.username}`);
};

NameMenu.prototype.onEnter = function () {
    this.typebox.handleTypedCharacter({'keyCode': consts.KEY_ENTER});
};

NameMenu.prototype.draw = function () {
    // draw the background
    Menu.prototype.draw.call(this);

    const data = global.get('menu-text-data')[this.name];
    const pos = data.boxPos;

    this.typebox.draw(pos.x - 225, pos.y + 5);
};

NameMenu.prototype._handleClick = function (x, y) {
    // checks if go button is clicked
    const buttonClicked = Menu.prototype._handleClick.call(this, x, y);

    if (!buttonClicked) {
        // now check the typebox, only if user didn't click go button
        this.typebox.click(x, y);
    }
};

NameMenu.prototype.display = function() {
    // if there's a state, it should have been loaded, and we don't ask player for his name
    if (window.localStorage.getItem('serializedState')) {
        this.callback();
        this.hide();
        this.typebox.stopEnteringCode();
        return;
    }
    Menu.prototype.display.call(this);
};

global.set('class/NameMenu', NameMenu);

}());
