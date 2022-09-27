// nested if else
let luckyNo = 45;
let userGuess = +prompt("Guess a number"); //prompt access string data types value only
// console.log(typeof userGuess, userGuess);

if (userGuess === luckyNo) {
    console.log("your guess is right");
} else {
    if (userGuess < luckyNo) {
        console.log("too low!");
    } else {
        console.log("too high");
    }
}

