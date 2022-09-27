// Create elements
// document.createElement()
// append -item added in last position
// prepend -item added in first position
// remove

// const newTodoItem = document.createElement("li"); //create <li></li>
// const newTodoItemText = document.createTextNode("Study JS"); //create <li></li>
// short hand for createTextNode
// newTodoItem.textContent = "Study JS";
// const todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem); // appendChild() is old one so use append()
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

//remove elements
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1)

// for given 2 methods styling not apply
//before
// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Study CSS";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
// todoList.after(newTodoItem);