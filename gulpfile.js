'use strict';

var gulp 		= require('gulp'),
    notify      = require('gulp-notify'),
    nodemon 	= require('gulp-nodemon'),
    browserify  = require('browserify'),
    browserSync = require('browser-sync'),
    source 		= require('vinyl-source-stream'),
    combine     = require('stream-combiner2').obj;

gulp.task('bundle', () => {
    return combine(
        browserify('./app/client/main.js')
        .transform('babelify')
        .bundle(),
        source('bundle.js'),
        gulp.dest('app/public/bundle')
    ).on('error', notify.onError());
});

gulp.task('watch', () => {
    gulp.watch('./app/client/*', gulp.series('bundle'));
});

gulp.task('serve', () => {

    browserSync.init({
        proxy: 'http://localhost:8080',
        port: 80
    })

    nodemon({
        script: 'app/index.js',
        ext: 'js html css',
        env: { 'NODE_ENV': 'development' }
    })
    .on('start', browserSync.reload)
    .on('crash', nodemon.restart);

});

gulp.task('default',
    gulp.series('bundle', gulp.parallel('watch', 'serve'))
)
