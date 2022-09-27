// Intro to closures
// function can return functions

// function outerFunc() {
//     // return 1;
//     // return "one";
//     // return [1, 2, 3];
//     // return { a: '1', b: '2' };
//     function innerFunc() {
//         console.log("Hello World");
//     }
//     return innerFunc;
// }

// const ans = outerFunc();
// console.log(ans); // print whole function i.e function innerFunc() {console.log("Hello");}
// ans(); // Hello World


function printFullName(fName, lName) { // fName, lName are parameters
    function printName() {
        console.log(fName, lName);
    }
    return printName;
}

const ans = printFullName("Amey", "Palshetkar"); // passing arguments to function
// console.log(ans); //function printName() {console.log(fName, lName);}
ans();

// this printName function take printFullName local memory, properties and variable which save in local memory also.
// here printName take fName, lName value also (this value is not found in local as well as lexical envionment of printName function)
// ie inner function can access outer functions variable/propetry also