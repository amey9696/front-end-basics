// Class keyword
// class are fake
// internally js do prototype structure

//using function
// function CreateUser(fName, lName, email, age, address) {
//     this.fName = fName;
//     this.lName = lName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function () {
//     return `${this.fName} is ${this.age} years old.`;
// }
// CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
// }
// CreateUser.prototype.sing = function () {
//     return 'swag se karenge sabka swagat';
// }

// using class
class CreateUser {
    constructor(fName, lName, email, age, address) {
        console.log("constructor is called.")
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() {
        return `${this.fName} is ${this.age} years old.`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return 'swag se karenge sabka swagat';
    }
    func(a, b) {
        console.log(a + b);
    }
}

// below lines same for class & function
const user1 = new CreateUser('amey', 'palshetkar', 'palshetkaramey96@gmail.com', 25, 'palshet,guhagar,ratnagiri');
const user2 = new CreateUser('neha', 'kadam', 'nehakadam@gmail.com', 26, 'kankavli, sindhudurg');
const user3 = new CreateUser('mayur', 'sawant', 'mns25mns@gmail.com', 23, 'paag,chiplun, ratnagiri');
console.log(user1);
console.log(user1.about());
console.log(user2.about());
console.log(user2.sing());
console.log(Object.getPrototypeOf(user1));
user1.func(2, 8);