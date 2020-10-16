/**
 * 自己实现require.js
 */
let modules = {};
function define(name,func){
    modules[name] = func
}

function lookup(name){
    return require.path + name + '.js'
}
function require(deps,callback){
    function loadModule(name){
        return new Promise((resolve)=>{
            const script = document.createElement('script');
            script.src = lookup(name);
            script.addEventListener('load',()=>{
                resolve(modules[name]);
            })
            document.body.appendChild(script)
        })
    }
    const promises = deps.map(name =>loadModule(name))
    Promise.all(promises).then(modules=>{
        callback(...modules)
    });
}