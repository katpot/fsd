var http = require('http');
 var options = {
 hostname: '192.168.69.25',
 port: '8095',
 path: '/hello.html'
 };
 function handleResponse(response) {
 var serverData = '';
 response.on('data', function (chunk) {
 serverData += chunk;
 });
 response.on('end', function () {
 console.log(serverData);
 });
 }
 http.request(options, function(response){
 handleResponse(response);
}).end();
