const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.end('Błąd serwera');
            } else {
                res.end(data);
            }
        });
    } else if (req.method === 'GET' && req.url.startsWith('/result')) {
        const query = url.parse(req.url, true).query;
        const name = query.cokolwiek;
        res.end(`<h1>${name}</h1>`);
    } else {
        res.end('Nie znaleziono strony');
    }
});

server.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});