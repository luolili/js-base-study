var content = `it is 
a long text
for me
`
//console.log(content)
var name = 'li er'
var age = 2
var welcome = `hello,${name}, my age:${age}`
//console.log(welcome)
var str_len = name.length
//5
//console.log(str_len)
var char1 = name[0]
var char2 = name[10]
//console.log(char1)
//undefined
//console.log(char2)
name[0] = '0'
//li er 字符串是不可变的
//console.log(name)
//console.log(name.toUpperCase())
//console.log(name.toUpperCase().toLowerCase())
//3
//console.log(name.indexOf('er'))
//-1
// console.log(name.indexOf('erl'))
//不包含2
console.log(name.substring(0, 2))
console.log(name.substring(4))