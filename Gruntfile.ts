module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['gruntfile.js', 'public/app/**/*.js']
        },
        nodemon: {
            dev: {
                script: 'server.js'
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-tslint');
    grunt.loadNpmTasks('grunt-nodemon');

    // Register tasks
    grunt.registerTask('default', ['nodemon']);
};