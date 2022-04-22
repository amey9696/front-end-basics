// What is this in Js?
// The js this keyword refers to the object it belongs to.

//It has different value depending on where it is used:-
//1. Alone, this refers to the global object i.e window
// console.log(this);// op is Window {window: Window, self: Window, document: document, name: "", location: Location,..........}

//2. In a regular function, this refers to the global object.i.e window
// function sum(){
//     var add=2+2;
//     console.log("sum is "+add);// op is sum is 4
//     console.log(this);// op is Window {window: Window, self: Window, document: document, name: "", location: Location,..........}
// }
// sum()

//3. In a method, this refers to the owner of object.
// const info={
//     name:'amey',
//     qualification:'BE',
//     sum:function(){
//             var add=2+2;
//             console.log("sum is "+add);// op is sum is 4
//             console.log(this.name); //op is amey
//             console.log(this); //op is {name: "amey", qualification: "BE", sum: ƒ}
//         }
//     }
// info.sum();

// 4. In a function, in strict mode, this is undefined
// "use strict"
//         function sub(){
//             var subst=5-2;
//             console.log("ans is "+subst);// op is sum is 3
//             console.log(this);// undefined 
//         }
//         sub()