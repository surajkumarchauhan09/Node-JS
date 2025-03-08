const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    console.log(req)
    res.end('Hello World!');
});

server.listen(3000);