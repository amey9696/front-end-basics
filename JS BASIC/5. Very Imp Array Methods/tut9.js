// Fill method
// value, start, end
// this method also change orignal array.


//use 1
const myArr = new Array(5).fill(-1);
console.log(myArr);

// use 2
// change 4,5,6 to 0,0,0
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.fill(0, 3, 6);
console.log(numbers)