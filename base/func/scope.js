//函数可以指向自己，调用自己
//递归
var foo = function bar() {
    console.log('f')
};
foo()
//bar()
function loop(x) {
    if (x > 3) {
        return;
    }
    //递归：用了函数堆栈
    loop(x + 1);
}
