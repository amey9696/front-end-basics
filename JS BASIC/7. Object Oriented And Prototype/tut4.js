// Some warnings

const user1 = {
    fName: 'amey',
    age: 25,
    about: function () {
        // console.log(this);
        console.log(this.fName, this.age);
    }
}

// don't do this mistake

//mistake 1
//user1.about()
// const myFunc = user1.about;
//js read as folllow
// const myFunc = function () {
//     // console.log(this);
//     console.log(this.fName, this.age);
// };

//solution    
const myFunc = user1.about.bind(user1);
myFunc() // op is undefined undefined