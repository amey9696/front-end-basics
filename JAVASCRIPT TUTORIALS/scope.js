// //Rule 1 prove let has block scope
// const j=5;//var j=5;//let j=5; //this j has global scope so all j related console statement are run
// function valueScope(){
//     //let i=5;//this let has block scope 
//     //const i=5; //this const has now block scope
//     //var i=6; //this var has now block scope
//     //  console.log(i);
//     // console.log(j); //this will display becasue j has global scope
// }
// console.log(i); //error due to the i has block scope
// // console.log(j);//this will display becasue j has global scope
// valueScope()

// let k=100;//const k=100;//var k=100; this k has global scope
// if(1){
    // var i=5; //this i has function scope u access outside{} also
    // let j=6;//const j=6;
    // console.log(i); //op is 5
    // console.log(j);//op is 6 due to the let/const j=6 has block scope
    // console.log(k);//this will display becasue k has global scope
// }
// console.log(i); //op is 5 due to var i=5 has global scope
// console.log(j);//error due to the let/const j=6 has block scope
// console.log(k);//this will display becasue k has global scope
