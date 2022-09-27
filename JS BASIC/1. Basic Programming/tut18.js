// switch statement
let today = new Date().getDay();

//using if else ladder
// if (today === 0) {
//     console.log("Today is Sunday");
// }
// else if (today === 1) {
//     console.log("Today is Monday");
// }
// else if (today === 2) {
//     console.log("Today is Tuesday");
// }
// else if (today === 3) {
//     console.log("Today is Wednesday");
// }
// else if (today === 4) {
//     console.log("Today is Thursday");
// }
// else if (today === 5) {
//     console.log("Today is Friday");
// }
// else {
//     console.log("Today is Saturday");
// }

//using switch statement
switch (today) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    default:
        console.log("Today is Saturday");
        break;
}