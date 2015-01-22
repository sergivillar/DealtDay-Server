module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                process: false,
                stripBanners: true
            },
            app: {
                src: [
                    // libs
                    'static/js/vendor/angular.min.js',
                    'static/js/vendor/angular-animate.min.js',
                    'static/js/vendor/angular-aria.min.js',
                    'static/js/vendor/angular-cookies.min.js',
                    'static/js/vendor/angular-resource.min.js',
                    'static/js/vendor/angular-messages.min.js',
                    'static/js/vendor/angular-route.min.js',
                    'static/js/vendor/md-date-time.js',
                    'bower_components/angular-material/angular-material.min.js',
                    'bower_components/hammerjs/hammer.min.js',

                    // Dealtday
                    'static/js/app.js',

                    // Profile
                    'profile/static/profile/js/*.js',
                    'profile/static/profile/js/controllers/*.js',
                    'profile/static/profile/js/directives/*.js',

                    // Event
                    'event/static/event/js/*.js',
                    'event/static/event/js/services/*.js',
                    'event/static/event/js/filters/*.js',
                    'event/static/event/js/controllers/*.js'
                ],
                dest: 'static/js/built/dealtday.js'
            },
            style: {
                src: [
                    'bower_components/angular-material/angular-material.css',
                    'static/css/custom-style.css',
                    'static/css/md-date-time.css'
                ],
                dest: 'static/css/style.css'
            }
        },

        sass: {
            dist: {
                files: {
                    'static/css/custom-style.css': 'static/sass/style.scss'
                }
            }
        },

        autoprefixer: {
            single_file: {
                src: 'static/css/style.css',
                dest: 'static/css/style.css'
            }
        },

        concurrent: {
            devjs: ['concat'],
            styles: ['sass', 'autoprefixer']
        },

        watch: {
            styles: {
                files: ['**/sass/*.scss'],
                tasks: ['sass:dist', 'autoprefixer', 'concat:style'],
                options: {
                    nospawn: true,
                    spawn: false
                }
            },
            js: {
                files: ['static/js/*.js', '**/static/**/js/**/*.js'],
                tasks: ['concurrent:devjs'],
                options: {
                    nospawn: true,
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('js', ['watch:js']);
    grunt.registerTask('styles', ['sass']);
};