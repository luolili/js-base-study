// 嵌套函数
function addSquare(a, b) {
    //也是闭包：有自己的私有环境和变量的表达式
    //内部函数有外部函数的管辖区域，
    //外部函数不能访问内部函数的变量
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquare(2, 3)
console.log(a)
//作用域链：第一个元素是最里面，最后一个元素是最外面
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3)
console.log(fn_inside)
res = fn_inside(9)
console.log(res)
console.log(outside(2)(3))

//作用域的优先级,in_func--out_func-全局对象
function out_func() {
    var x = 5;
    //内部函数的参数名和外部的变量冲突，in_func优先级高
    function in_func(x) {
        return x * 2;
    }
    return in_func;
}
console.log(out_func()(10))//20

