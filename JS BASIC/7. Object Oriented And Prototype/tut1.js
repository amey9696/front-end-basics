// Method
// function inside object
// const person = {
//     fName: "amey",
//     age: 25,
//     about: function () {
//         console.log(`person name is ${this.fName} and age is ${this.age}.`); // here this refer to person object
//     }
// }
// person.about();


function personInfo() {
    console.log(`person name is ${this.fName} and age is ${this.age}.`); // here this refer to person object
}

const person1 = {
    fName: "Rohit",
    age: 34,
    about: personInfo
}

const person2 = {
    fName: "Surya",
    age: 29,
    about: personInfo
}

const person3 = {
    fName: "Hardik",
    age: 26,
    about: personInfo
}
// personInfo(); // undefined
person1.about();
person2.about();
person3.about();