// use prototype

function createUser(fName, lName, email, age, address) {
    const user = Object.create(createUser.prototype); //create __proto__ chain
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function () {
    return `${this.fName} is ${this.age} years old.`;
}
createUser.prototype.is18 = function () {
    return this.age >= 18;
}
createUser.prototype.sing = function () {
    return 'swag se karenge sabka swagat';
}

const user1 = createUser('amey', 'palshetkar', 'palshetkaramey96@gmail.com', 25, 'palshet,guhagar,ratnagiri');
const user2 = createUser('neha', 'kadam', 'nehakadam@gmail.com', 26, 'kankavli, sindhudurg');
const user3 = createUser('mayur', 'sawant', 'mns25mns@gmail.com', 23, 'paag,chiplun, ratnagiri');
console.log(user1);
console.log(user1.about());
console.log(user2.about());
console.log(user2.sing());


// proto is chain for reference object
// prototype is free space or function provide some other methods