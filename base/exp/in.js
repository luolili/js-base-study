
var arr = ['wee', 're', 'yu'];
//1是数组元素的索引
console.log(1 in arr, 'length' in arr)

var today = new Date(2020, 2, 22)
console.log(today instanceof Date)

//spread syntax:扩展语法
var parts = ['2', '3'];
var lyrics = ['we', ...parts, 'dd']

//Comprehensions
//[for (i of [2, 3]) i * i];
function add(x, y, z) {
    return x + y + z;
}
var args = [2, 3, 4];
var r = add(...args)
console.log(r)