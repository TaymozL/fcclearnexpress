var ep = require('express');
var app = ep();
var fs = require('fs');
app.get('/books',function(req,res){
	fs.readFile(process.argv[3],function(err,data){
		res.json(JSON.parse(data.toString()));
	});
});
app.listen(process.argv[2]);
