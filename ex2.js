var port = process.argv[2];
var fileP = process.argv[3];
var ep = require('express');
var app = ep();
app.use(ep.static(fileP));
app.listen(port);

