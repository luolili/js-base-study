//二元运算符:操作数1+操作符+操作数2
var a = 3 + 4;

//一元运算符
a++;
++a;
//asignment op
var b = 9;
var c = a;
var d = a + 3;
//var d +=a;
b / c;
b % c;
b += c;
b -= c;
b /= c;
b *= c;
b ** c;//求幂
b <<= c;//left shift:左移位
b >>= c;
//解构
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;

