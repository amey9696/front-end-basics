// Insert adjacent elements
//elem.insertAdjacentHTML(where, html)
// afterbegin - same like prepend
// beforeend - same like append
// beforebegin - same like before
// afterend - same like after

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>Learn HTML</li>"); // append
todoList.insertAdjacentHTML("beforebegin", "<li>Learn CSS</li>"); // before
todoList.insertAdjacentHTML("afterbegin", "<li>Learn JS</li>"); //prepend
todoList.insertAdjacentHTML("afterend", "<li>Learn React</li>"); // after