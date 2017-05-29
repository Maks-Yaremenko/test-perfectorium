'use strict';

import  User  from './models/user'; 
import  Utils  from './services/utils';


document.getElementById("clickMe").onclick = function () {
	console.log(123);
	console.log(User.login());
};

document.getElementById("register").onclick = function () {
	console.log(123);
	console.log(Utils.hello());
};
