const express = require('express')
const app = express()
app.get('/greeting',(req,res)=>{
    res.send('Hi');
})
/**
 * 201:201 Created 是一个代表成功的应答状态码，表示请求已经被成功处理，并且创建了新的资源。
 * 新的资源在应答返回之前已经被创建。同时新增的资源会在应答消息体中返回，其地址或者是原始请求的路径，或者是 Location 首部的值。
 * 这个状态码的常规使用场景是作为 POST 请求的返回值。
 * fetch('/product',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name:'test'})});
 */
app.post('/product',(req,res)=>{
    const contentType = req.headers['content-type'];    
    let requestText = '';
    let body = null;
    req.on('data',(buffer)=>{
        requestText += buffer;
        console.log(buffer.toString('utf-8'));
    })
    req.on('end',()=>{
        switch(contentType){
            case 'application/json':
                body = JSON.parse(requestText);
                res.header('content-type','application/json');
                res.status(201).send(JSON.stringify({status:'ok'}));
                break;
        }
    })
})
/**
 * fetch('/product/123',{method:'PUT'});
 */
app.put('/product/:id',(req,res)=>{
    console.log(req.params.id);
    res.sendStatus(204);
})
/**
 * fetch('/product/123',{method:'DELETE'});
 */
app.delete('/product/:id',(req,res)=>{
    console.log(req.params.id);
    res.sendStatus(204);
});
app.listen(3300,()=>{});