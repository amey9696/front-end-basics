const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodotext = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `
                            <span class="text">${newTodotext}</span>
                            <div class="todo-buttons">
                                <button class="todo-btn done">Done</button>
                                <button class="todo-btn remove">Remove</button>
                            </div>
                        `;
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
});

// add following featured
// 1 store in local storage
// 2 add pagination for todo list (5 todo per page)
// 3 try to add data of signup form in mongodb