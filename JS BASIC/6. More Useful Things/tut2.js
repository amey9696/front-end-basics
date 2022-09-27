// Sets
// it is iterable
// store data
// sets also have its own methods
// no index based access
// order is not guarenteed
// unique items only (duplicates not allowed)

// convert array to set
const numbers = [1, 2, 3, 4, 5, 2, 3, 1, 2, 3];
const newSet = new Set(numbers);
// console.log(newSet[2]); // undefined it is not possible
// console.log(newSet);

// const newChar = new Set("aditya");
// console.log(newChar);

// for (let num of newSet) {
//     console.log(num);
// }

//add value to set
const even = new Set();
even.add(2);
even.add(20);
even.add(46);
even.add(46);
even.add([2, 20]);
even.add([2, 20]); // this array is also add because both array has different address
even.add("20");
even.add(numbers);
even.add(numbers); // now this array is not store because both array has same address
even.add("ode");
even.add("ode");
console.log(even);

// any value or element is present or not
// if (even.has(2)) {
//     console.log("2 is present");
// } else {
//     console.log("2 is not present");
// }

// convert set to array
console.log(Array.from(newSet));

// find length of set without convert set to array
let length = 0;
for (let elem of newSet) {
    length++;
}
console.log(length);