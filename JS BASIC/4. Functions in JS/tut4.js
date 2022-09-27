// Function declarations are hoisted
hello();

function hello() {
    console.log("hello world");
}

//in function expression case this hoisting not work
// Hello();//tut4.js:9 Uncaught ReferenceError: Cannot access 'Hello' before initialization
// const Hello = function () {
//     console.log("hello world");
// }


// variable hoasting
// support only using var not support for const, let
a = 5; // declaration
console.log(a); //calling
var a; // initilization

// first js find where variable is initialize, then find declaration then calling
/*
i.e 
    1. var a;
    2. a=10;
    3. console.log(a);
*/