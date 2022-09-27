// Callback Hell and Pyramid of doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "red";
//     setTimeout(() => {
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "orange";
//         setTimeout(() => {
//             heading3.textContent = "Heading 3";
//             heading3.style.color = "yellow";
//             setTimeout(() => {
//                 heading4.textContent = "Heading 4";
//                 heading4.style.color = "green";
//                 setTimeout(() => {
//                     heading5.textContent = "Heading 5";
//                     heading5.style.color = "blue";
//                     setTimeout(() => {
//                         heading6.textContent = "Heading 6";
//                         heading6.style.color = "violet";
//                         setTimeout(() => {
//                             heading7.textContent = "Heading 7";
//                             heading7.style.color = "purple";
//                         }, 7000);
//                     }, 6000);
//                 }, 5000);
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);

//it is called as callback hell.i.e nesting callbacks..
// i.e callback inside callbacks
// it is also called pyramid of doom


// using functions
function changeText(element, text, color, time, onSucess, onFailure) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSucess) {
                onSucess();
            }
        } else {
            if (onFailure) {
                onFailure();
            }
        }
    }, time);
}

changeText(heading1, "Heading 1", "red", 1000, () => {
    changeText(heading2, "Heading 2", "orange", 2000, () => {
        changeText(heading3, "Heading 3", "yellow", 1000, () => {
            changeText(heading4, "Heading 4", "green", 2000, () => {
                changeText(heading5, "Heading 5", "blue", 1000, () => {
                    changeText(heading6, "Heading 6", "violet", 2000, () => {
                        changeText(heading7, "Heading 7", "purple", 1000, () => {

                        }, () => { console.log("Heading7 does not exist..."); });
                    }, () => { console.log("Heading6 does not exist..."); });
                }, () => { console.log("Heading5 does not exist..."); });
            }, () => { console.log("Heading4 does not exist..."); });
        }, () => { console.log("Heading3 does not exist..."); });
    }, () => { console.log("Heading2 does not exist..."); });
}, () => { console.log("Heading1 does not exist..."); });
// it is also called pyramid of doom