const express = require('express');
let router = express.Router();
let user = require('../controller/user.js');
router.post('/api/user/login',user.isLoginUser);
module.exports = router;
