// primitive vs reference data types

// primitive
// let num1 = 6;
// let num2 = num1;
// console.log(`value of num1 is ${num1}.`);
// console.log(`value of num2 is ${num2}.`);
// num1++;
// console.log("after increment value of num1");
// console.log(`value of num1 is ${num1}.`);
// console.log(`value of num2 is ${num2}.`);
//in primitive, if you change value of one element then does not affect to element 2 
// primitive value stored in memory using stack
// in memory, 2 stacks are created for num1 & num2. if you change in num1 then num 2 should not be changes

// reference type
// array
let arr1 = ["rose", "lotus", "jasmine"];
let arr2 = arr1;
console.log("array 1 is:", arr1);
console.log("array 2 is:", arr2);
arr1.push("Mogra");
console.log("after pushing element to array 1");
console.log("array 1 is:", arr1);
console.log("array 2 is:", arr2);
// in reference type, both array stored in same heap. and after that their address store in same stack.(both array has same address.)