var help = [
'a) pid',
'b) title',
'c) arch',
'd) platform',
'e) env',
'm) Memory usage',
'u) uptime',
'v) version',
'q) exit'
];

exports.showOptions = function(){
	help.forEach(function(value){
		console.log(value);
	});
};