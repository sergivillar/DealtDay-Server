module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';',
                process: false,
                stripBanners: true
            },
            app: {
                src: [
                    // libs
                    'static/js/vendor/angular.min.js',

                    // owns
                    'profile/static/js/**/*.js'
                ],
                dest: 'static/js/built/dealtday.js'
            }
        },

        sass: {
            dist: {
                files: {
                    'static/css/style.css': 'static/sass/style.scss'
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
                tasks: ['sass:dist', 'autoprefixer'],
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