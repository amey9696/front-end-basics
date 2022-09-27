// Block Scope Vs Function Scope

{
    //this is called as block
    let value1 = 5;
    const value2 = 50;
    var value3 = 500;
    // console.log(value1);
    // console.log(value2);
    // console.log(value3);
}
// console.log(value1); // Uncaught ReferenceError: value1 is not defined
// console.log(value2);// Uncaught ReferenceError: value1 is not defined
// console.log(value3);

{
    // console.log(value3);
}

// let const has block scope i.e they can access only inside block{} not outer of the block
// var has not block scope we can access var outside block also. 
// var has function scope.

function add() {
    //this is called as function
    if (true) {
        let fName = "amey";
        const mName = "ravindra";
        var lName = "palshetkar";
        // console.log(fName);
        // console.log(mName);
        // console.log(lName);
    }
    // console.log(fName); //Uncaught ReferenceError: fName is not defined
    // console.log(mName); //Uncaught ReferenceError: mName is not defined
    // console.log(lName); // no error 
}
add();
// console.log(fName); //Uncaught ReferenceError: fName is not defined
// console.log(mName); //Uncaught ReferenceError: mName is not defined
// console.log(lName); //Uncaught ReferenceError: lName is not defined