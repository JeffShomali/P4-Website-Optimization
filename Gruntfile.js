module.exports = function(grunt) {
    grunt.initConfig({

        //HTML Minification
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'index.html',
                    'dist/project-2048.html': 'project-2048.html',
                    'dist/project-mobile.html': 'project-mobile.html',
                    'dist/project-webperf.html': 'project-webperf.html',
                    //views
                    'dist/views/pizza.html': 'views/pizza.html',
                }
            }
        },


        // Concat Configuration
        //    concat: {
        //        JS: {
        //            src: ['js/perfmatters.js', 'views/js/main.js'],
        //            dest: 'dist/js/built.js',
        //        },
        //
        //        CSS: {
        //            src: ['css/style.css', 'css/print.css'],
        //            dest: 'dist/css/built.css',
        //        },
        //    },

        // Minification configuration
        cssmin: {
            target: {
                files: {
                    'dist/css/print.css': ['css/print.css'],
                    'dist/css/style.css': ['css/style.css'],
                    //views
                    'dist/views/css/bootstrap-grid.css': ['views/css/bootstrap-grid.css'],
                    'dist/views/css/style.css': ['views/css/style.css'],
                }
            }
        },

        // Image minimize configuration
        imagemin: {
            static: {
                files: {
                    'dist/views/images/pizza.png'   : 'views/images/pizza.png',    // 'destination': 'source'
                    'dist/views/images/pizzeria.jpg': 'views/images/pizzeria.jpg', // 'destination': 'source'
                }
            },

            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },


        // Uglify configuration
        uglify: {
            my_target: {
                files: {
                    'dist/js/perfmatters.js': ['js/perfmatters.js'],
                    'dist/views/js/main.js' : ['views/js/main.js'],
                }
            }
        },


        // Watch configuration
        //    watch: {
        //        JS: {
        //            files: ['**/*.js'],
        //            tasks: ['concat'],
        //        },
        //        CSS: {
        //            files: ['**/*.css'],
        //            tasks: ['concat'],
        //        },
        //    },


    }); //end config

    // Loading Tasks
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'cssmin', 'imagemin', 'uglify', 'htmlmin']);
};
