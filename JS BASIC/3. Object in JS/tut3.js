// Iterate objects
const person = {
    name: 'amey',
    age: 25,
    "person hobbies": ['sleeping', 'listening', 'singing']
}

// using for in loop
for (let key in person) {
    // console.log(person[key]);
    // console.log(`${key}: ${person[key]}`);
    // console.log(key, ':', person[key]);
}

// using Object.keys
// console.log(Object.keys(person));
// console.log(typeof Object.keys(person));
// console.log(Array.isArray(Object.keys(person)));

// using for of loop
for (let key of Object.keys(person)) {
    // console.log(key);
    // console.log(person[key]);
    // console.log(`${key}: ${person[key]}`);
    // console.log(key, ':', person[key]);
}