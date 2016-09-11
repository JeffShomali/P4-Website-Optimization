## Website Performance Optimization portfolio project

This is Website Performance Optimization course project at Udacity: https://www.udacity.com/course/ud884

### Prerequisites Courses to Finish this Project
1. Browser Rendering Optimization (UD860)
     + Course built by [Google](https://www.udacity.com/course/browser-rendering-optimization--ud860)
2. Website Performance Optimization (UD884)
     + Course built by [Google](https://www.udacity.com/course/website-performance-optimization--ud884)

### Download ad Run this project


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


## Solution
Minify CSS and make inline style in load time. Except for `print.css` which now uses media tag. To minimize amount of downloads
Change JS loading to async
Remove image format, and change size and compression.



## Solution - PageSpeed
Minify CSS and placed into page head. Except for print css which now uses media tag. To minimise amount of downloads
Change JS loading to async
By far the most important optimisation for FPS in Chrome was a CSS hack by David Walsh (http://davidwalsh.name/translate3d). It forced each pizza to be in it's own composite layer and this saw a huge speed increase. When I first tried this it didn't work as I applied the translateX inline and therefore was appearing after page load. It turned out before Chrome rendered the DOM CSSOM it needed to know that this were 'transform' layers.
- Also using GruntJs task  Minify images (https://github.com/gruntjs/grunt-contrib-imagemin) is a great tools for imgae compressing.

###### Minify HTML (https://github.com/gruntjs/grunt-contrib-htmlmin)

###### Minify CSS  (https://github.com/gruntjs/grunt-contrib-cssmin)

###### Inline CSS (https://github.com/jgallen23/grunt-inline-css)

###### Minify JavaScript files with UglifyJS (https://www.npmjs.com/package/grunt-contrib-uglify)

## Solution - Pizza FPS

- Modfied the `changePizzaSizes`  function to select randomPizzaContainer using `getElementsByClassName()` rather than `querySelectorAll()` and moved the computation of the dx and `newwidth` variables outside of the for loop to cash length loop on each pass through that loop.
- Modified the `updatePositions` function to select the mover elements by class name.
- Changed the querySelector call for selecting movingPizzas1 element to getElementById, saved it to a local variable called `movingPizzas`, moved it outside of the for loop, and referenced the movingPizzas variable inside the loop.




## Result
![result](https://github.com/JeffShomali/P4-Website-Optimization/blob/master/img/Result.jpeg?raw=true "Logo Title Text 1")


## Resources
Udacity office hours for P4: https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS

Measuring the Critical Rendering Path with Navigation Timing
https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

Google PageSpeed Insights rules: https://developers.google.com/speed/docs/insights/rules

David Walsh blog https://davidwalsh.name/translate3d

Chrome developer tools described here: Chrome Dev Tools tips-and-tricks.
