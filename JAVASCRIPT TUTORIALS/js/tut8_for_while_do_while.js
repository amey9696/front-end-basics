// LOOPS for, do-while,while

//*****************************for loop
// Syntax
/*for (initialize(let i = 0); condition(i < n);increment/decrement(i++/i--)) {
    statement;   
}*/

// print 1 to 5 no:-
// for (let i=1;i<=5;i++){
//     console.log(i);
// }

//********************************** * while loop
// while (condition) {
//     statement;
//     incrememnt
// }

//print 1 to 5 no using while loop
// let a=1;
// while(a<=5){
//     console.log(a);
//     a++;
// }
// do{
//     console.log(a);
//      a++;
// }
// while(a<=5)

//********************************do-while loop
// do {
//     statement;
//     increment;
// } while (condition);

// let a=1;
// do{
//     console.log(a);
//      a++;
// }
// while(a<=5)

// ************************************************ Break and Continue statement ********************************************
// Break statement
// let a=1;
// while(a<=10){
//     console.log(a);
//     a++;
//     if(a===7){
//         break;
//     }
// }

// Continue statement
// for (let a=1;a<6;a++){
//     if (a%2==0){
//         continue;
//     }
//     console.log(a);
// }

// ***************************** for-each loop
// let arr=[1,5,7,8,9,3,5];
//display array without using for loop
// arr.forEach(element => {
//     console.log(element);
// });   
//arr.forEach(element,index,array => {
    //     console.log(element,index,array);
    // });   
    
//display array using for loop
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
    
// }

//for-in loop
//display object data i.e json file data
// let obj={
//     name:"amey",
//     age:24,
//     passion:"developer",
//     os:"windows"
// }
// for(let key in obj){
//     console.log(obj[key]);
//     //console.log(`The ${key} of object is ${obj[key]}`);
// }
//op is amey \n 24 \n developer \n windows

// Difference between post increment(i++) and pre increment(++i)?
// let i=5;
// let j=5
// console.log(i++); //op is 5
// console.log(++j); //op is 6