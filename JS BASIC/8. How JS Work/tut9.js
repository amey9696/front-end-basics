//  Closure example 2
function myFunc(pow) {
    return function (num) {
        // console.log(Math.pow(num, pow));
        console.log(num ** pow);
    }
}

//shorthand for given code
// const myFunc=pow=>num=>num**pow;

const cube = myFunc(2); // pow
cube(3); //pass no