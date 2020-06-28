const http = require('http');

const requestListener = (req, res) => {
  // req, res are streams
  res.write('Hello World\n');
  res.end();
  // Equivalent to
  // res.end('Hello World\n');
}

// const server = http.createServer(requestListener);
const server = http.createServer();
server.on('request', requestListener)

server.listen(4242, () => {
  console.log('Server is running...');
});
