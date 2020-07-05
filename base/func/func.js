//函数定义/声明
function square(num) {
    return num * num;
}
//函数改变参数的属性,对外部可见
function changeObj(theObj) {
    theObj.name = 'wee';
}

var mycar = {
    'name': 'newcar',
    'price': 22
}
changeObj(mycar)
y = mycar.name
console.log('car name:', y)