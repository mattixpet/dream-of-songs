(function () {

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
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
        esnext: true, // esversion: 6 seemed to be an invalid option?
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
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
};

}());