var arquivo = require("fs");
var path = './arquivos/novo.txt';
/*ler*/
/**
arquivo.readFile("./arquivos/clubes.txt",function(err,data){
	if(err)throw err;
	console.log(data.toString());
});
/**/
/*escrever*/
/**
arquivo.writeFile("./arquivos/novoclubes.txt","criando arquivo com nodejs! ",function(err){
	if(err)throw err;
	console.log('doc criado com sucesso!');
});
/**/

arquivo.exists(path,function(resultado){
	if(!resultado){
		arquivo.writeFile(path,"criando arquivo com nodejs! ",function(err){
			if(err)throw err;
			console.log('doc criado com sucesso!');
		});
	}else{
		console.log('arquivo ja existente, tente outro nome!');
	}
});

