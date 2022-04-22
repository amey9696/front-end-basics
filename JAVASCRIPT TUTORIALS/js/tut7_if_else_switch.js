// if else statement
/* syntax
if (condition) {
   statement1 
} else {
    statement2
}*/
//  ==============Example
// const age=44;
// if(age>=18){
//     console.log("you are eligible for vote");
// }
// else{
//     console.log("you are not eligible for vote");
// }

// ***********************************meaning and use of ===
// const ag='44';
// if(ag===44){
//     console.log("your age is 44");
// }
// else{
//     console.log("your age is not 44"); //print this because === this operator check both value and datatype i.e value is num, string or not
// }

// const n=44;
// if (n!=44){ //this condition are convert into false statement so display else block output
//     console.log("No is 44");
// }
// else{
//     console.log("No not 44");
// }

// ******************************* if else ladder
/*if (condition1) {
    statement1
}
else if(condition2){
    statement2
} 
else {
    statement3
}*/
// ==============Example
// const no=1;
// if (no>0){
//     console.log("+ve no");
// }
// else if (no==0) { //== this operator check only value not datatype of value
//     console.log("you enter 0");
// }
// else{
//     console.log("-ve no");
// }

//*****************************************use of && and ||
// const doesDrive=true;
// const agge=12;
// if (doesDrive && agge>=18){ //if (doesDrive || age>=18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

//******************************Ternary Operator
// const aej=45;
// console.log(aej==35?'Your age is 45':'Your age is not 45')

//============================================================switch case statements=====================================================
// syntax
/*switch (key) {
    case value1:
        statement 1;
        break;
    case value1:
        statement 2;
        break;
    default:
        statement 3;
        break;
}*/

// Example
const season='winter';
switch (season) {
    case 'summer':
        console.log("season is summer")
        break;
    case 'rainy':
        console.log("season is rainy")
        break;
    case 'winter':
        console.log("season is winter")
        break;
    default:
        console.log("season not found")
        break;
}
















// // difference between == AND ===:-
// // === this operator check both value and datatype i.e value is num, string or not 
// //== this operator check only value not datatype of value