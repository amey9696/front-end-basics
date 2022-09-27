// How event listener works
console.log("Script Start..!")

const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons) {
    button.addEventListener("click", (event) => {
        let num = 0;
        for (let i = 0; i <= 1000000000; i++) {
            num += i
        }
        console.log(event.currentTarget.textContent, num);
    });
}

let outerVal = 0;
for (let i = 0; i <= 100000000; i++) {
    outerVal += i
}
console.log("Value of outerVal is:", outerVal)
console.log("Script End..!")