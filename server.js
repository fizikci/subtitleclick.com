var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('SubtitleClick is gonna be here!');
}).listen(3001);