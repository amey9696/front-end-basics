// Add new elements to page
// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML); //<li>Todo 1</li>
todoList.innerHTML += "<li>Todo 2</li>";
todoList.innerHTML += "<li>Todo 3</li>";

//when you should use it, when you should not
// innerHTML has some performance issue, every time rendering any element innerHTML also render old ones data also