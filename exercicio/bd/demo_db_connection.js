var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mercado"
});
/**
con.connect(function(err){
	if(err) throw err;
	console.log("Connectado me Rei!");
});
**/
con.connect(function(err){
	if(err) throw err;
	con.query("SELECT * FROM produto", function (err, result, fields){
		if(err) throw err;
		console.log(result);
	});
});