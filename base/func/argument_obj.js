//arg是类数组对象
function concat(sep) {
    var res = '';
    var i = 0;
    for (i = 0; i < arguments.length; i++) {
        res += arguments[i] + sep;
    }
    return res;
}
//默认参数
function multiply(a, b = 9) {
    return a * b;
}
//剩余参数
function mul(mul, ...args) {
    return args.map(x => mul * x);
}
var arr = mul(2, 1, 9)
console.log(arr)