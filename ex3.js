var filep = process.argv[3];
var port = process.argv[2];
var ep = require('express');
var app = ep();
app.set('views',filep);
console.log(filep);
app.set('view engine','jade');
app.get('/home',function(req,res){
	res.render('index',{date:new Date().toDateString()});
	});
app.listen(port);
