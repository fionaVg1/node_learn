const express = require('express');
const app = express();
app.get('/301',(req,res)=>{
    res.redirect(301,'def');
});
app.get('/def',(req,res)=>{
    res.send('This is def(Get)');
})
app.listen(3400,()=>{})