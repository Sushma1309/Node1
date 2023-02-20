const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Node JS');
        res.end();
    } 
    else if (req.url === '/api') {
        // res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
}).listen(3000)