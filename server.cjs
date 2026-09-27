const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const routes = {'/nattapong-resume.pdf':'nattapong-resume.pdf','/':'index.html','/index.html':'index.html','/style.css':'style.css','/hero.webp':'hero.webp','/app.js':'app.js'};
http.createServer((req,res) => {
  const file = routes[new URL(req.url, 'http://localhost').pathname];
  if (!file) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(path.join(__dirname, 'dist', file), (err,data) => {
    if(err) { res.writeHead(500); res.end('Unable to load page'); return; }
    const mime = file.endsWith('.pdf') ? 'application/pdf' : file.endsWith('.js') ? 'text/javascript; charset=utf-8' : file.endsWith('.css') ? 'text/css; charset=utf-8' : file.endsWith('.webp') ? 'image/webp' : 'text/html; charset=utf-8';
    res.writeHead(200, {'Content-Type': mime});
    res.end(data);
  });
}).listen(4173,'127.0.0.1',() => console.log('Local: http://127.0.0.1:4173'));
