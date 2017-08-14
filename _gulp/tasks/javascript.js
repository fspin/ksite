// ---
// JS TASK &--reload
// ---

// plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'), // from here on...
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel');

// configfile
var config = require('../config').js;

// tasks
gulp.task('js', ['js-babel'], function () {
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(concat(config.concatFilename))
        .pipe(gulp.dest(config.jekyllJsDest))
        .pipe(gulp.dest(config.jsDest));
});

gulp.task('js-babel', function () {
    return gulp.src(config.srcBabel)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('es2015.concat.js'))
        .pipe(sourcemaps.write('.'))
        // .pipe(gulp.dest(config.jekyllJsDest))
        .pipe(gulp.dest(config.jsDest));
});



gulp.task('js--reload', ['js', 'js-babel', 'browsersyncReload']);
