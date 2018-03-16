var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');    //最后一个输出一般都写end，如果没有end浏览器会一直请求数据
}).listen(3000);
console.log("HTTP server is listening at port 3000.");
