var eps = require('express');
var app = eps();
app.put('/message/:id',function(req,res){
	var id = req.params.id;
	res.end(require('crypto').createHash('sha1').update(new Date().toDateString()+id).digest('hex'));
	}
);

app.listen(process.argv[2]);

