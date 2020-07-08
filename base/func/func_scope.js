//函数内部定义的变量不能在函数外部访问
//函数的管辖范围
//定义在全局范围的函数，可访问任何变量
//函数里面的函数，可访问他的父亲函数的变量
// global scope
var num1 = 2,
    num2 = 9,
    name = 'er';
//global scope
function multiply() {
    return num1 * num2;

}
//嵌套的函数
function getScore() {

    var num1,
        num2;
    function add() {
        return name + "score:" + (num2 + num1)
    }
    //返回内部函数
    return add();
}

