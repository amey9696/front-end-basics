// Constructor function with new keyword

function CreateUser(fName, lName, email, age, address) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function () {
    return `${this.fName} is ${this.age} years old.`;
}
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.sing = function () {
    return 'swag se karenge sabka swagat';
}

const user1 = new CreateUser('amey', 'palshetkar', 'palshetkaramey96@gmail.com', 25, 'palshet,guhagar,ratnagiri');
const user2 = new CreateUser('neha', 'kadam', 'nehakadam@gmail.com', 26, 'kankavli, sindhudurg');
const user3 = new CreateUser('mayur', 'sawant', 'mns25mns@gmail.com', 23, 'paag,chiplun, ratnagiri');
console.log(user1);
console.log(user1.about());
console.log(user2.about());
console.log(user2.sing());


// proto is chain for reference object
// prototype is free space or function provide some other methods
// __proto__ and [[prototype]] are same but
// __proto__ and prototype are not same
// [[prototype]] and prototype are also not same 