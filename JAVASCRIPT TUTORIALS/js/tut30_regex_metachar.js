let regex=/amey/;

//lets look into some meta characters
regex=/^amar/; //(^ carrat symbol) means string start with amar
regex=/ey$/;  //string ends with ey
regex=/a.ey/;//matches any one character between a & ey
regex=/a*ey/;//matches any 0 or one characters i.e also match aklmey
regex=/am?e?y/;//matches any 0 or more characters these a,m,e.y any one is present in string then match oherwise no
//? after characters means that charachter is optional
regex=/a\*ey/
let str="amey is a good boy";//string
let result=regex.exec(str);
console.log("The result from exec is: ",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);  
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);  
}
