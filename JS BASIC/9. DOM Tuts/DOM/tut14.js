// More methods to add elements on page
// some old methods to supoort poor IE (Internet Explorer)
// appendChild()
// insertBefore(html,where)
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");

//new element
const li = document.createElement("li");
li.textContent = "new Todo";
// ul.appendChild(li);

// insertBefore
const referenceNode = document.querySelector(".first-todo");
// ul.insertBefore(li, referenceNode);

//replaceChild
ul.replaceChild(li, referenceNode);

// removeChild
ul.removeChild(li);
