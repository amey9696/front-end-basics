// Arrow Functions

const singHappyBirhdaySong = () => {
    console.log("happy birhday to you")
}
singHappyBirhdaySong();

const add = (a, b) => { // parameter
    return a + b;
}
console.log(add(4, 6)); //arguments

const name = str => console.log(str);
name("amey");

const fullName = (str1, str2) => console.log(str1 + " " + str2);
fullName("amey", "palshetkar");

const firstChar = anyStr => anyStr[0];
console.log(firstChar("Amey"))