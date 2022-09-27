// while loop in array

const fruits = ['banana', 'mango', 'apple'];

let i = 0;
let arr1 = [];
while (i < fruits.length) {
    arr1.push(fruits[i].toUpperCase());
    i++;
}
console.log(arr1);