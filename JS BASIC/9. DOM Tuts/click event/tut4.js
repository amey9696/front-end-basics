// practice

const allBtn = document.querySelectorAll(".my-buttons button");

for (let button of allBtn) {
    button.addEventListener("click", function () {
        button.style.backgroundColor = "yellow";
        button.style.color = "grey";
    })
}