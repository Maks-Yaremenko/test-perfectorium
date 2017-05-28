'use strict';

var gulp 		= require('gulp'),
    nodemon 	= require('gulp-nodemon'),
    browserify  = require('browserify'),
    browserSync = require('browser-sync'),
    source 		= require('vinyl-source-stream');

gulp.task('bundle', () => {
    return browserify('./app/client/main.js')
        .transform('babelify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('app/public/bundle'));
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

});

gulp.task('default',
    gulp.series('bundle', gulp.parallel('watch', 'serve'))
)
