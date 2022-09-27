// textContent & innerText

// *************************** Interview Questions *****************************
// textContent
const heading = document.getElementById("main-heading");
console.log(heading.textContent);
// heading.textContent = "This is something else";
// console.log(heading.textContent);
// textContent property used for changing text present in html using js
// if you hide some text in html for eg-<h2 id="main-heading">Manage your tasks <span style="display: none;">Hello</span></h2>
// then in browser Hello not showing but textContent show this Hello also

// innerText
console.log(heading.innerText);
// In innerText, Hello is not showing 