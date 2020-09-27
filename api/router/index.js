const express = require('express');
let router = express.Router();
let user = require('../controller/user.js');
let music = require('../controller/music.js');
router.post('/api/user/login',user.isLoginUser);
router.get('/api/getMusicByName',music.getMusicByName);
module.exports = router;