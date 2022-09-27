// Nested Destructuring
const users = [
    { userId: 1, firstName: 'ap', gender: 'male' },
    { userId: 2, firstName: 'nk', gender: 'female' },
    { userId: 3, firstName: 'dp', gender: 'female' },
];

// const [user1, user2, user3] = users;
const [{ firstName: userOneFName, userId }, , { gender }] = users;
console.log(userId);
console.log(userOneFName);
console.log(gender);