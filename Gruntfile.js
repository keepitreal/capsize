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
        'public/app/services/**/*.' + ext,
        'public/app/models/**/*.' + ext,
        'public/app/repositories/**/*.' + ext,
        'public/app/common/templatecontrols/**/*.' + ext,
        'public/app/viewcontrols/**/*.' + ext,
        'public/app/app/app.' + ext,
        'public/app/main.' + ext,
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
        browserify: {
            dist: {
                files: {
                    './public/app/app.js': './public/app/main.js'
                },
                options: {
                    commondir: true,
                    browserifyOptions: {
                        debug: true
                    },
                    transform: ['deamdify']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    './public/css/style.css': [
                        './public/app/lib/fontawesome/css/font-awesome.min.css',
                        './public/app/lib/colpick/css/colpick.css',
                        './public/css/main.css'
                    ]
                }
            }
        },
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
                    'ts:watch_public',
                    'watch'
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
                target: 'es5',
                sourceMap: false,
                fast: 'always'
            },
            watch_server: {
                src: serverFiles('ts'),
                watch: 'server'
            },
            watch_public: {
                src: publicFiles('ts'),
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
        less: {
            main: {
                options: {
                    paths: ["public/css"]
                },
                files: {
                    "public/css/main.css": "public/css/main.less"
                }
            }
        },
        shell: {
            tsd: {
                command: [
                    'node node_modules/tsd/build/cli update -so --config tsd.public.json',
                    'node node_modules/tsd/build/cli update -so --config tsd.json',
                    'node node_modules/tsd/build/cli update -so --config tsd.server.json'
                ].join(' && ')
            },
            bower: {
                command: path.normalize('./node_modules/.bin/bower') + ' install'
            }
        },
        watch: {
            less: {
                files: 'public/css/**/*.less',
                tasks: ['less', 'cssmin']
            },
            browserify: {
                files: publicFiles(),
                tasks: ['browserify']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-force-task');
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
    grunt.registerTask('make', ['force:ts:server', 'force:ts:public', 'browserify', 'less']);
    grunt.registerTask('install', ['shell:tsd','concurrent:install', 'make', 'clean']);
    grunt.registerTask('heroku', ['install']);
};
