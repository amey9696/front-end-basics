// Clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new Todo";
//if you prepend node after append then append not work
const li2 = li.cloneNode(true); // if you dont write true then child present in that node not visible(not cloning all data). called deep clonong
ul.append(li);
ul.prepend(li2);
