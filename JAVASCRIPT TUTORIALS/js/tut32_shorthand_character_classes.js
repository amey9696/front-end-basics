//character classes
let regex=/\wme/;   // /w means one alphanumeric character with -_ only symbols (match with numeric character )
regex=/\w+e1y/;     // /w+ means one or more word characters
regex=/\wbro/;      //non word character
regex=/\w+bro/;     //matches to all character,numbers and symbols i.e more than non word characters
regex=/is \d999/;   //d+ means more than one digit
regex=/is \D999/;   //match with one non digit
regex=/is \D+999/;  //more than one non digit
regex=/\snumber is/;//match whitespace character
regex=/\s+number is/;//match with more than one whitespace character
regex=/\Snumber is/;//match with non whitespace character
regex=/\S+number is/;//match with more than one non whitespace character
regex=/5y3y\b/;//Word Boundary

//Assertions
regex=/a(?=m)/;//means first word a then next word is come m then match
regex=/a(?!y)/;//means first word a then next word is other than y then match

str="ameame1y5y3y %%$@bro inumber is 999amey888777";

let result=regex.exec(str);
// console.log("The result from exec is ",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);  
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);  
}