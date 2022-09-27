// Scope chain and lexical environment
let lName = 'palshetkar';

const printName = function () {
    const fName = "Amey";
    function myFunc() {
        console.log(fName);
        console.log(lName);
    }
    myFunc();
}
printName()

// function store values in local memory same as create in global memory
// arguments of function stored in array
// if js not found any variable in local memory then goes to parent(global) memory. this is called as lexical scope
// i.e global memory provide lexical environment to local memory