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
        this
    );
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
        this.typebox.draw(this.typebox.x, this.typebox.y);
        return;
    }
    this.callback(); // should have been provided with function to start game on creation, that is callback
    this.hide();
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
        // because we don't want to make typebox react to clicking outside of it
        this.typebox.click(x, y);
    }
};

global.set('class/NameMenu', NameMenu);

}());
