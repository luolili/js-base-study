var arr = [1, 2, 'ha', true]

//console.log(arr.length)
//arr.length = 5
//[ 1, 2, 'ha', true, <1 empty item> ]
//console.log(arr)
//arr.length = 2
//[ 1, 2 ]
//console.log(arr)
//arr[2] = 'yu'
//[ 1, 2, 'yu', true ]
//console.log(arr)
//arr[6] = 'ao'
//[ 1, 2, 'ha', true, <2 empty items>, 'ao' ]
//console.log(arr)
//2
//console.log(arr.indexOf('ha'))
//-1
//console.log(arr.indexOf('hao'))
//0-2
//console.log(arr.slice(0, 3))
//console.log(arr.slice(3))
//false
//console.log(arr.slice(), arr === arr.slice())
//arr.push('wo')
//[ 1, 2, 'ha', true, 'wo' ]
//console.log(arr)
//arr.pop()
//[ 1, 2, 'ha', true ]
//console.log(arr)
//remove first
//arr.shift('first')
//console.log(arr)
//5,add first
//console.log(arr.unshift("first"))
//[ 1, 2, 'ha', true ]
//console.log(arr.sort())
//console.log(arr.reverse())
//返回删除的元素
//console.log(arr.splice(2, 1, 'add'))
//just add,not remove
//console.log(arr.splice(2, 0, 'add'))
//console.log(arr)
//false
//console.log(arr.concat([0, 9]), arr === arr.concat([0, 9]))

//console.log(arr.join('--'))
for (var i in arr) {
    console.log(i, arr[i])
}