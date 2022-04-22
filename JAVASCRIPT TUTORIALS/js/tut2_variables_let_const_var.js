// 3 variables- var, let, const

//****************************Rule 1*************************************
/*var a;
let b;
console.log(a) op is undefined
console.log(b);op is undefined
===========not support to const==========
const z;
console.log(z); error: value not given
*/

//****************************Rule 2*************************************
/*var a=10;
a=20;
let b=10;
    b=20; let allow overload the value
console.log(a)
console.log(b);

===========not support to const==========
const z=10;
z=50; const not allow overload the value
console.log(z);
*/

// ****************************Rule 3****************************************
/*var a=100;
var a=200;
let b=1000;
//let b=2000; SyntaxError: Identifier 'b' has already been declared,let not allow overloading the variable but allow overload the value
const x=101;
const x=202; SyntaxError: Identifier 'x' has already been declared,const not allow overloading the variable as well as value
console.log(a);
console.log(b);
console.log(x);*/

//***************************************************SCOPE*****************************************************************

// //----------------------------------------- example 1--------------------------------------------------------------------------
// var a=30;
// {
//     var a=20; //new value of a is 20 is 20 is print
//     console.log(a);
// }
// console.log(a);//new value of a is 20 is 20 is print due to the overload value and var has only global scope
// // //op is 20 20

// let a=30;//this let has global scope
// {
//     let a=20; //this let has local scope
//     console.log(a); //op is 20 here
// }
// console.log(a);//op is 30 here
// //op is 20 30

// //----------------------------------------- example 2--------------------------------------------------------------------------
// let a=20;//var a=20;//const a=20;
// {
//     console.log(a);
// }
// console.log(a);
// //op is 20 20 because let/var/const has global scope

// //----------------------------------------- example 3--------------------------------------------------------------------------
// {
//     var a=20;
//     console.log(a);
// }
// console.log(a);
// // //op is 20 20 because var has global scope..you declare inside {} then there has no scope change but if u use let or const then scope changed

// {
//     const a=20;//let a=20;
//     console.log(a); //op is 20
// }
// console.log(a); //error due to the let/const has block scope

/*****************Most Common Programming Case Type*********************************
 1. camelCase : class userAge, findAll
 2. kabab-case : class user-age, find-all
 3. snake_case : class user_age,find_all
 4. PascalCase : class UserAge, FindAll
 */