// Optional chaining
const user = {
    fName: 'amey',
    address: { houseNumber: '417' },
}
// console.log(user.fName);
// if you comment line no 4 (i.e address), then given console gives an error 
// Uncaught TypeError: Cannot read properties of undefined (reading 'houseNumber')
// but if i want to get output of given console is undefined then how i will do it?
// i.e currently in my object no such property related with address but may be in future they come
// but currently given console show undefined and in future if property available then show exact output
// then how will i do?
// console.log(user.address.houseNumber);

// trick 1
// use ?.
// how ?. will work
console.log(user?.fName); // if user exist then they give you first name otherwise give null
console.log(user?.address?.houseNumber);

// it is called as optional chaining(?.)