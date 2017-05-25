'use strict';

var gulp        = require('gulp'),
	nodemon     = require('gulp-nodemon'),
	browserSync = require('browser-sync');

gulp.task('default', function() {
	
	browserSync.init({
		proxy: "http://localhost:8080",
		port: 80
	});

    nodemon({ 
    	script: 'app/index.js', 
    	ext: 'js html',
    	env: { 'NODE_ENV': 'development' }
    }).on('start', browserSync.reload )

});