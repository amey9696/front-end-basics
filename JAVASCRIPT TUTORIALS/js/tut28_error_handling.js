//================== throw user defined(custom) erro======================
//pretend this is coming from a server as response
// let a="amey";
// if (a!=undefined){

//     throw new Error('this is not undefined'); //custom error not by js error
// }
// else{
//     console.log('this is undefined');
// }

//================================== try catch finally block ======================
try {
    //ssjdhdjdhdj
    console.log('inside try block');
    functionadd();

} catch (error) {
    console.log('are u ok');
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {//finally run in both error occur also or not error also
    console.log("if error occur or not, you run this finally block...");
}