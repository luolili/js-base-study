//
function makeError() {
    throw new Error("error msg")
}
try {
    makeError()
} catch (error) {
    console.log("e.name:", error.name)
    console.log("e.message:", error.message)
}