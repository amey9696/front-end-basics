// // type conversion
let a;
// a=String(50);
// console.log(a,typeof(a),a.length);

// let date=String(new Date());
// console.log(date,typeof(date),date.length);

// let ar=String([1,2,3,4,2]);
// console.log(ar,typeof(ar),ar.length);

// let i=8;
// console.log(i.toString);

// let z=Number("50");
// z=Number("50l") //NaN
// z=Number(true) //1
// z=Number([1,2,3,4]) //NaN
// console.log(z,typeof(z));

// let no=parseInt("50");
// no=parseInt("40.99");
// console.log(no,typeof(no));

// let nos=parseFloat("50.098");
// console.log(nos.toFixed(2),typeof(nos)); //50.10, Number

// // Type Coercion

// let myNo="34";
// let myNum=34;
// console.log(myNo+myNum); //op is 3434
// //   BUT
let myno=Number("34");
let mynum=34;
console.log(myno+mynum);
