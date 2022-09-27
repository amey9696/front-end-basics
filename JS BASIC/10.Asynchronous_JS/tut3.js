// setInterval
// console.log("script start..");
// setInterval(() => {
//     console.log(Math.ceil(Math.random() * 100));
// }, 5000); //every 5 second, setInterval return evry time new number until you stop program or close browser
// console.log("script end..");

const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    body.style.background = `rgb(${red},${green},${blue})`
}, 2000);

button.addEventListener("click", () => {
    clearInterval(intervalId);
    button.textContent = body.style.background;
});