
//区分大小写，unicode编码
//var 可声明局部变量和全局变量
var fruit = 'fb';
var Fruit = 'Ft';
var book_num = 9;
var _name = 'mee';
var temp2 = 'h'
var $ref = 'dd'
//没有初始化的比例，默认是undefined
var input;
if (input == undefined) {
    console.log('input is undefined')
}

var myArray = [];
//true:布尔类型环境里 undefined = false
if (!myArray[0]) {
    console.log('myArray[0] undefined')
}
var a;
console.log(a + 2)//NAN
var b = null;//null==0
console.log(b * 3)//0,对null变量求值的时候null=0