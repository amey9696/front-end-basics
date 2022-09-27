// Maps
// Map is an iterable (you can use loop)
// Store data in ordered format
// Store key value pair (like object)
// Duplicate keys are not allowed like objects

// Difference between Maps and objects
// 1. Objects can only have string or symbol as key
// 2. In Maps, you can use anything as key like array, number, string
// 3. we use for of loop directly to Map but for object we cannot use for of loop. we use for in loop only

// object literals
// key is in string(99%) and symbol(only 1% chance)
// const person = {
//     fName: 'amey',
//     age: 25,
//     1: 'one' // here 1 is not number it is string
// }
// console.log(person.fName);
// console.log(person[1]);
// for (const key in person) {
//     console.log(typeof key);
// }

// Map
// const person = new Map();
// person.set('fName', 'amey');
// person.set('age', 25);
// person.set({ name: 'amey', "age": 25 }, "user details"); // now object is key
// person.set([1, 2, 3, 5, 7, 11], 'prime numbers'); // now array is key
// person.set(1, 'one'); // now this 1 is number
// console.log(person);
// console.log(person.fName); // not correct way to access value
// console.log(person.get('fName'));
// console.log(person.get(1));
// console.log(person.keys);
// for (let key of person) {
//     console.log(key); // gives array
//     console.log(Array.isArray(key));
// }

// for (let [key, value] of person) {
//     console.log(key, value); // gives array
// }

// for in loop not work for Map
// for (const key in person) {
//     console.log(key)
// }

// trick 2
// const person = new Map([['fName', 'amey'], ['age', 25]]);
// console.log(person);

const user = {
    id: 1,
    fName: "amey"
}
// now add some data in object using map?
const userInfo = new Map();
userInfo.set(user, { age: 25, gender: 'male' });
console.log(userInfo);
console.log(user.id);
console.log(userInfo.get(user).age);
