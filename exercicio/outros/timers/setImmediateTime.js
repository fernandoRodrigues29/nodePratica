//e mais rapido que settimeout
console.time('T');
setImmediate(function(){
	console.timeEnd('T');
});
