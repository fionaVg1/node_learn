const koa = require('Koa');
const session = require('koa-session');
const app = new koa();
app.keys = ['koa node js'];
app.use(session({
    key:'koa:session',
    maxAge:24*60*60*1000,
    overwrite:true,
    httpOnly:true,
    signed:true,
    rolling:true
},app));
app.use(ctx=>{
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = n+ ' views';
});
app.listen(3000,()=>{
    console.log('server is running on localhost : 3000');
});