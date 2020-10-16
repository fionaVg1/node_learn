const express = require('express')
const app = express()
const path = require('path')
const appDir = process.cwd();
app.use(express.static(path.join(__dirname,'lib')))
console.log(  path.join(__dirname,'/lib')+'...path');
console.log(  path.join(appDir)+'...path2');
app.get('/',(req,res)=>{
    res.send(`
    <html>
        <body>
        <script src='lib/require.js'></script>
        <script>
            require.path = '/'
            require(['add','mult'],(add,mult)=>{
                console.log(add(3,5))
                console.log(mult(5,3))
            })
        </script>
        </body>
    </html>
    `)
})
app.listen(3000);