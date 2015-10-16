'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('connect', function() {
    plugins.connectPhp.server({
    	port: 8080
    });
});