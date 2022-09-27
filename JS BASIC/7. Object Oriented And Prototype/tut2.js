// This keyword, Window object
// console.log(this); // this refer to global object i.e window
// console.log(window); // global object i.e window

// why below this refer to global object(window)?
"use strict" // if you use strict then this return undefined

function myFunc() {
    console.log(this); // refer to window/global object
}
myFunc(); //window.myFunc() => js read that way

// function myFunc2() {
//     console.log("this is Func2");
// }
// window.myFunc2(); // you can call uisng window also because in window object there is myFunc2 function is created.