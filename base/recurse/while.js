var i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 3);//1 2 3

while (true) {
    console.log('无限循环')
}

//获得对象的可枚举的属性：for in,也可以循环Array

var car = {};
car.name = 'Fork'
car.model = 'M'
for (p in car) {
    //p:属性名，car[p]:属性值
    console.log(p + ",value:" + car[p])
}
//for of:
var arr = [1, 3, 4, 5]
arr.foo = 'fo';
for (i in arr) {
    console.log(i)
}
for (var i in arr) {
    console.log(i)
}
for (var i of arr) {
    console.log(i)
}