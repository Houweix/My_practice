// 这是一个socket.io的例子

var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(3000);

io.on('connection', function (socket) {
    // socket代表与客户端之间的连接
    //emit代表发送数据
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});