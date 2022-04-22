// // 1. 
// let string = "what-is-hacking";
// let arr1 = ["ghost", "hunted", "phising", "hacking"];
// let arr2 = string.split('-');
// let arr3 = [];
// // for (let i = 0; i < arr1.length; i++) {
// //     for (let j = 0; j < arr2.length; j++) {
// //         if (arr1[i] === arr2[j]) {
// //             arr3.push(arr1[i]);
// //         }
// //     }
// // }
// arr2.forEach(element => {
//     if (arr1.includes(element)) {
//         arr3.push(element);
//         console.log(element)
//     }
// });
// console.log(arr3);
// if (arr3.length !== 0) {
//     console.log("Please Change the title")
// } else {
//     console.log("All ok")
// }

// 2
const array1 = ["ghost", "hunted", "phising", "hacking"];
const array2 = ['what', 'is', 'hacking']


function findCommonElements3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log(findCommonElements3(array1, array2))
console.log(array1.some(item => array2.includes(item)))