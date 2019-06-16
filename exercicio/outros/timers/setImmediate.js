/*semelhante a setTiemZero*/
/*executa primeiro este*/
console.log('A'+ new Date());
/*por ultimo este*/
setImmediate(function(){
	console.log('I'+ new Date());
});
/*segundo este*/
console.log('B' + new Date());