// map method
// important for react

const numbers = [1, 2, 4, 6, 9];

const square = numbers.map(number => {
    // console.log(number * number);  // in map function, don't use console because map return a new array and forEach not return any new array
    return number * number;
});
console.log(square);

// real time example
const users = [
    { fName: 'ap', gender: 'male' },
    { fName: 'nk', gender: 'female' },
    { fName: 'dp', gender: 'female' },
];

const userName = users.map(user => {
    return user.fName;
});
console.log(userName);