const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // let requestFile = './public';
    let requestFile =  request.url === '/' ? `./public/index.html` : `./public${request.url}`;


    if (!fs.existsSync(requestFile)) {
        console.error(requestFile);
        requestFile = './public/404.html';
    }

    const body = fs.readFileSync(requestFile)  // Кодировку убрал, так как картинки с ней не загружались

    if (/.svg$/i.test(requestFile)) {
        response.writeHead(200, {'Content-Type': 'image/svg+xml'})
    }

    if (/.css$/i.test(requestFile)) {
        response.writeHead(200, {'Content-Type': 'text/css'})
    }

    if (/.js$/i.test(requestFile)) {
        response.writeHead(200, {'Content-Type': 'application/javascript'})
    }

    response.end(body);
});

const port = process.env.PORT || 3000;

server.listen(port);
