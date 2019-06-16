var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('rodando no portao 3000!');
});

/**
var server = http.createServer(
function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h1>Hello World</h1>");
	response.write("<p>Rodando feito pião</p>");
	response.end();
});
//server.listen(3000);
server.listen(3000,function(){
console.log('Servidor Rodando feito pião!');
})
/**/
