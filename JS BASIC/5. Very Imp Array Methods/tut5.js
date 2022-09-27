// Sort method
// sort method can change the array

// const numbers = [1, 5, 1200, 400, 19, 1000];
// console.log(numbers.sort()); // gives woring result first js convert all numbers into string then sort
// how js sort this
// ascii value
// '0' :48
// '1' :49
// '2' :50
// '3' :51
// '4' :52
// '5' :53
// '6' :54
// '7' :55
// '8' :56
// '9' :57
// now according to ascci our array is now [49,53,49,52,49,49] so result is [1, 1000, 1200, 19, 400, 5]

const person = ["amey", "ajay", "anuj", "Amey", "AMEY", "mayank", "parth", "mayur", "rahul"];
// console.log(person.sort()); //gives correct output but if your give same name one is in capital and other one is small letter then first sort capital one.
// Capital letter ascii code are start from 65 to 90 and small letter code start from 97 to 122.


//solution
const numbers = [1, 5, 1200, 400, 19, 1000];
console.log(numbers.sort((a, b) => a - b)); //ascending
console.log(numbers.sort((a, b) => b - a)); //descending

// how a-b is work here?
/*
    1200, 400
    here a=1200 and b=400
    if a-b ====return positive number then first write b then a i.e 400,1200

    1, 5,
    here a=1 and b=5
    if a-b ====return negative number then first write a then b i.e 1,5
*/

// real life example of sort
// in flipcart there sort price sort option
// user can sort low to high or high to low according to user choice

const products = [
    { productId: 1, productName: 'p1', price: '300' },
    { productId: 2, productName: 'p2', price: '1200' },
    { productId: 3, productName: 'p3', price: '45' },
    { productId: 4, productName: 'p4', price: '32000' },
    { productId: 5, productName: 'p5', price: '800' },
];

//low to high
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price
})
console.log(lowToHigh);

// high to low
const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price
})
console.log(highToLow);