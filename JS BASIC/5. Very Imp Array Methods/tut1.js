// Very Important Array Methods
// forEach


// const numbers = [1, 2, 4, 6, 9];

// function multiplyBy2(number, index) {
//     console.log("index is", index);
//     console.log(number * 2);
// }

// multiplyBy2(numbers[0], 0);
// for (let index = 0; index < numbers.length; index++) {
//     multiplyBy2(numbers[index], index);
// }

// numbers.forEach(multiplyBy2);
// numbers.forEach(function (number, index) { // anonymous function i.e function has no name.
//     // console.log("index is", index);
//     console.log(number * 2);
// });

// forEach real time example
const users = [
    { fName: 'ap', gender: 'male' },
    { fName: 'nk', gender: 'female' },
    { fName: 'dp', gender: 'female' },
];

//using for each
console.log("using forEach loop");
users.forEach(name => {
    console.log(name.fName);
});

// using for of
console.log("using for of loop");
for (let user of users) {
    console.log(user.fName);
}

//for in
console.log("using for in loop");
for (let key in users) {
    console.log(users[key].fName)
}