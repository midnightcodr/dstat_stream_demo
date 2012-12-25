( function() {
	var socket=io.connect();
	socket.on('dstat', function(msg) {
		$('#info .new').html(msg.replace(/ /g, '&nbsp;'));
	});
} )();

