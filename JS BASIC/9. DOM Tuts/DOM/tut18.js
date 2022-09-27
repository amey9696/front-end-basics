// This keyword inside eventListener callback
const btn = document.querySelector(".btn-headline");

// in normal function this value has its parent i.e button
btn.addEventListener("click", function () {
    console.log("you clicked me");
    console.log(this);
});

// in arrow function this value has window
// btn.addEventListener("click", () => {
//     console.log("you clicked me");
//     console.log(this);
// });