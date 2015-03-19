/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
      files: ['public/*.*','app.js','views/*.ejs'],
      tasks: [],
      options: {
        // Start a live reload server on the default port 35729
        livereload: true,
        hostname:'0.0.0.0'
      }
    }

  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
