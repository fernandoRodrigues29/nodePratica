var http = require('http'),arquivo = require("fs");
var server = http.createServer(
function(request,response){
	
	if(request.url == '/'){
		//__dirname e uma constante que sabe onde o diretorio esta
		arquivo.readFile(__dirname+'/arquivos/principal.html',function(err,html){
		response.writeHead(200,{"Content-Type":"text/html"});
		if(err) response.write('arquivo nao localizado,escreva direito na proxima vez!');
		response.write(html);
		response.end();
	});

	}else if(request.url == '/contatos'){
		arquivo.readFile('./arquivos/contatos.html',function(err,html){
		response.writeHead(200,{"Content-Type":"text/html"});
		if(err) response.write('arquivo nao localizado,escreva direito na proxima vez!');
		response.write(html);
		response.end();
	});

	}else{
		 response.write('modulo nao existente,escreva direito na proxima vez!');
		 response.end();
	}
});
//server.listen(3000);
server.listen(3000,function(){
console.log(' Aula 04 - Servidor Rodando feito piao!');
console.log(__dirname);
});
