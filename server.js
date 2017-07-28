var http = require('http');
var stuff = require('./stuff');

stuff.randomText();
// stuff.randomText2();

http.createServer(function(request, response) {
  response.writeHead(200, { "Content-type": "text/plain"});
  response.write(stuff.randomText());
  response.end();
}).listen(8000);
