const fetch = require('node-fetch');
/**
 * 应对不稳定的网络环境 -- 指数补偿
 * @param {*} url 
 */
function request(url) {
    let resolved = false;
    let t = 1;
    return new Promise((resolve) => {
        function doFetch() {
            if (resolved || t > 16) {
                return
            }
            fetch(url).then(res => {
                return res.text();
            }).then(data => {
                console.log(t);
                if (!resolved) {
                    resolve(data);
                    resolved = true;
                }
            })
            setTimeout(() => {
                doFetch();
                t *= 2;
            }, t * 100)
        }
        doFetch();
    })
}
request('https://www.baidu.com').then(data=>{
    console.log(data.length);
})