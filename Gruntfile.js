module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            dist: {
                options: {
                    paths: ["css"],
                    compress: true,
                    optimization: 2,
                    cleancss: true
                },
                files: [{"css/gvizdyktheme.css": "less/theme.less"}]
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24',
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            },
            diff: {
                options: {
                    diff: true
                },
                src: 'css/gvizdyktheme.css'
            },
            simplecss: {
                src: 'css/gvizdyktheme.css'
            }
        },

        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: ['less','autoprefixer']
            }
        },

        realFavicon: {
            favicons: {
                src: 'images/favicon.svg',
                dest: 'images/icons',
                options: {
                    iconsPath: '/images/icons/',
                    html: [ '_includes/favicons.html' ],
                    design: {
                        ios: {
                            pictureAspect: 'backgroundAndMargin',
                            backgroundColor: '#ffffff',
                            margin: '14%'
                        },
                        desktopBrowser: {},
                        windows: {
                            pictureAspect: 'noChange',
                            backgroundColor: '#da532c',
                            onConflict: 'override'
                        },
                        androidChrome: {
                            pictureAspect: 'backgroundAndMargin',
                            margin: '17%',
                            backgroundColor: '#ffffff',
                            themeColor: '#ffffff',
                            manifest: {
                                name: 'Blog #gvizdyk',
                                display: 'browser',
                                orientation: 'notSet',
                                onConflict: 'override'
                            }
                        },
                        safariPinnedTab: {
                            pictureAspect: 'silhouette',
                            themeColor: '#5bbad5'
                        }
                    },
                    settings: {
                        scalingAlgorithm: 'Mitchell',
                        errorOnImageTooSmall: false
                    }
                }
            }
        }

    });

    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-real-favicon');
    grunt.registerTask('default', ['watch']);
};
