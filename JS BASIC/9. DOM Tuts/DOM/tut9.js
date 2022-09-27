// classList
const todoSection = document.querySelector(".todo-section");
// console.log(todoSection.classList); //DOMTokenList(2) ['todo-section', 'container', value: 'todo-section container']

// How to assign and remove class to tag using js?
// todoSection.classList.add("bg-dark");
todoSection.classList.remove("bg-light");

// class present or not?
const ans = todoSection.classList.contains("container");
// console.log(ans); //true

todoSection.classList.toggle("bg-dark"); // adding 
todoSection.classList.toggle("bg-dark"); // removing

const header = document.querySelector(".header");
// console.log(header.classList);
// header.classList.add("bg-light"); 