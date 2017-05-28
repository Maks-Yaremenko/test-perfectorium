'use strict';

var config = {
	env: process.env.NODE_ENV || 'development',
	root: process.cwd(),
	port: process.env.PORT || 8080
};

module.exports = config;