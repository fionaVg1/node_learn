const ws = require('nodejs-websocket');
const arr = {};
var server = ws.createServer(function(socket) {   
    socket.on('text', function(str) {      
        var data = JSON.parse(str);
        if (arr[data.username]) {
            //消息推送给所有客户端
            for (var item in arr) {
                arr[item].sendText(JSON.stringify({
                    username: data.username,
                    text: data.message
                }));
            }
        } else {
            //第一次连接
            arr[data.username] = socket;
        }
    });
}).listen(4000);