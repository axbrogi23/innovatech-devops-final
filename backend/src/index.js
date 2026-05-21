const http = require('http');
console.log("Conectando a MySQL en el host: ", process.env.DB_HOST);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: "Backend Innovatech funcionando con éxito" }));
});

server.listen(3000, () => {
  console.log('Servidor Backend escuchando en el puerto 3000');
});