var path = require('path');

function serverFiles(ext) {
    ext = ext || 'js';
    return [
        'server/models/**/*.' + ext,
        'server/controllers/**/*.' + ext,
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
        'public/app/services/**/*.' + ext,
        'public/app/models/**/*.' + ext,
        'public/app/repositories/**/*.' + ext,
        'public/app/common/templatecontrols/**/*.' + ext,
        'public/app/viewcontrols/**/*.' + ext,
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
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            build: {
                tasks: [
                    'ts:server',
                    'ts:public'
                ]
            },
            watch_build: {
                tasks: [
                    'ts:watch_server',
                    'ts:watch_public'
                ]
            },
            install: {
                tasks: [
                    'tsd',
                    'bower'
                ]
            },
            run: {
                tasks: [
                    'concurrent:watch_build',
                    'nodemon'
                ]
            },
            test: {
                tasks: [
                    'ts:test'
                ]
            }
        },
        nodemon: {
            dev: {
                script: 'server/server.js',
                options: {
                    ignore: ['node_modules/**'],
                    watch: ['server']
                }
            }
        },
        ts: {
            options: {
                module: 'commonjs',
                target: 'es5'
            },
            watch_server: {
                src: serverFiles('ts'),
                watch: 'server'
            },
            watch_public: {
                src: publicFiles('ts').concat(['!public/app/lib/platypus/*.ts']),
                watch: 'public'
            },
            server: {
                src: serverFiles('ts')
            },
            public: {
                src: publicFiles('ts').concat(['!public/app/lib/platypus/*.ts'])
            },
            test: {
                src: serverTestFiles('ts').concat(publicTestFiles('ts').concat(['!public/app/lib/platypus/*.ts'])),
                watch: 'test'
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
        clean: {
            options: {
                force: true
            },
            bootstrap: [
                'public/app/lib/bootstrap/*', 
                '!public/app/lib/bootstrap/dist',
                'public/app/lib/bootstrap/dist/js/bootstrap.js',
                'public/app/lib/bootstrap/dist/js/npm.js'
            ],
            jquery: [
                'public/app/lib/jquery/*', 
                '!public/app/lib/jquery/dist'
            ],
            bower: [
                'public/app/lib/**/.bower.json'
            ]
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
                        'public/app/models/**/*.js': 'coverage',
                        'public/app/repositories/**/*.js': 'coverage'
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
        },
        shell: {
            tsd: {
                command: [
                    'node node_modules/tsd/build/cli update -so --config tsd.public.json',
                    'node node_modules/tsd/build/cli update -so --config tsd.server.json'
                ].join(' && ')
            },
            bower: {
                command: path.normalize('./node_modules/.bin/bower') + ' install'
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');

    // Register tasks
    grunt.registerTask('bower', 'shell:bower');
    grunt.registerTask('tsd', 'shell:tsd');
    grunt.registerTask('build', ['concurrent:build']);
    grunt.registerTask('test', ['concurrent:test', 'karma']);
    grunt.registerTask('default', ['concurrent:run']);
    grunt.registerTask('install', ['concurrent:install', 'clean']);
};
