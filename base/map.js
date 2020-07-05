var map = new Map()

map.set('li', 3)
map.set('wo', 5)
map.set('ta', 13)
//3,false
//console.log(map.get('li'), map.has('ou'))
//true
//console.log(map.delete('ta'))

var set = new Set()
set.add(1)
set.add(2)
set.add(2)
set.add(1)
//console.log(set)
// for (var i of set) {
//     console.log(i)
// }
// for (var i of map) {
//     console.log(i)
// }
set.forEach((el) => {
    console.log(el)
})
map.forEach((value, key, map) => {
    console.log(value, key)
})