var person = {
    name: 'kio',
    age: 2,
    'middle-sch': 'sh h',
    score: null
}
//console.log('name:', person.name)
//console.log('ms:', person["middle-sch"])

//name 是不是person 的属性:true,false,true
//console.log('name' in person, 'sex' in person,'toString' in person)
//false
//console.log(person.hasOwnProperty('toString'))

for (var key in person) {
    console.log(key, person[key])
}