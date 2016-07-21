module.exports = function(grunt) {
    grunt.initConfig({


        // Inline Configuration
        inlinecss: {
            main: {
                options: {},
                files: {
                    'dist/index.html': 'index.html',
                    'dist/project-2048.html': 'project-2048.html',
                    'dist/project-mobile.html': 'project-mobile.html',
                    'dist/project-webperf.html': 'project-webperf.html',
                    'dist/views/pizza.html': 'pizza.html'
                }
            }
        },

        //HTML Minification
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html',
                    'dist/project-2048.html': 'dist/project-2048.html',
                    'dist/project-mobile.html': 'dist/project-mobile.html',
                    'dist/project-webperf.html': 'dist/project-webperf.html',
                    'dist/views/pizza.html': 'dist/views/pizza.html',
                }
            }
        },




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

        //Image minimize configuration
        //       imagemin: { // Task
        //           static: { // Target
        //               options: { // Target options
        //                   optimizationLevel: 3,
        //                   svgoPlugins: [{
        //                       removeViewBox: false
        //                   }],
        //                   use: [mozjpeg()]
        //               },
        //               files: { // Dictionary of files
        //                   'dist/pizzeria.jpg': 'views/images/pizzeria.jpg',
        //
        //               }
        //           },
        //      dynamic: { // Another target
        //          files: [{
        //              expand: true, // Enable dynamic expansion
        //              cwd: 'src/', // Src matches are relative to this path
        //              src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
        //              dest: 'dist/' // Destination path prefix
        //          }]
        //      }
        // },

        // Uglify configuration
        uglify: {
            my_target: {
                files: {
                    'dist/js/perfmatters.js': ['js/perfmatters.js'],
                    'dist/views/js/main.js': ['views/js/main.js'],
                }
            }
        },




    }); //end config

    // Loading Tasks
    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['inlinecss', 'cssmin', 'uglify', 'htmlmin']);
};
