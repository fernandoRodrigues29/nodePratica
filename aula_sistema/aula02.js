var http = require('http');

var server = http.createServer(
function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	if(request.url == '/'){
		response.write("<h1>P�gina Principal</h1>");
	}else if(request.url == '/contato'){
		response.write("<h1>P�gina de Contato</h1>");
	}else if(request.url == '/clientes'){
		response.write("<h1>P�gina Clientes</h1>");
	}else{
		response.write("<h1>Pagina n�o Encontrada</h1>");
	}
	response.write("<p>Rodando feito pi�o</p>");
	response.end();
});
//server.listen(3000);
server.listen(3000,function(){
console.log(' Aula 02 - Servidor Rodando feito pi�o!');
});
