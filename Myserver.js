const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
let requestCount = 0;
// comment

const server = http.createServer((req, res) => {
  requestCount++;
  console.log('request ' + requestCount+ ' received ...')
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(req.headers['user-agent']);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//