// objects
// array are good but not sufficient for real world data.
// objects store key value pairs
// objects dontt have index

// 1.   how to create objects
// const person = { name: 'amey', age: 25 } // {key/property:value}
const person = {
    name: 'amey',
    age: 25,
    language: ['marathi', 'hindi', 'english']
}
console.log(person);
console.log(typeof person);

// 2. how to access data from objects
// trick 1 dot notation
console.log(person.name);
// console.log(person.language);

// trick 2 bracket notation
console.log(person["name"]); //key are by default in string type
console.log(person["language"]);
// console.log(person.language[2]);

// 3. how to add key value pair to objects
// trick 1 dot notation
person.gender = "male";
// console.log(person);

// trick 2 bracket notation
person["location"] = "guhagar";
console.log(person);