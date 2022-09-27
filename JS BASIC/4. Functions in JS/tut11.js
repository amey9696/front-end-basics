// callback functions(it is also called as higher order function because we send function as a arguments to another function)

function myFunc2(user) {
    console.log("hello from function two");
    console.log(`welcome ${user}`);
}

function myFunc(callback) { //now myFunc2 is here
    console.log("Hello from function one");
    callback("amey"); //call myFunc2 here and pass one argument
}

myFunc(myFunc2) // pass another function call as a arguments