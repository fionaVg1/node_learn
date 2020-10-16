const app = require('express')();
app.get('/',(req,res)=>{
    res.setHeader('Set-Cookie',"abc=123");
    res.send('ok');
})
app.listen(3000);