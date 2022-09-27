// Some method
// callback function in some method return true or false 
// some also returns true or false
// if one elements is match to condition then it return true, otherwise if all is fail then some return false.

const numbers = [2, 5, 13, 205, 18, 101];
const anyOneIsEven = numbers.some(number => number % 2 === 0);
console.log(anyOneIsEven);

// real time example
const products = [
    { productId: 1, productName: 'p1', price: '32000' },
    { productId: 2, productName: 'p2', price: '120000' },
    { productId: 3, productName: 'p3', price: '45000' },
    { productId: 4, productName: 'p4', price: '3200' },
    { productId: 5, productName: 'p5', price: '80000' },
];

//check every product price is less than 30k or not?
const isTrue = products.some(cartItem => cartItem.price < 30000);
console.log(isTrue);