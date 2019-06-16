/**
process.argv.forEach(function (value){
	console.log(value);
});
/**/
var help = require('./help');
var options = process.argv.slice(2);
	if(options.length < 1){
		help.showOptions();
		return;
	}
		console.log(options[0]);
		
		switch(options[0]){
			case 'a':
			console.log('pid:'+process.pid);
			break;
			case 'b':
			console.log('titles:'+process.title);
			break;
			case 'c':
			console.log('arch:'+process.arch);
			break;
			case 'd':
			console.log('platform:'+process.platform);
			break;
			default:
			help.showOptions();
												
		}