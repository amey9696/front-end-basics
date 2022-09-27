// Spread operator in objects
//spread operator in array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1, ...array2, 89, 101];
// console.log(newArray);

const newArray1 = [..."amey", ..."123456"]; //string are iterable
// const newArray2 = [...123456]; //this are not iterable
// console.log(newArray1);

//spread operator in objects
const obj1 = {
    key1: 'value1',
    key2: 'value2',
    // key1: 'value3', // this value is override because latest one
    key4: 'value400',
}
// console.log(obj1);

const obj2 = {
    key1: 'value100',
    key3: 'value3',
    key4: 'value4',
}

const newObj = { ...obj1, ...obj2, key100: 'value100' }; // key1 override because we spread obj2 after obj1
console.log(newObj);

const newString =
    { ..."amey" };
//{ ..."12345" };
// { ...123 }; //empty
console.log(newString);