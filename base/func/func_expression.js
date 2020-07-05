//函数表达式
var square = function (num) {
    return num * num;
}
var x = square(3)
console.log(x)//9
//根据条件来定义函数
var myFunc, num;
if (num == 2) {
    //参数可以是对象，面向对象编程
    myFunc = function (obj) {
        obj.name = 'ki';
    }
}
//方法：当一个函数是一个对象的属性的时候，叫方法
