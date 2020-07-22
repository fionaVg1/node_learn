//整个node系统都是基于事件监听完成的,万恶皆回调
//开启tcp服务
//客户端通讯是通过服务器转发
const net = require('net')
const socketContent = [];
const server = net.createServer();
server.on('connection', function(socket) {
    socketContent.push(socket);
    socket.on('data', function(data) {
        var dataString = data.toString();
        socket.write('you give me:' + dataString);
    });
});
setTimeout(function(){
    socketContent[0].end('连接时间到了，断开连接');
},10000);
server.listen(3000);