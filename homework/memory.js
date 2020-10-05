/**
 * 优化前
 */
function fib2(n){
    if(n == 1 || n == 2){
        return 1;
    }
    return fib2(n-1)+fib2(n-2);
}


/**
 * 利用缓存优化后
 */
function memory(fn,maxSize = 10){
    const cache = [];
    return (...args)=>{  
        const hash = args.join(',');
        const item = cache.find(item=>item.hash === hash); 
        if(item){
            return item.value
        }  
        var result = fn(...args);
        cache.push({hash,value:result});
        if(cache.length>maxSize)  {
            cache.shift();
        }   
        return result;
    }
}
function fib(n){
    if(n == 1 || n == 2){
        return 1;
    }
    return mfib(n-1)+mfib(n-2);
}
const mfib = memory(fib,10)
console.time();
console.log(fib(43));
console.timeEnd();