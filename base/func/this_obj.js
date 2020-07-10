
function Person() {
    var self = this;

    self.age = 0;
    setInterval(function growup() {
        self.age++;
    }, 100)
}

function Person() {
    var self = this;

    self.age = 0;
    setInterval(() => {
        this.age++;//this是Person
    }, 100)
}