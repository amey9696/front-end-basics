// Hoisting

// myFunction(); // this is called as hoisting
// function myFunction() {
//     console.log("this is my function");
// }

console.log(myFunction);
var myFunction = function () {
    console.log("this is my function 2");
}