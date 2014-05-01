module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        typescript: {
            server: {
                src: [
                    './typings/node/node.d.ts',
                    './typings/express/express.d.ts',
                    './typings/async/async.d.ts',
                    './app/models/post.ts',
                    './app/models/user.ts',
                    './app/controllers/index.ts',
                    './app/controllers/posts.ts',
                    './app/controllers/users.ts',
                    './config/config.ts',
                    './config/express.ts',
                    './config/passport.ts',
                    './config/routes.ts',
                    './config/env/all.ts',
                    './config/middleware/auth.ts',
                    './server.ts'
                ],
                options: {
                    module: 'commonjs',
                    target: 'es5'
                }
            },
            platypus: {
                src: [
                    './public/app/lib/platypus/platypus.ts',
                    './public/app/app.ts',
                    './public/app/models/post.model.ts',
                    './public/app/models/user.model.ts',
                    './public/app/services/posts.service.ts',
                    './public/app/services/user.service.ts',
                    './public/app/repositories/posts.repository.ts',
                    './public/app/repositories/users.repository.ts',
                    './public/app/common/templatecontrols/navigation.templatecontrol.ts',
                    './public/app/viewcontrols/blog/create/create.viewcontrol.ts',
                    './public/app/viewcontrols/blog/edit/edit.viewcontrol.ts',
                    './public/app/viewcontrols/blog/list/list.viewcontrol.ts',
                    './public/app/viewcontrols/blog/single/single.viewcontrol.ts',
                    './public/app/viewcontrols/home/home.viewcontrol.ts'
                ],
                options: {
                    module: 'commonjs',
                    target: 'es5'
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: './public/lib',
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
    grunt.registerTask('tscompile', ['typescript:server','typescript:platypus']);
    grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('install', ['bower']);
};
//# sourceMappingURL=Gruntfile.js.map
