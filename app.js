const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/hello'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('hello world');
    }else{
        res.statusCode = 404;
        res.end('Error. Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
});
