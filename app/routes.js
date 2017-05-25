'use strict';

module.exports = function (app) {
	app.get('/login', function (req, res, err) {
		res.jsonp({"reason": "login"});
	})

	app.post('/setTask', function (req, res, err) {
		res.jsonp({"reason": "setTask"});
	})

	app.get('/getTasks', function (req, res, err) {
		res.jsonp({"reason": "getTasks"});
	})

	app.put('/updateTask', function (req, res, err) {
		res.jsonp({"reason": "updateTask"});
	})

	app.delete('/removeTask', function (req, res, err) {
		res.jsonp({"reason": "removeTask"});
	})

}
