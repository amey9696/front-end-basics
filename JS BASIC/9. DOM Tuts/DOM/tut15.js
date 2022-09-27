// static list vs live list

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "Item 6";
// const ulist = document.querySelector(".todo-list");

ul.append(sixthLi);

console.log(listItems); // but nodeList show only 5 result here..this is called as live list
// console.log(li); // but nodeList show only 5 result here..this is called as live list

// querySelectorAll provides you a static list/ give you node list
// getElementBySomething (Something means Id,Class, Tag etc) provides you a live list / give you html list


