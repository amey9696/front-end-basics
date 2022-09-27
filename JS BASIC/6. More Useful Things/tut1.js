// Iterables
// we cn apply for loop, forEach etc
// eg string, array

const fName = "Amey";
// for (let char of fName) {
//     console.log(char);
// }

const nums = [1, 2, 3, 44, 5];
// for (let num of nums) {
//     console.log(num);
// }
// nums.forEach(num => {
//     console.log(num);
// });
// for (let key in nums) {
//     console.log(nums[key]);
// }
// for (let index = 0; index < nums.length; index++) {
//     console.log(nums[index]);
// }

const allUser = [
    { userId: 1, name: 'david' },
    { userId: 2, name: 'rohit' },
    { userId: 3, name: 'Bumrah' },
];

// for (let user of allUser) {
//     console.log(user);
// }

// const users = { userId: 1, name: 'david' }; // you cannot iterate single object
// for (let user of users) {
//     console.log(user);
// }


// array like objects
// obkects which has length property and its access by using its index
// eg- string

const str = "amey";
console.log(str.length);
console.log(str[2]);