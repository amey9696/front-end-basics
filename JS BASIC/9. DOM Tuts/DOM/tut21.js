// keypress event
const body = document.body;
// body.addEventListener("keypress", (e) => {
//     console.log(e.key);
// });

// mouseoverand mouseleave event
const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", () => {
    console.log("mouseover event occurred..!");
});

mainButton.addEventListener("mouseleave", () => {
    console.log("mouseleave event occurred..!");
});