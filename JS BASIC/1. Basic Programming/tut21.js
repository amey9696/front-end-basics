// break and continue

//break
// print 1 to 10 value uisng for loop but if value is 3 then rerminate the loop

for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// console.log('************************ using while loop *****************************')

// let i = 1;
// while (i <= 10) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
//     i++
// }


//continue
console.log('************************ continue statement *****************************')
//print even number between 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// console.log('************************ using while loop *****************************')
// let i = 1;
// while (i <= 10) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
//     i++
// }