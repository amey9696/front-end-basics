// Global execution context
// js create fName,lName and function in global i.e in memory
// console.log("hello world");
// let fName = 'amey';
// let lName = 'palshetkar';

// const myFunction = function () {
//     let var1 = "First Variable";
//     let var2 = "Second Variable";
//     console.log(var1);
//     console.log(var2);
// }

// Function execution context
let foo = "Foo";
console.log(foo);
function getFullName(fName, lName) {
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = fName + " " + lName;
    return fullName;
}
const personName = getFullName("amey", "palshetkar");
console.log(personName);

// in memory, variable who create using let const default value save as uninitialize, after initizing memory change value if not initialaize then show error
// in memory, variable who create using var default value save as undefined,  after initizing memory change value if not initialaize then show undefined