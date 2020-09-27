const fetch = require('node-fetch');
const { text } = require('express');
/**
 * 多个资源并发请求 Promise.all
 * 基于时间窗口过滤重复请求
 */
function hash(...args) {
    return args.join(',');
}

function window_it(f, time = 50) {
    let w = {};
    let flag = false;
    return (...args) => {
        return new Promise(resolve => {
            if (!w[hash(args)]) {
                w[hash(args)] = {
                    func: f,
                    args,
                    resolvers: []
                }
            }
            if (!flag) {
                flag = true;
                setTimeout(() => {
                    Object.keys(w).forEach(key => {
                        const { func, args, resolvers } = w[key];
                        const promise = func(...args).then(resp => resp.text()).then(text => {
                            resolvers.forEach(r => {
                                r(text);
                            })
                            flag = true;
                            w = {};
                        });
                    });
                }, time);
            }
            w[hash(args)].resolvers.push(resolve);
        })
    }
}