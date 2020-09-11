const fs = require('fs');
const path = require('path');
const { json } = require('express');
const appDir = process.cwd();
console.log(appDir);
//根据用户名及密码查询用户是否存在的
function isLoginUser(req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    const filePath = path.join(appDir, '/db/user.json');
    let isExist = false;
    var usersBuffer = fs.readFileSync(filePath);
    var users = JSON.parse(usersBuffer);
    var loginUser = users.filter(function(user, index) {
        return user.username === username && user.password === password;
    });
    if (loginUser.length > 0) {
        isExist = true;
    }
    res.end(JSON.stringify({
        isExist: isExist
    }));
}
module.exports = { isLoginUser: isLoginUser };