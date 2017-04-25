// ---
// COMPRESSJS TASK
// (puts files together, minifies and saves as 'scripts.min.js')
// ---

// plugins
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

var config = require('../config').compressjs;

// task
gulp.task('compressjs', function() {
    gulp.src(config.src)
        .pipe(uglify())
        .pipe(gulp.dest(config.dest));
});
