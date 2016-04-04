 var ep = require('express');
var app= ep();
//app.use(require('stylus').middleware(process.argv[3]));
app.use(ep.static(process.argv[3]));
app.listen(process.argv[2]);
