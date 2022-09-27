// Computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";

const obj = {
    [key1]: value1, // it is called as computed property
    [key2]: value2,
}
console.log(obj);

// using empty object
const newObj = {};
newObj[key1] = value1;
newObj[key2] = value2;
console.log(newObj);