// Clone array & spread operator

//clone array
// let arr1 = [1, 2, 3];
// let arr2 = arr1; //this is not clone
// console.log(arr1 === arr2);

// cl`````````oning
//trick 1
//simple cloning but not used mostly
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 === arr2); //both are different because they create two array in same heap
// arr1.push(4);
// console.log(arr1);
// console.log(arr2);

//trick 2
let fruit = ['mango', 'chiku'];
let arr2 = fruit.slice(0);
fruit.push("apple");
console.log("Fruits are:", fruit);
console.log("array 2 is:", arr2);
console.log(fruit === arr2);

//trick 3
let flower = ["rose", "jasmine"]
// let array2 = [].concat(flower);
let array2 = [].concat(flower, ["Mogra", "Lili"]);
flower.push("Mogra");
console.log("flowers are:", flower);
console.log("array 2 is:", array2);
console.log(flower === array2);

//spread operator
// trick 4
let sports = ['cricket', 'kadbbadi'];
// let arrrr2 = [...sports];
let arrrr2 = [...sports, "vhallyball", 'kho-kho'];
sports.push("tennis");
console.log("sports are:", sports);
console.log("array 2 is:", arrrr2);
console.log(sports === arrrr2);

// fastest is slice method i.e trick 2 but now mostly people use last one i.e spread operator(trick 4);