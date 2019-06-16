zipper = require('zipper').Zipper;
var zipfile = new zipper('./arquivos/arquivo.zip');
zipfile.addFile('aula01.js','aula01.js',function(err){
	if(err) throw err;
	console.log('tudo ok');
});
