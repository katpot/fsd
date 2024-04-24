var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: false }));
// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   res.send(`<center><h1 style=color:red>EXPRESS GET SERVER</h1><br><ul><li><a href=./list_user>Redirect</a>
</li><br><li><a href=./express1>Redirect Hello Page</a></li></ul></center>`);
})
// This responds a POST request for the homepage
app.get('/express1', function (req, res) {
   res.send('<h1 style=color:red>RED Hello WORLD</h1><br><a href=./>GoHome</a>');
})

app.delete('/del_user', function (req, res) {
   res.send('<h1 style=color:red>Hello DELETE</h1>');
})
app.get('/list_user', function (req, res) {
   res.send(`<h1 style=color:blue>Page Listing</h1>
<a href=./>GoHome</a>`);
})
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
