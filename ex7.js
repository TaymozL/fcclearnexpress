var ep = require('express');
var app = ep();
app.get('/search',function(req,res){
	res.send(req.query);
});
app.listen(process.argv[2]);
