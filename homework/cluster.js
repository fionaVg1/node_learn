const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express');
if(cluster.isMaster){
    console.log(`Master ${process.pid} is running`)
    //for workers
    for(let i=0;i<numCPUs;i++){
        cluster.fork();
    }
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`worker ${worker.process.pid} died`)
    })
}else{
    const app = new express();
    app.listen(8080);
    console.log(`Worker ${process.pid} started`)
}