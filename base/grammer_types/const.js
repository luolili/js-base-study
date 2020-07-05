var name = 'ff'
// Uncaught SyntaxError: 
//Identifier 'name' has already been declared
//常量名不可与变量名一样
const name = '';

//常量的属性不受保护
const my_object = { 'key': 'value' }
my_object.key = 'other'
console.log(my_object.key)

const my_arr = ['hu', 'li']
my_arr.push('js')
console.log(my_arr)