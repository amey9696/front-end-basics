// event Object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function (event) {
//     console.log(event);
// });

// if you add eventListener on any button then
// js Engine ---execute code line by line
//  chrome browser has js engine and some extra features added
// browser has also webApi

// if browser know that user performed an event then
// browser do two works:-
// 1 gives callback function to js engine
// 2 also give information about given event with callback function
// we receive this information on object form

const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons) {
    button.addEventListener("click", function (event) {
        console.log(event.currentTarget);
    });
}