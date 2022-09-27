// New keyword

function createUser(fName, age) {
    this.fName = fName;
    this.age = age;
}
createUser.prototype.about = function () {
    return `${this.fName} is ${this.age} years old.`;
}
const user1 = new createUser("amey", 25);
console.log(user1);
console.log(user1.about());

//here new keyword do 3 works
// 1. create empty object and this refer to that empty object i.e this={}
// 2. return this
// 3. provide prototype