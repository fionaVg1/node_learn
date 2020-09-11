const fs = require('fs');
const path = require('path');
const getUsers = require('../mock/index.js');
const users = getUsers();
const filePath = path.join(__dirname, 'user.json');
fs.writeFileSync(filePath, JSON.stringify(users.user));