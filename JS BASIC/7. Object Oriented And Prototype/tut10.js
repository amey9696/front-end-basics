// Factory functions & discuss some memory related problems

const userMethods = {
    about: function () {
        return `${this.fName} is ${this.age} years old.`;
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return 'swag se karenge sabka swagat';
    }
    // if user wants to add too mamny methods here then
}

function createUser(fName, lName, email, age, address) {
    const user = Object.create(userMethods); //create __proto__ chain
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    // here also can call those added method
    // by using __proto__ no need of calling methods which present in userMethods function 
    return user;
}

const user1 = createUser('amey', 'palshetkar', 'palshetkaramey96@gmail.com', 25, 'palshet,guhagar,ratnagiri');
const user2 = createUser('neha', 'kadam', 'nehakadam@gmail.com', 26, 'kankavli, sindhudurg');
const user3 = createUser('mayur', 'sawant', 'mns25mns@gmail.com', 23, 'paag,chiplun, ratnagiri');
console.log(user1);
console.log(user1.about());
console.log(user2.about());
console.log(user2.sing()); 