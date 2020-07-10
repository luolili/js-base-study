//闭包
var pet = function (name) {
    var getName = function () {
        return name;
    }
    //返回内部函数，把他暴露给外部函数
    return getName;
}
myPet = pet('yd')
myPet()

var createPet = function (name) {
    var sex;

    return {
        setName: function (newName) {
            name = newName;
        },
        getName: function () {
            return name;
        },
        getSex: function () {
            return sex;
        },
        setSex: function (newSex) {
            if (typeof newSex == 'string'
                && newSex.toLowerCase() == 'male'
                || newSex.toLowerCase() == 'female') {
                sex = newSex;
            }

        }

    }
}

oldPet = createPet('yt')
console.log(oldPet.getName())
oldPet.setName('iu')
console.log(oldPet.getName())

var getCode = (function () {
    var code = 'tf';
    return function () {
        return code;
    }
})()
getCode()