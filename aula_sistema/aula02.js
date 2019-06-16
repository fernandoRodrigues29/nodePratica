var http = require('http');

var server = http.createServer(
function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	if(request.url == '/'){
		response.write("<h1>Página Principal</h1>");
	}else if(request.url == '/contato'){
		response.write("<h1>Página de Contato</h1>");
	}else if(request.url == '/clientes'){
		response.write("<h1>Página Clientes</h1>");
	}else{
		response.write("<h1>Pagina não Encontrada</h1>");
	}
	response.write("<p>Rodando feito pião</p>");
	response.end();
});
//server.listen(3000);
server.listen(3000,function(){
console.log(' Aula 02 - Servidor Rodando feito pião!');
});
