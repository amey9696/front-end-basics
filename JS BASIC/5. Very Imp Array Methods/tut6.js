// Find

const animals = ['cat', 'dog', 'lion', 'tiger', 'cow'];
const isLength = animals.find(string => {
    return string.length === 3;
});
console.log(isLength); //find method gives only one value

// real time example
const users = [
    { userId: 1, userName: 'radhe bhai' },
    { userId: 2, userName: 'rkr' },
    { userId: 3, userName: 'jitendra' },
    { userId: 4, userName: 'kisan' },
    { userId: 5, userName: 'om' },
];

const findUser = users.find(user => user.userId === 3);
console.log(findUser.userName);