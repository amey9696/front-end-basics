// Default Parameters

//old approach
// function sum(a, b) {
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a + b;
// }
// console.log(sum(5));

// new update ie. Default Parameters
function add(a = 5, b = 0) { // give default value
    return a + b;
}
console.log(add(4)); //if user pass one value then second value taken automatically which we give as default value