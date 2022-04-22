//why function is used?
// let name1="abc";
// let name2="xyz";
// let name3="mno";
// console.log(`happy birthday ${name1}`);
// console.log(`happy birthday ${name2}`);
// console.log(`happy birthday ${name3}`);
//How many times you write this same code...?

// function wish(name,thank){ //function define
//     console.log(`happy birthday ${name} ${thank}`);
// }
// let name='amey'; //assign value to agruments/key i.e name
// wish(name,'thank u so much'); //function call

// function return a value
// case 1
// function wishGm(name,thank){ 
//     console.log(`Good Morning ${name} ..! ${thank}`);
//     return 1; //if u remove this statement then show undefined
// }
// let name='amey';
// let val=wishGm(name,'Have a Nice Day!'); 
// console.log(val);

// case 2
// function wishGm(named,thank){ 
//     console.log(`Good Morning ${name} ..! ${thank}`);
//     return 1; 
// }
// let named='amey';
// let val2=wishGm(named)//if u remove this statement then show undefined'Have a Nice Day!'); 
// console.log(val2);

// // case 3
// function wishGm(named,thank='thank u so much'){ 
//     console.log(`Good Morning ${named} ..! ${thank}`);
//     return 1; 
// }
// let named='amey';
// let val2=wishGm(named)// if u not give second value here then by default parameter value is copied
// console.log(val2);

// case 4
// function wishGm(named,thank='thank u so much'){ 
//     msg=`Good Morning ${name} ..! ${thank}`;
//     return msg; 
// }
// let named='amey';
// let val2=wishGm(named)
// console.log(val2);

//*****************put function into variable
// let myFunc=function wishGm(name,thank='thank u so much'){ 
//     msg=`Good Morning ${name} ..! ${thank}`;
//     return msg; 
// }
// let name='amey';
// let val2=myFunc(name)
// console.log(val2);

//function inside in Object
// const myObj={
//     name:"amey",
//     game:function(){
//         return "GTA5";
//     }
// }
// console.log(myObj.game());

//======================================================== SCOPE in FUNCTION =========================================================
// case1
// var i=234;
// console.log(i); //op is 234
// function ui(name){
//     i=9;
//     console.log(i); //op is 9 due to i=9(this i has now scope is global)
//     return `this is ${name} ui`;
// }
// console.log(ui("amey"),i); //i=9 because overlapped old value 234 and i=9 scope is now global

// case2
// let i=234;
// console.log(i);//op is 234
// function ui(name){
//     let i=9;
//     console.log(i);//value is 9 due to let i=9 has block scope
//     return `this is ${name} ui`;
// }
// console.log(ui("amey"),i); //i value is 234 due to the old i has global scope(line no 83 let i=234)

// case3
// if(1){
//     var i=234; //global i
//     console.log(i);//234
// }
// console.log(i)//234
// function ui(name){
//     let i=9;//var i=9;
//     console.log(i);//value is 9(same for let/const/var) due to let i=9 has block scope
//     return `this is ${name} ui`;
// }
// console.log(ui("amey"),i); //i value is 234 due to the line no 94 var i=234 has global scope
 
// case4
// case3
// if(1){
//     let i=234; //block scope
//     console.log(i);//234
// }
// console.log(i)//error due to the let i=234 line no 108 has block scope
// function ui(name){
//     let i=9;
//     console.log(i);//value is 9(same for let/const/var) due to let i=9 has block scope
//     return `this is ${name} ui`;
// }
// console.log(ui("amey"),i); //i value is 234 due to the line no 94 var i=234 has global scope

//let/const has block level scope and var has function level scope

//===================Function inside function================
// var student={
//     Name:"amey",
//     Adddress:"Guhagar",
//     RollNo:12,
//     isGraduated:true,
//     details:function(){
//         console.log("trying to add data in db............")
//     }
// };
// student.details()

function hello(message){
    console.log(message)
    var world=function(){
        console.log("function inside function")
    }
    // console.log(world)
    return world
}
w=hello("hiiii")
// console.log(w)
w()
//=============================varius way to declare a function=============================
console.log("======================1st way======================")
function h1(message){
    console.log(message)
}
h1("hello h1")

console.log("======================2nd way======================")
var h2=function(message){
        console.log(message)
    }
h2("hello h2")

console.log("======================3rd way======================")
h3=(message)=>{console.log(message+" world")}
h3("hello h3")

console.log("======================4th way======================")
h4=message=> console.log(message)
h4("hello h4");

// ========================use of return statement in Arrow function======================
h5=message=> {return message;}
let v=h5("hello h5");
console.log(v);

// =================What is return?
//this is simple function without using return but this is not used in modern website design so skip it
// let num=4;
// let anotherNum=5;
// function add(n1,n2){
//     console.log(n1+n2)
// }
// add(num,anotherNum);

//return means:-eg
// let num=4;
// let anotherNum=5;
// function add(n1,n2){
//    return n1+n2;
// }
// let sum=add(num,anotherNum);
// console.log(sum);

// function mul(n1,n2){
//     return n1*n2;
// }
// let multi=mul(prompt("enter a num:"),sum);//prompt used for gives input from the user
// console.log(multi);