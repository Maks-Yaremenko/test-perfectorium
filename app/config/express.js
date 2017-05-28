'use strict'

var express    	   = require('express'),
	morgan         = require('morgan'),
	helmet	       = require('helmet'),
	bodyParser     = require('body-parser'),
	methodOverride = require('method-override'),
    config         = require('./index'),
    path           = require('path');

module.exports = function (app) {
    app.use(helmet());
    app.use(bodyParser.urlencoded({limit: '5mb', extended: false }));
    app.use(bodyParser.json({limit: '5mb'}));
    app.use(methodOverride());
    app.set('root', config.root);
    app.set('port', config.port);
    app.use(express.static(path.join(app.get('root'), 'app', 'public')));
    app.use(morgan('dev'));
    app.use(function(req, res, next) {
        res.jsonp({'Error':'Reason: 404 - Not Found'});
    });
};