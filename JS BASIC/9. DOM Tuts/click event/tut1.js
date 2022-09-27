// Add events on multiple elements
const allButton = document.querySelectorAll("button");
// console.log(allButton);

// using for of loop
// for (let button of allButton) {
//     button.addEventListener("click", function () {
//         // console.log("You clicked button..!");
//         console.log(this.textContent);
//     });
// }

// using simple for loop
// for (let i = 0; i < allButton.length; i++) {
//     allButton[i].addEventListener("click", function () {
//         // console.log("You clicked button..!");
//         console.log(this.textContent);
//     });
// }

// using forEach loop
// allButton.forEach(button => {
//     button.addEventListener("click", function () {
//         // console.log("You clicked button..!");
//         console.log(this.textContent);
//     });
// });

// firstButton.addEventListener("click", function () {
//     console.log("You clicked first button..!")
// })
