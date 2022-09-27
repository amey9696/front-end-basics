// Splice method
// splice is used for insert and delete elementin array
// accept 3 parameter start,delete,insert
// this method also change orignal array.
const numbers = [1, 2, 3, 4, 5, 6];

//delete
// const arr = numbers.splice(2, 1); // start 2nd index and delete one item and not add any item
// console.log(arr);
// console.log(numbers);

// insert
// const arr2 = numbers.splice(4, 0, 100);
// console.log(arr2);
// console.log(numbers); //[1, 2, 3, 4, 100, 5, 6];

// insert and delete
const arr3 = numbers.splice(2, 2, 40);
// console.log(arr3);
console.log(numbers);  //[1, 2, 40, 5, 6]
