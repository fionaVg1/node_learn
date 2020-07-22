//因为浏览器端不能跑tcp协议，所以这里用node起客户端
const net = require('net');
var tcpClient = net.Socket();
tcpClient.connect({
    host:'127.0.0.1',
    port:3000
},function(){
    console.log('you have connected');
});
tcpClient.on('data',function(data){
    console.log('i have received message:'+data.toString());
});
setTimeout(function(){
    tcpClient.write('hello, i am client1')
},2000);