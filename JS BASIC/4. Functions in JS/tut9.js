// Rest Parameters

function myFunc(a, b, ...c) {
    console.log(`a is ${a}.`)
    console.log(`b is ${b}.`)
    console.log(`c is ${c}.`)
}
// myFunc(1, 2, 3, 4, 5, 6); 

function addAll(...numbers) {

    // function addAll(a, ...b) {
    // let total = a;
    // for (let index = 0; index < b.length; index++) {
    //     // console.log(b[index]);
    //     total = total + b[index];
    // }
    // console.log(total);

    // other logic
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    console.log(total);

}
addAll(1, 4, 5, 6)