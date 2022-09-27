// More discussion about proto and prototype
let numbers = [1, 2, 3, 4];
console.log(Object.getPrototypeOf(numbers));



// internally js create array as follow:-
// let numbers = new Array(1, 2, 3); // now Array is function. so it has prototype also