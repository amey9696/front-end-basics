// for in loop

const fruits = ['banana', 'mango', 'apple', 'grapes'];

// this loop not use mostly
// for (let index in fruits) {
//     console.log(fruits[index]);
// }

// in array, we not mostly use for in loop, while loop.
// mostly use for of, traditional for loop, forEach. 

// this loop usely most of the time
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}