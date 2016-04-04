var port = process.argv[2];
var ep = require('express');
var app = ep();
app.get('/home',function(req,res){
	res.end('Hello World!');
	});
app.listen(port);

