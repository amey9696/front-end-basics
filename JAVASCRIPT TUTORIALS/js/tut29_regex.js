// THIS IS BASIC OF REGEX
//let regularExpressionLiteral=/ This is a regular expression literal in js/;
//let stringLiteral=`this is string literal ${regularExpressionLiteral}`;

let reg = /amey/;
reg = /amey/g; //this g called global flag search reg globally
// reg=/amey/i; //case insensitivity i.e amey=Amey, amey=AmEy
// console.log(reg); //op is /amey/
// console.log(reg.source); //op is amey

// let s="My name is amey ";
// let t="My name is aditya ";

// //Function to match expression
// //1. exec() - This function will return an array for match or null for no match

// let result=reg.exec(s);
// console.log(result); //["amey", index: 11, input: "My name is amey palshetkar", groups: undefined]
// let result2=reg.exec(t);
// console.log(result2); //null

// let si="My name is AMEY palshetkar and hello world i am amey "; //this line for reg=/amey/i;
//let resu=reg.exec(si);
//console.log(resu); //["AMEY", index: 11, input: "My name is amey palshetkar and hello world i am amey ", groups: undefined]

let sa = "My name is amey and hello world i am amey ";//this line for reg=/amey/g;
// res=reg.exec(sa);
// console.log(res); //["amey", index: 11, input: "My name is amey palshetkar and hello world i am amey ", groups: undefined]
// res=reg.exec(sa);
// console.log(res); //["amey", index: 48, input: "My name is amey palshetkar and hello world i am amey ", groups: undefined]
// res=reg.exec(sa);
// console.log(res); //null

//2. test()-Returns true or false
// let testResult=reg.test(sa);
// console.log(testResult) //true

// let sas = "My name is ame palshetkar and hello world i am ay ";//this line for reg=/amey/g;
// let testResult = reg.test(sas);
// console.log(testResult) //false

// 3. match()- it will return an array of result or null
// let result3= reg.match(sa) ---this is wrong
// let matchResult= sa.match(reg) //this is right
// console.log(matchResult); //(2) ["amey", "amey"]

let sas = "My name is amy and hello world i am ame ";//this line for reg=/amey/g;
// let matchResults= sas.match(reg) //this is right
// console.log(matchResults); //null

//4. search()- returns index of first match else -1(if not match)
// let searchResult=sa.search(reg);
// console.log(searchResult);//11
// let searchResults= sas.search(reg) //this is right
// console.log(searchResults); //-1

//5. replace() -returns new replaced string with all the replacement(if no flag is given then first match will replace)
let resultReplace=sa.replace(reg,"SA");
console.log(resultReplace); //My name is SA and hello world i am SA 