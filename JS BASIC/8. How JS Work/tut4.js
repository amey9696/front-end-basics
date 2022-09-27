// Are let and const are hoisted ? What is a reference Error ?
// console.log(fName); // tut4.js:2 Uncaught ReferenceError: Cannot access 'fName' before initialization
// let fName = 'amey';
// let fName = 'amey';
// console.log(fName); // amey

// difference between Cannot access 'fName' before initialization
// and fName is not defined
// 1. our code is
// console.log(fName);
// let fName = 'amey';
// then Cannot access 'fName' before initialization error occurs

// 2. if our code is
// console.log(fName);
// fName = 'amey';
// then fName is not defined error occurs

console.log(typeof fName);
// let fName = 'amey';