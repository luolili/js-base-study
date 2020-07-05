//函数域是指函数声明时的所在的地方，或者函数在顶层被声明时指整个程序。

//函数可以调用本身
function factorial(n) {
    if (n == 0 || n == 1) {
        return 0;
    }
    return factorial(n - 1) * n;
}
