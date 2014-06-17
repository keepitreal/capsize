module.exports = function (grunt) {
    serverFiles = [
            './server/app/models/**/*.ts',
            './server/app/controllers/**/*.ts',
            './server/config/**/*.ts',
            './server/server.ts'
    ], clientFiles = [
            './public/app/lib/**/*.ts',
            './public/app/injectables/**/*.ts',
            './public/app/common/**/*.ts',
            './public/app/services/**/*.ts',
            './public/app/models/**/*.ts',
            './public/app/repositories/**/*.ts',
            './public/app/viewcontrols/**/*.ts',
            './public/admin/viewcontrols/**/*.ts',
            './public/app/app.ts'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        typescript: {
            server: {
                src: serverFiles,
                options: {
                    module: 'commonjs',
                    target: 'es5'
                }
            },
            platypus: {
                src: clientFiles,
                options: {
                    module: 'commonjs',
                    target: 'es5'
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: './public/app/lib',
                    layout: 'byComponent',
                    verbose: true
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-bower-task');

    // Register tasks
    grunt.registerTask('ts', ['typescript:server','typescript:platypus']);
    grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('install', ['bower']);
};
//# sourceMappingURL=Gruntfile.js.map
