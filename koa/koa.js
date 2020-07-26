const http = require('http');
class Koa{
    constructor(){

    }
    middleware(){

    }
    use(){

    }
    listen(port,callback){
        const server = http.createServer((req,res)=>{
            this.middleware(req,res);
        });
        server.listen(port,callback);
    }
    use(middleware){
        this.middleware = middleware;
        return this;
    }
}
module.exports = Koa;