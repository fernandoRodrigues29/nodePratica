var config = require('./config.js');
module.exports.generate =  function(){
	return Math.floor(Math.random()*config.max);
}
/*
module.exports.generate =  function(){
	return Math.floor(Math.random()*global.max);
}
*/