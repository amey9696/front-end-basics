// Split code into multiple files using ES6 modules.

import { firstName as fName } from './utils/fname.js';
import { age } from './utils/age.js';
import Person from './utils/Person.js';

console.log(fName, age);
const person = new Person("XYZ", "K", 25);
person.info();
console.log(person)

// Uncaught SyntaxError: Cannot use import statement outside a module (at app.js:1:1)
// solution = in html you add a script file, in that script tag add below attribute
// type="module"
// defer set by default