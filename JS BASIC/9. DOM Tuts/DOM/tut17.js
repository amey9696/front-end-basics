// Intro to events
// click, button press, hover

// there are total 3 ways to add event

// 1. add event directly in html
// eg- <button class="btn btn-headline" onclick="console.log('You clicked me..!')">Learn More</button>
// but this old way

const btn = document.querySelector(".btn-headline");
// 2 using js
// // console.log(btn);
// btn.onclick = function () {
//     console.log("You clicked me..!");
// }

//3. method-- addEventListener
function clickMe() {
    console.log("you clicked me");
}
// btn.addEventListener("click", clickMe); 
// or
btn.addEventListener("click", function () {
    console.log("you clicked me");
});
// both are same