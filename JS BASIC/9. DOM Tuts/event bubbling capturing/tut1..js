// event bubbling/ event propogation

const grandParent = document.querySelector(".grandParent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// child.addEventListener("click", () => {
//     console.log("You clicked on child..!")
// });

// parent.addEventListener("click", () => {
//     console.log("You clicked on parent..!")
// });

// grandParent.addEventListener("click", () => {
//     console.log("You clicked on grandParent..!")
// });

// document.body.addEventListener("click", () => {
//     console.log("You clicked on body..!")
// });

// Event Capturing
// child.addEventListener("click", () => {
//     console.log("Capture !!! child..!")
// }, true); //here 3rd argument true means capture the event

// parent.addEventListener("click", () => {
//     console.log("Capture !!! parent..!")
// }, true);

// grandParent.addEventListener("click", () => {
//     console.log("Capture !!! grandParent..!")
// }, true);

// document.body.addEventListener("click", () => {
//     console.log("Capture !!! body..!")
// }, true);
// if you click on child Then,
// capturing cycle work on descending order means here first tagert is body, then grandParent then parent then child
// in bubbling cycle work opposite to capturing cycle i.e first child, then parent, then grandParent then body .ie ascending

// Event delegation
// required only grandParent
grandParent.addEventListener("click", (e) => {
    console.log("You click something..!!");
    console.log(e.target.textContent);
});