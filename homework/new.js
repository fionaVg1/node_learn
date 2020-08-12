function myNew(constructor, ...rest) {
    // 请在此处完善代码，不能直接使用 new 操作符
    if(typeof constructor !== 'function'){
        return constructor;
    }
    const _constructor = Object.create(constructor.prototype);
    const obj = constructor.apply(_constructor,rest);
    if(typeof obj === 'object'){
        return obj;
    }
    return _constructor;
}

function Fun(name, sex) {
    this.name = name
    this.sex = sex
}
Fun.prototype.getUserInfo = function() {
    return `我的姓名${this.name},我的性别${this.sex}`
}

const fun = myNew(Fun, '子君', '男')
    // 我的姓名子君，我的性别男
console.log(fun.getUserInfo())