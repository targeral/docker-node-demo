const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'text/plain'});

    response.end('Zhang Si Ji Dalao');
}).listen('8888');

console.log(`Server running at port 8888`);