const fs = require('fs');
const path = require('path');
const { json } = require('express');
const appDir = process.cwd();
//根据音乐名获取音乐
function getMusicByName(req,res){
    var name = req.query.name;
    const filePath = path.join(appDir,'/db/music/file/'+name+'.mp3');
    var musicBuffer = fs.readFileSync(filePath);
    res.header("Access-Control-Allow-Origin", '*');
    res.end(musicBuffer);
}
module.exports = {getMusicByName:getMusicByName};