// Parameter Destructuring
// we use this in object and mostly used in react

const person = {
    fName: 'amey',
    age: 25,
    gender: 'male'
}

// function getUser(obj) {
//     console.log(obj.fName);
//     console.log(obj.age);
// }

function getUser({ fName, age }) { // it is called as param destructuring
    console.log(fName);
    console.log(age);
}
getUser(person);