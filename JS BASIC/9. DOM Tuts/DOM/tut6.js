// Get and set attributes
const link = document.querySelector('a');
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://mail.google.com")
console.log(link.getAttribute("href"));

const input = document.querySelector('.form-todo input'); //'.form-todo input' means goto .form-todo class and select first input 
console.log(input.getAttribute("type"));