var http = require('http');

var server = http.createServer(
function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h1>Hello World</h1>");
	response.write("<p>Rodando feito pi�o</p>");
	response.end();
});
//server.listen(3000);
server.listen(3000,function(){
console.log('Servidor Rodando feito pi�o!');
});
