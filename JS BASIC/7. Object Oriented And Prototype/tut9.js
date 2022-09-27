// What is __proto__ , [[prototype]]

const obj1 = {
    key1: 'value1',
    key2: 'value2',
}

// const obj2 = {
//     key3: 'value3'
// }
// console.log(obj2.key1); // now answer is undefined but if i want to get answer is value1 then how?

// const obj3={};
// obj3.key4='value4';
//there is one more way to create empty object
const obj2 = Object.create(obj1); // connect obj1 to obj2 i.e create __proto__

console.log(obj2); // {} empty object
console.log(obj2.key1); // value1
console.log(obj2.__proto__); //{key1: 'value1', key2: 'value2'} means store reference in __proto__