const express = require('express');
const app = express();
const router = require('./router/index.js')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',router);
app.listen(3000);