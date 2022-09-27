// const user1 = {
//     fName: 'amey',
//     lName: 'palshetkar',
//     email: 'palshetkaramey96@gmail.com',
//     age: 25,
//     address: 'barbhai,palshet,ratnagiri',
//     about: function () {
//         return `${this.fName} is ${this.age} years old.`;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }
// const aboutUser = user1.about();
// console.log(aboutUser);

// we can't made too many user like previous object
// so we create a function. it can take input age,name, address, fname, lname etc
// after that add key value pair 
// after that returns a required value

function createUser(fName, lName, email, age, address) {
    const user = {};
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.fName} is ${this.age} years old.`;
    };
    user.is18 = function () {
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('amey', 'palshetkar', 'palshetkaramey96@gmail.com', 25, 'palshet,guhagar,ratnagiri');
console.log(user1);
console.log(user1.about()); // dont try this type console.log(user1.about); about is function so use ()