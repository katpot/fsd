var express = require('express');
var app = express();
app.get('/', function (req, res) {
   res.send('<h1 style=color:blue;>Hello World</h1>');
})
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Server listening at http://%s:%s", "127.0.0.1", port)
})
