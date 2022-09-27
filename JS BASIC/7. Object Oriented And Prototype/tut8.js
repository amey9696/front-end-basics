// Factory functions & discuss some memory related problems
// too many weakest thing in that code such as below:-

const userMethods = {
    about: function () {
        return `${this.fName} is ${this.age} years old.`;
    },
    is18: function () {
        return this.age >= 18;
    }
}

function createUser(fName, lName, email, age, address) {
    const user = {};
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about; // now creation of every time both method problem is now solve
    user.is18 = userMethods.is18; // we write reference(address) here
    return user;
}

const user1 = createUser('amey', 'palshetkar', 'palshetkaramey96@gmail.com', 25, 'palshet,guhagar,ratnagiri');
const user2 = createUser('neha', 'kadam', 'nehakadam@gmail.com', 26, 'kankavli, sindhudurg'); //in this function also create about & is18 function/method is create in memory
const user3 = createUser('mayur', 'sawant', 'mns25mns@gmail.com', 23, 'paag,chiplun, ratnagiri');
// i.e every time if you create user then in that time both two methods are created in memory
console.log(user1);
console.log(user1.about()); // dont try this type console.log(user1.about); about is function so use ()
console.log(user2.about()); 