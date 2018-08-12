const http = require('http');
const code = require('./modules/code');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let str;
  code.code(function(data){
      return str = data.name + data.age;
  });
  res.end(str);

});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});