//******************************************* */ 1. Arrays********************************************************************

// let marks=[34,50,11,94,97,55,67];
// const fruit=['mango','orange','apple','chiku'];
// const mix=[34,44.5, true, [1,2],'string'];

// const arr=new Array(1,5.2,'str',[1,3], true);
// console.log(arr); //[1, 5.2, "str", Array(2), true]
// console.log(marks);
// console.log(fruit);
// console.log(mix);
// console.log(mix[2]); op is true
// console.log(mix.length); // op is 5
//=================methods=================
// console.log(Array.isArray(arr)); //true, array or not is show i.e arr is array but if you enter 3 then false i.e 3 is not an array
// arr[0]=100; //value is change at index 0 postion i.e old value 1 is replace by 100
// console.log(arr);
// console.log(marks.indexOf(97));//show position of 97

//Mutating or Modifying arrays
//===================add========================
// marks.push(45); //45 added in marks array in end position
// marks.unshift(1001);//1001 added in marks array in start position
//============================substract==================================
// marks.pop() //67 i.e last one is deleted..old is 67,because push and unshift are commented
// marks.shift(); //34 i.e first one is deleted..old is 34,because push and unshift are commented
// marks.splice(1,2);//op is [34, 94, 97, 55, 67] start with 34 and delete next 2 num

// marks.reverse(); //reverse the array 

// let marks2=[11,22,33,44];
// marks=marks.concat(marks2); //added marks2 array in marks 1
// console.log(marks);

//*********************************************************** */ 2. Objects**********************************************************
// let myObj={
//     fname:"amey",
//     'lname':'palshetkar',
//     age:24,
//     isDeveloper:true,
//     technology:['python','js','html','css','react','node']
// }

// console.log(myObj);
// console.log(myObj['fname']);
// console.log(myObj.age);
// console.log(myObj.isDeveloper);