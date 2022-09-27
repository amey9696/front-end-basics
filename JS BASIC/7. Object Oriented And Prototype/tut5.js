// this inside arrow function
// arow function this cannot be changed
// arrow function take this one level up i.e surrounding

const user1 = {
    fName: 'amey',
    age: 25,
    // about: function() {
    about: () => {
        // console.log(this);
        console.log(this.fName, this.age);
    }
}

const myFunc = user1.about.bind(user1);
myFunc() // op is undefined undefined66