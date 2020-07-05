//DOMException
throw "wee"
throw 2;
//throw 任意表达式
throw {
    toString: function () {
        return "some error"
    }
}

try {
    throw "error"
} catch (e) {
    console.log("e:", e);
} finally {
    console.log("do last")
}
