// function ap(){
// console.log("INSIDE");
//     return "amey";
// }
// console.log("before call ap");
// let a=ap();
// console.log("after call ap");
// console.log(a); //op is amey
// console.log("Last line of this js");

async function ap() {
    console.log("INSIDE");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
    // return "amey";
}

console.log("before call ap");
let a = ap();
console.log("after call ap");
console.log(a); //return a promise
a.then(data => console.log(data));
console.log("Last line of this js");
