//字面量
//数组字面量
var a = [9];
console.log(a.length)
var fish = ['lion', , 'angle']
console.log(fish[1])//undefined
var Fish = ['li', 'uu', ,]
console.log(Fish.length)//3
console.log(Fish[2])//undefined
//boolean
//integers
console.log(012)//10,8进制
//float
console.log(-1.22)
console.log(-1.22e+23)
console.log(-1.22e-23)
//object
var car = {
    'name': 'gt',
    '!': 'h!',
    '': 'empty str',
    a: 'ff',
    2: 'tt'
}
//不合法key,必须是数组访问方式
console.log(car['!'])
console.log(car[''])

//必须加''访问
console.log(car['a'])
console.log(car['2'])