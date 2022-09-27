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

// how to show all key in user1?
// for (let key in user1) {
//     console.log(key);
// }

// current for in loop also show keys are present in prototypes also i.e it show is18, about, sing also key
// but i want to skip that prototype key then?
for (let key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key); //fName, lName, email, age, address
    }
}