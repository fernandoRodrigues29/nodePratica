var korsole = {
	log:function(msg){
		process.stdout.write(msg+'\n');
	},
	error:function(msg){
		process.stderr.write(msg+'\n');
	}
};
korsole.log('A TTY'+ !!process.stdout.isTTY);
korsole.error('B TTY'+ !!process.stderr.isTTY);