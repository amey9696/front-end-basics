// Dot vs Bracket Notation

// 1. diff 1
const person = {
    name: 'amey',
    age: 25,
    // person hobbies: //we cannot give key like this
    "person hobbies": ['sleeping', 'listening', 'singing']
}

// console.log(person.person hobbies); // we cannot do this in dot notation
console.log(person["person hobbies"]);

// diff 2
// add given key in person but use only variable of that key
const key = "email"; //add email field without using person.email='';

// person.key = "amey@gmail.com"; //not add email:"amey@gmail.com" instead of this add key:"amey@gmail.com"
// person["key"] = "amey@gmail.com"; //not add email:"amey@gmail.com" instead of this add key:"amey@gmail.com"
// console.log(person);

person[key] = "amey@gmail.com"; //result is email:"amey@gmail.com"
console.log(person);

