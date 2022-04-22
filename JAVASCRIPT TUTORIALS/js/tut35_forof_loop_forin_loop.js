//traditional for loop
let people=["amey","anuj","aditya"];
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);    
// }

//ITERATING AN OBJECT
obj={
    name:"amey",
    language:"js",
    work:"MERN Developer"
}

//Iterating an object using traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);    
// }

//Iterating an object using traditional for loop
// for (let key in obj){ //use only when key of object is used
//     console.log(obj[key]);
// }

//ITERATING AN STRING
//we can use for in with strings to loop through all the characters
// myString="This is my string";
// for(let char in myString){
//     console.log(myString[char]);
// }

//we can use for loop with strings to loop through all the characters
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

//******************* FOR OFF LOOP *******************************
people=["amey","anuj","aditya"];

for (let name of people){ //show name only
    console.log(name);
}

for (let name in people){ //show index number of name
    console.log(name);
}
