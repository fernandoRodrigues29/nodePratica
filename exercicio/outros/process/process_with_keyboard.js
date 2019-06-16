/**
process.argv.forEach(function (value){
	console.log(value);
});
/**/
var help = require('./help');
var keyboard = require('./keyboard');
/**/
keyboard.onReadable(function (option) {
		console.log(option.length);	
			switch(option){
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
				case 'e':
				console.dir(process.env);
			break;
				case 'm':
				console.log(process.memoryUsage());
			break;
				case 'u':
				console.log(' uptaime '+process.uptime());
			break;
				case 'v':
				console.log(process.versions);
			break;			
				case 'q':
				process.exit();
			break;				
			default:
				help.showOptions();
		}
});

process.on('exit',function (){
	console.log('vai te embora!');
});
/**/		