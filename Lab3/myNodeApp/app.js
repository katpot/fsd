var http = require('http');
var date = require('./modules/dateTime');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1 style='color:blue;'>Welcome Node JS APP</h1>");
    res.write("<h1 style='color:black;'>Current date and time are: <span style='color:red;'>" + date.Datetime() + "</span></h1>");
    res.end();
}).listen(8080);
