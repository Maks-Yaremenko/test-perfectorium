'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
global.APP_DIR       = __dirname;

var express = require('express'),
	app     = express(),
	path    = require('path'),
	http    = require('http'),
	conf    = require(APP_DIR + '/config');

var server = http.createServer(app);
require(path.join(APP_DIR, 'routes.js'))(app);
require(path.join(APP_DIR, 'config', 'express'))(app);

server.listen(conf.port, function(){
  console.error(`Express server listening on port ${conf.port} in ${app.get('env')} mode'`);
});

var exports = module.exports = app;