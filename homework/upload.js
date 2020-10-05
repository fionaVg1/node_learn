const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
//工厂方法
const fileupload = require('express-fileupload');
//中间件
const bodyParser = require('body-parser');
const { send } = require('process');
app.use(express.static(path.join(__dirname, '/')))
app.get('/submit',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"submit.html"))
});
app.get('/submitBase64',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"submitBase64.html"))
});
app.post('/submit',fileupload(),(req,res)=>{
    console.log(req.files)
    req.files.file.mv(path.resolve(__dirname,'img/b.jpg'))
    res.status(201).send('ok');
});
app.post('/submitBinary',fileupload(),(req,res)=>{
    console.log(req.files)
    req.files.file.mv(path.resolve(__dirname,'img/c.jpg'))
    res.status(201).send('ok');
});
app.post('/submitBase64',bodyParser.json(),(req,res)=>{
    const buffer = new Buffer(req.body.data,'base64');
    fs.writeFileSync(path.resolve(__dirname,'img/a.jpg'),buffer);
    res.status(201).send('ok');     
})
app.listen(3000)