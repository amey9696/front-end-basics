// filter method

const numbers = [1, 2, 4, 6, 9];

const even = numbers.filter(number => {
    return number % 2 === 0;
})
console.log(even);

// real time example
const users = [
    { fName: 'ap', gender: 'male' },
    { fName: 'nk', gender: 'female' },
    { fName: 'dp', gender: 'female' },
];

const isFemale = users.filter(user => {
    return user.gender === 'female'
});
console.log(isFemale);
// reduce method