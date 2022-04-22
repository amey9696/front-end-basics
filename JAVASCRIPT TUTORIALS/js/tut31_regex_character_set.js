// const regex=/^a/e;
// character sets -we use this[]
let regex=/a[a-z]mey/;//character set[a-z]=can be any character from a to z
regex=/a[msd]mey/;//can be an m,s,d
regex=/a[^twj]ey/;//cannot be match if any character t,w,j
regex=/a[^twj]m[ey]/;//cannot be any of t,w,j +can be match an e,y
regex=/a[a-zA-Z]m[eYy0-9]/; //can be match a-zA-z with next char m and last character either ey with number
// str="ammey8"; //character set

//Quantifiers =specify quantity of character -we use this{}
regex=/ame{1}y/; //it means am and e is repeat exactly one time then y
regex=/ame{2}y/; //it means am and e is repeat exactly two time then y
regex=/ame{0,2}y/; //it means am and e is repeated exactly 0 to 2 times
// str="amey";

//Groupings -we use this()
regex=/(amey){2}/; //amey is present 2 times here amey is act as group
// str="amey amey";
regex=/(ame){2}([0-9]y){3}/; //ame is present 2 times after that y and any one number withe y 3 times
str="ameame1y5y3y";

let result=regex.exec(str);
console.log("The result from exec is ",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);  
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);  
}