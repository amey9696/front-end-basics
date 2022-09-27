// reduce method
const numbers = [1, 2, 3, 4, 5, 10];

const reduceNum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    // });
}, 100); //pass initial value i.e this value is go to now accumulator first value

console.log(reduceNum);
// how reduce work?
// accumulator      currentValue    return
//      1                  2           3
//      3                  3           6
//      6                  4           10
//      10                 5           15
//      15                 10          25  <== final answer

// real life example
const userCart = [
    { productId: 1, productName: 'mobile', price: 12000 },
    { productId: 2, productName: 'laptop', price: 40000 },
    { productId: 3, productName: 'earphone', price: 400 },
];

const total = userCart.reduce((totalPrice, currentProduct) => {
    return currentProduct.price + totalPrice;
}, 0);

console.log(total);

//how it work?
//  totalPrice      currentProduct.price        return
//      0                   12000                12000
//    12000                 40000                52000
//    52000                  400                 52400