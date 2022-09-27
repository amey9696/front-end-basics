// Function declaration
// return happy birhday to you 5 times without using console.log("happy birhday to you") 5 times. i mean use only once.

function singHappyBirhdaySong() {
    // for (let index = 0; index <= 5; index++) {
    console.log("happy birhday to you")
    // }
}
singHappyBirhdaySong();// function calling/invoking/running
singHappyBirhdaySong();
singHappyBirhdaySong();
singHappyBirhdaySong();
singHappyBirhdaySong();

//given function are not re-usable
// function add() {
//     console.log(2 + 4);
// }
// add();

// reusable function
function add(a, b) { // parameter
    return a + b;
}
console.log(add(4, 6)); //arguments
console.log(add(14, 66));

// undefined + undefined= NaN
// 5 + undefined= NaN

function isEven(num) {
    // if (num % 2 === 0) {
    //     return true;
    // }
    // return false;
    // (num % 2 === 0) ? return true : return false
    return num % 2 === 0;
}
console.log(isEven(5));

function firstChar(str, index) {
    return str[index];
}
console.log(firstChar('Amey', 3));
console.log(firstChar('jhjffjajafkahfghjftywruiioljhgxcn', 28));

function findTarget(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            return `target found at ${index} position`;
        }
    }
    return "target not found";
}
console.log(findTarget([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(findTarget([1, 2, 3, 4, 5, 6, 7, 8, 9], 71));