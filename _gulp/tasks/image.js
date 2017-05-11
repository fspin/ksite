// ---
// Image Compressor
// ---

// plugins
var gulp = require('gulp'),
    image = require('gulp-image');

// configfile
var config = require('../config').image;

// tasks
gulp.task('image', function () {
    return gulp.src(config.src)
        .pipe(image(config.imageConfig))
        .pipe(gulp.dest(config.dest));
});

gulp.task('js--reload', ['js', 'browsersyncReload']);
