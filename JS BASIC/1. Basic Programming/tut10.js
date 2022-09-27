// undefined
let fName; //var fName also support but const not support
// console.log(fName);
// console.log(typeof fName);

// null
let myVar = null;
// console.log(myVar);
// console.log(typeof myVar);

//BigInt
let num = BigInt(54413136331144971313199463131649562314);
let num2 = 134n;
// console.log(num);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(num + num2);

let n1 = BigInt(123);
let n2 = 123;
console.log(n1 + n2); //we cannot add one bigInt with normal int number.