(function () {

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js', '!js/ext/**', '_tests/jasmine/spec/**/*.js'],
      options: {
        // stuff which makes linting more strict, most of which is just part of my style
        curly: true,
        eqeqeq: true,
        freeze: true,
        strict: true,
        undef: true,
        unused: true,
        // stuff which makes linting less strict
        //shadow: true, // I'm on the fence about this, I don't like when he complains about
                        // stuff like for(var i) and then later another for (var i)
                        // but I do want him to check other scope errors
                        // Decided to just add it to the code like /* jshint shadow:true */
                        // where appplicable
        esversion: 6,
        loopfunc: true, // we define functions as part of a promise chain in AudioManager.js:205,209
        sub: true, // is deprecated, but I really like my bracket notation??
        jasmine: true,
        browser: true,
        devel: true, // for console.log
        globals: {
          global: true, // our 'import/export' system
          MainLoop: true, // see js/ext/mainloop
          // JSZip
          JSZip: true,
          saveAs: true,
          //
          module: true // just for Gruntfile.js
        }
      }
    },
    jasmine: {
      pivotal: {
        // order is actually super important here so lets just do this kinda manually
        // for now. Who cares
        src: [
          'js/global.js',
          'js/config.js',
          'js/tools/consts.js',
          'js/tools/util.js',
          'js/tools/draw.js',
          'js/tools/collision.js',
          'js/tools/resolution.js',
          'js/tools/analytics.js',

          'js/data/sprite-data.js',
          'js/data/background-sky-data.js',
          'js/data/background-data.js',
          'js/data/chest-data.js',
          'js/data/audio-data.js',
          'js/data/audio-gui-data.js',
          'js/data/menu-data.js',
          'js/data/menu-text-data.js',
          'js/data/torch-data.js',
          'js/data/water-data.js',
          'js/data/spike-data.js',
          'js/data/raven-data.js',

          'js/menus/LoadingBar.js',
          'js/sprites/Sprite.js',
          'js/sprites/ImageHandler.js',
          'js/background/Background.js',

          'js/menus/lib/Menu.js',
          'js/menus/lib/ScrollableMenu.js',
          'js/menus/StartMenu.js',
          'js/menus/AboutMenu.js',
          'js/menus/PauseMenu.js',
          'js/menus/helpers/Popup.js',
          'js/menus/NotificationMenu.js',
          'js/menus/helpers/Checkbox.js',
          'js/menus/helpers/Typebox.js',
          'js/menus/helpers/Multibox.js',
          'js/menus/SettingsMenu.js',
          'js/menus/NameMenu.js',

          'js/audio/helpers/Song.js',
          'js/audio/helpers/AudioPlayer.js',
          'js/audio/AudioGUI.js',
          'js/audio/AudioManager.js',

          'js/entities/lib/Entity.js',
          'js/entities/lib/AnimatingEntity.js',
          'js/entities/lib/MovingEntity.js',
          'js/entities/Player.js',
          'js/entities/Chest.js',
          'js/entities/Torch.js',
          'js/entities/Water.js',
          'js/entities/Spikes.js',
          'js/entities/Raven.js',

          'js/entities/PlayerMouseAI.js',

          'js/entities/managers/EntityManager.js',
          'js/entities/managers/CollisionManager.js',

          'js/tools/input.js',
          'js/game.js',

          'js/**/*.js' // if we forgot or add something lets hope it works in this order
        ],
        options: {
          //keepRunner: true, // this can be useful to check the console.logs
          specs: '_tests/jasmine/spec/*Spec.js',
          helpers: '_tests/jasmine/spec/*Helper.js'
        }
      }
    },
    uglify : {
      minified: {
        options: {
          mangle: false, // keep variable names for console logs/debugging
          banner: '/* Dream of songs v<%= pkg.version %> */',
          sourceMap: true,
          sourceMapName: 'dist/dreamofsongs.min.js.map'
        },
        files: {
          'dist/dreamofsongs.min.js': ['<%= jasmine.pivotal.src %>']
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jasmine', 'jshint', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jasmine', 'jshint', 'uglify']);
};

}());