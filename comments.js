// Create web server






// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var query = url.parse(request.url, true).query;
  var name = query.name;
  var comment = query.comment;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end('Hello ' + name + '!\n\nYour comment was: "' + comment + '"');
});

// Listen on port 8000, IP defaults to
