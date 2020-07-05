//let 没有变量提升：ReferenceError
console.log('a=', a1)
let a1 = 9;


foo();
//函数声明可以提升
function foo() {
    console.log('bar')
}
baz();
//函数表达式不会提升，TypeError,baz is not a function
var baz = function () {
    console.log('bb')
}