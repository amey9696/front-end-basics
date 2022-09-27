// array push pop shift unshift method
//these some method has ability to change original array thats why array is mutable

let fruits = ['mango', 'banana', 'chiku'];
console.log(fruits);
//push 
//add elements in last postion/index
fruits.push("apple");
console.log(fruits);

//pop
//remove elements in last postion/index
fruits.pop();
console.log(fruits);

let popedFruit = fruits.pop();
console.log(popedFruit);

//unshift
//add elements in frist postion/index
fruits.unshift("grapes");
console.log(fruits);

//shift
//remove elements in frist postion/index
fruits.shift();
console.log(fruits);

let shiftedFruit = fruits.shift();
console.log(shiftedFruit);

//push & pop are faster than shift & unshift
// push & pop are add or remove element in last index thats why memory uses is low but shift and unshift are add or remove element in first.in memory again create new array structure.