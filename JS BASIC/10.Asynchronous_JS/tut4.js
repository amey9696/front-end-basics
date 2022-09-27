// callbacks

// function myFunc(callback) {
//     console.log("Function is doing some task 1..");
//     callback();
// }

// function myFunc2() {
//     console.log("Function is doing some task 2..");
// }
// myFunc(myFunc2);

// myFunc(function () {
//     console.log("function is doing some task 2..");
// });

// function getTwoNumbersAndAdd(number1, number2, callback) {
//     console.log(number1, number2);
//     callback(number1, number2);
// }

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// getTwoNumbersAndAdd(4, 5, addTwoNumbers); // 2 para and 1 callback
// OR
// getTwoNumbersAndAdd(4, 5, (num1, num2) => {
//     console.log(num1 + num2);
// });

// ========================================
// callback uisng if else 

function addTwoNo(n1, n2, onSucess, onFail) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        onSucess(n1, n2);
    } else {
        onFail();
    }
}

function onSucess(num1, num2) {
    console.log(num1 + num2);
}

function onFail() {
    console.log("Wrong data types.Please enter number only")
}

addTwoNo(4, "5", onSucess, onFail);