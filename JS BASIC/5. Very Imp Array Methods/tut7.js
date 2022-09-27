// Every method
// callback function in every method return true or false 
// every also returns true or false
// if all elements are match to condition then it return true otherwise one is fail then every return false.

const numbers = [2, 5, 1200, 400, 18, 1000];
const allEven = numbers.every(number => number % 2 === 0);
console.log(allEven);

// real time example
const products = [
    { productId: 1, productName: 'p1', price: '300' },
    { productId: 2, productName: 'p2', price: '1200' },
    { productId: 3, productName: 'p3', price: '45' },
    { productId: 4, productName: 'p4', price: '22000' },
    { productId: 5, productName: 'p5', price: '800' },
];

//check every product price is less than 30k or not?
const isTrue = products.every(cartItem => cartItem.price < 30000);
console.log(isTrue);