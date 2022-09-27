// SetTimeout()

console.log("Script start");  // 1. first this line run

// function hello() { // after 5 sec this function is run
//     console.log("hello js");
// }
// setTimeout(hello, 5000); // call function after 5 sec

const timeId = setTimeout(() => { // 4. call function after 5/0 sec (call/send to js from browser by browser after fiinishing all js code)
    console.log("inside setTimeout");
    // }, 0); //0 ms i.e 0 second
}, 5000);

for (let i = 0; i < 100; i++) { //2. then this line run
    console.log("inside for loop");
}
console.log("setTimeout function id is: ", timeId);
console.log("Clear time out...");
clearTimeout(timeId);
console.log("Script end"); // 3. after that this line run

// setTimeout function provide by browser not provide by js
// after completed time browser allow to js to run that setTimeout function
// setTimeout return an id.