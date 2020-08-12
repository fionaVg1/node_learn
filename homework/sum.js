/**
 * 请在 sum函数中调用此函数，完成数值计算
 * @param {*} a 要相加的第一个值
 * @param {*} b 要相加的第二个值
 * @param {*} callback 相加之后的回调函数
 */
function asyncAdd(a,b,callback) {
    setTimeout(function(){
     callback(null, a+b)
    },1000)
  }
  
  /**
   * 请在此方法中调用asyncAdd方法，完成数值计算
   * @param  {...any} rest 传入的参数
   * 该方法耗时6s
   */
  async function sum(...rest) {
    // 请在此处完善代码
    let result = rest.shift();
    for(let num of rest){
        result = await new Promise(resolve=>{
            asyncAdd(result,num,(_,res)=>{
                resolve(res);
            })
        })
    }    
    return result;
  }
  
  let start = new Date().getTime();
  sum(1, 2, 3, 4, 5, 6).then(res => {
    // 请保证在调用sum方法之后，返回结果21
    console.log(res)
    let end = new Date().getTime();
    console.log(`程序执行共耗时: ${(end - start)/1000}s`)
  });