/**
 * Header和Body（实战）
 */
const net = require('net');

const response = 
`HTTP/1.1 200OK
Date:Tue,30 Jun 2020 01:00:00 GMT
Content-Type:text/plain
Connection:closed

Hello world
`;
const server = net.createServer(socket=>{
    socket.end(response)
})
server.listen(3000,()=>{
    console.log('server is running')
})