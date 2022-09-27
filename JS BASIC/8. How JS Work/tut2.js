// This and window in global execution context
console.log(this); // global/window object
console.log(window);// global/window object
console.log(myFunction); // myFunction() {console.log("this is my function");}
console.log(fullName); // undfined

function myFunction() {
    console.log("this is my function");
}

var fName = "amey";
var lName = "Palshetkar";
var fullName = fName + " " + lName;
console.log(fullName); // amey palshetkar