## Website Performance Optimization portfolio project

This is Website Performance Optimization course project at Udacity: https://www.udacity.com/course/ud884




## Download ad Run this project


##### 1) download
`git clone https://github.com/JeffShomali/P4-Website-Optimization.git`

##### 2) Start localhost
`$ python -m SimpleHTTPServer`

Open your browser and visit _localhost:8080_

##### 3) Publish temporary for PageSpeed optimization
`./ngrok http 8080`


For downloading Node modules in the project directory run:

`npm install`

page speed insights recommendations.


## Optimization
The index page originally had a Google PageSpeed score of 35/100 for the mobile version and 45/100 for the desktop. After using [GruntJS](http://gruntjs.com) task runner and some other tools  the score increased to 94/100 for both mobile and desktop. I used many of `GruntJS` task runner tools for optimize this tiny website.

Hear are Implemented Grunt for this project :

##### Minify HTML (https://github.com/gruntjs/grunt-contrib-htmlmin)
##### Minify CSS  (https://github.com/gruntjs/grunt-contrib-cssmin)
##### Inline CSS (https://github.com/jgallen23/grunt-inline-css)
##### Minify images (https://github.com/gruntjs/grunt-contrib-imagemin)
##### Minify JavaScript files with UglifyJS (https://www.npmjs.com/package/grunt-contrib-uglify)
