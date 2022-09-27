// array destructuring
// mostly used in todays days

const myArr = ['Rose', 'Lotus', 'jasmine', 'lily'];

//normal way
let a = myArr[0];
let b = myArr[1];

console.log(a);
console.log(b);

// destructuring
let [val1, val2, ...myNewArr] = myArr;
console.log(val1);
console.log(val2);
console.log(myNewArr);

const newArray = [..."amey"];
const newArray2 = [..."123456"];
console.log(newArray);
console.log(newArray2);
