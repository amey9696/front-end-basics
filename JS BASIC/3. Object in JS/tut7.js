// Objects inside Array
// very useful in real world application
// const userApi=[{},{},{},]; //this type of data are receive from backend

const users = [
    { userId: 1, firstName: 'ap', gender: 'male' },
    { userId: 2, firstName: 'nk', gender: 'female' },
    { userId: 3, firstName: 'dp', gender: 'female' },
];
// console.log(users);

// access each object using for in loop
for (let user of users) {
    // console.log(user);
    console.log(user.firstName);
}