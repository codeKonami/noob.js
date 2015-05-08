/*global module:false*/
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/css/style.css': 'public/scss/style.scss'
            }
        }
    },
    express: {
      options: {
        // Override defaults here
      },
      web: {
        options: {
          script: 'app.js',
        }
      },
    },
    watch: {
      stylesSass: {
        files: ['public/scss/**/*.scss'],
        tasks: [
          'sass'
        ]
      },
      frontend: {
        options: {
          livereload: true
        },
        files: [
          // triggering livereload when the .css file is updated
          // (compared to triggering when sass completes)
          // allows livereload to not do a full page refresh
          'public/css/*.css',
          'views/**/*.ejs',
          'public/js/*.js',
          'public/img/**/*'
        ]
      },
      web: {
        files: [
          'app.js',
          'controllers/*.js',
        ],
        tasks: [
          'express:web'
        ],
        options: {
          spawn: false, //Without this option specified express won't be reloaded
          atBegin: true,
        }
      }
    },
    parallel: {
      web: {
        options: {
          stream: true
        },
        tasks: [{
          grunt: true,
          args: ['watch:frontend']
        },  {
          grunt: true,
          args: ['watch:stylesSass']
        }, {
          grunt: true,
          args: ['watch:web']
        }]
      },
    }
  });
  grunt.registerTask('web', 'launch webserver and watch tasks', [
    'parallel:web',
  ]);

  grunt.registerTask('default', ['web']);
};
