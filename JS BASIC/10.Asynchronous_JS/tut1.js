// Is Javascript a synchronous or asynchronous programming language ?

// synchronous programming
console.log("Script start"); // first this line run
for (let i = 0; i < 1000; i++) { // then this loop work
    console.log("inside for loop");
}
console.log("Script end"); // then this line work

//asynchronous programming