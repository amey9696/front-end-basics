// into to array
// 1. reference type

// how to create array
// array is ordered(index number) collection of items/elements
let fruits = ['mango', 'banana', 'chiku'];
console.log(fruits);
console.log(fruits[1]);
fruits[2] = "apple";//array is mutable i.e we change value
console.log(fruits);
console.log(typeof fruits);
console.log(Array.isArray(fruits));

let i = { id: 1, name: "abc" };
console.log(Array.isArray(i));

let num = [1, 2, 3, 4];
// console.log(num);

let mix = [1, 2, 'banana', 'rose', null, undefined, 3.14, [4.5, 1, 'apple'], { id: 1 }];
// console.log(mix);
// console.log(mix.length);

// array indexing
//start from 0 left to right