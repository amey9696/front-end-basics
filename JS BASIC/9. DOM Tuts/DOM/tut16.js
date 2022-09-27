// How to get the dimensions of the element
// how to get width height
const sectionTodo = document.querySelector(".todo-section");
// const info = sectionTodo.getBoundingClientRect();
// const info = sectionTodo.getBoundingClientRect().height;
// const info = sectionTodo.getBoundingClientRect().width;
const info = sectionTodo.getBoundingClientRect().top;
console.log(info);