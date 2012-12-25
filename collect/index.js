var spawn=require('child_process').spawn
	, cmd=spawn('dstat', ['--nocolor']);
var Collect=function(io) {
	cmd.stdout.on('data', function(data) {
		var txt=new Buffer(data).toString('utf8', 0, data.length);
		if(txt!=='\n') {
			io.sockets.emit('dstat', txt);
		}
	});
};

exports.Collect=Collect;
