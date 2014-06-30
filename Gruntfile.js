function serverFiles(ext) {
    ext = ext || 'js';
    return [
            'server/app/models/**/*.' + ext,
            'server/app/controllers/**/*.' + ext,
            'server/config/**/*.' + ext,
            'server/server.' + ext
    ];
}

function publicFiles(ext) {
    ext = ext || 'js';
    return [
            'public/app/lib/jquery/dist/*.' + ext,
            'public/app/lib/bootstrap/dist/js/*.' + ext,
            'public/app/lib/platypus/*.' + ext,
            'public/app/injectables/**/*.' + ext,
            'public/app/services/**/*.' + ext,
            'public/app/models/**/*.' + ext,
            'public/app/repositories/**/*.' + ext,
            'public/app/common/templatecontrols/**/*.' + ext,
            'public/app/viewcontrols/**/*.' + ext,
            'public/admin/viewcontrols/**/*.' + ext,
            'public/app/app.' + ext
    ];
}

function publicTestFiles(ext) {
    ext = ext || 'js';
    return publicFiles(ext).concat([
        'tests/public/**/*.mock.' + ext,
        'tests/public/**/*.test.' + ext
    ]);
}

function serverTestFiles(ext) {
    ext = ext || 'js';
    return serverFiles(ext).concat([
        'tests/server/**/*.mock.' + ext,
        'tests/server/**/*.test.' + ext
    ]);
}

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                script: 'server/server.js',
                options: {
                    ignore: ['node_modules/**'],
                    watch: ['server']
                }
            }
        },
        typescript: {
            server: {
                src: serverFiles('ts'),
                options: {
                    module: 'commonjs',
                    target: 'es5'
                }
            },
            platypus: {
                src: publicFiles('ts'),
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
        },
        karma: {
            options: {
                basePath: '',
                frameworks: ['jasmine'],
                plugins: [
                    'karma-jasmine',
                    'karma-coverage',
                    'karma-ie-launcher',
                    'karma-chrome-launcher',
                    'karma-firefox-launcher',
                ],
                exclude: [
                    '**/*node_modules*'
                ],
                preprocessors: {},
                port: 9876,
                runnerPort: 9100,
                colors: true,
                autoWatch: true,
                browsers: ['IE11'],// 'IE10', 'IE9', 'Chrome'],
                customLaunchers: {
                    IE11: {
                        base: 'IE',
                        flags: ['-private']
                    },
                    IE10: {
                        base: 'IE',
                        'x-ua-compatible': 'IE=EmulateIE10',
                        flags: ['-private']
                    },
                    IE9: {
                        base: 'IE',
                        'x-ua-compatible': 'IE=EmulateIE9',
                        flags: ['-private']
                    }
                },
                captureTimeout: 5000,
                singleRun: false,
                reportSlowerThan: 500,
                reporters: ['progress', 'coverage'],
                coverageReporter: {
                    type: 'html',
                    dir: 'tests/coverage/'
                }
            },
            public: {
                options: {
                    files: publicTestFiles(),
                    preprocessors: {
                        'public/**/*.js': 'coverage'
                    }
                }
            },
            server: {
                options: {
                    files: serverTestFiles(),
                    preprocessors: {
                        'server/**/*.js': 'coverage'
                    }
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');

    // Register tasks
    grunt.registerTask('ts', ['typescript:server', 'typescript:platypus']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('test-public', ['karma:public']);
    grunt.registerTask('test-server', ['karma:server']);
    grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('install', ['bower']);
};
