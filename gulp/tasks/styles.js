// SСSS -> CSS
var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var postcss = require('gulp-postcss');
var syntax = require('postcss-scss');
var gcmq = require('gulp-group-css-media-queries');
var gutil = require('gulp-util');
// var unprefix = require('postcss-unprefix');
var roundSubpixels = require('postcss-round-subpixels');
var autoprefixer = require('autoprefixer')({grid: true, browsers: ['>1%']});
var prod = gutil.env.prod;

gulp.task('styles', config.wrapPipe(function(success, error) {
    return gulp.src(config.styles.src)
        .pipe($.plumber())
        // .pipe(prod ? gutil.noop() : $.sourcemaps.init())
        .pipe($.sass({outputStyle: 'nested'}).on('error', $.sass.logError))
        .pipe($.postcss([
            // unprefix,
            roundSubpixels,
            autoprefixer
            ]
        ))
        .pipe(gcmq())
        .pipe(prod ? $.csso() : gutil.noop())
        // .pipe(prod ? gutil.noop() : $.sourcemaps.write())
        .pipe(gulp.dest(config.styles.dest))
}));
