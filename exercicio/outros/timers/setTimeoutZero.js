/*executa primeiro este*/
console.log('A'+ new Date());
/*por ultimo este*/
setTimeout(function(){
	console.log('I'+ new Date());
},0);
/*segundo este*/
console.log('B' + new Date());