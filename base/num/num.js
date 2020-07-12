//数字都是双精度的，double-precision
//8进制,0开头
var n = 033
//数字对象
var max_val = Number.MAX_VALUE
var not_num = Number.NaN
var pos = Number.POSITIVE_INFINITY
var neg = Number.NEGATIVE_INFINITY
console.log(max_val, not_num, pos, neg)
//方法
var i = Number.parseInt('33')
var f = Number.parseFloat('2.34')
var fi = Number.isFinite(i)
var isInt = Number.isInteger(f)
var isNan = Number.isNaN(fi)
var si = Number.isSafeInteger(9)
console.log(i, f, fi, isInt, isNan, si)
//Math对象
var min = Math.min(2, 3);
console.log(min);
//Date,没有任何属性
var today = new Date();
var someday = new Date(2020, 2, 2);
var month = someday.getMonth()
var full_year = someday.getFullYear()
var time = someday.getTime();
console.log(month, full_year, time);

var day = Date.parse('2020-02-22')
console.log(day);//1582329600000