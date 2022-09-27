// Functions returning Functions (it is also called as higher order function because we return function)
function myFunc() {
    // return "a";
    // return ["a"];
    // return { name: "amey" };

    // trick 1
    // function add() {
    //     // return "hello";
    //     console.log("hello");
    // }
    // return add;

    // trick 2
    return function () {
        console.log("hello");
        // return "Hello";
    }
}
const ans = myFunc();
// console.log(ans());
ans();