//delete
var person = {
    name: 'fg',
    age: 22
}
//delete person.name;//删除对象的属性
var res = delete person['name'];
console.log(person, res)//res=true
//delete 数组元素，数组长度不变
var arr = new Array('1', '3', '8')
var r = delete arr[2];
console.log(arr, arr.length, r, arr[2] == undefined);//true
console.log(arr[2] in arr)//false

