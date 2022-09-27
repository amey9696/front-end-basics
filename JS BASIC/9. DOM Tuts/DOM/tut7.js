// get multiple elements using getElements by class name
// const navItems = document.getElementsByClassName('nav-item'); // gives HTMLCollection like array object
// console.log(navItems);
// console.log(navItems[2]);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));

let navLinks = document.getElementsByTagName("a"); // gives HTMLCollection like array object

// using simple for loop
for (let index = 0; index < navLinks.length; index++) {
    const Elem = navLinks[index];
    Elem.style.backgroundColor = "green";
    Elem.style.color = "red";
}

// using for of loop
// for (let elem of navLinks) {
//     elem.style.color = "red";
//     elem.style.backgroundColor = "green";
// }

// get multiple elements using querySelectorAll
// const navItems = document.querySelectorAll('.nav-item'); // gives HTMLCollection like array object
// console.log(navItems);

//we only use simple for loop and for of loop for iterating HTMLElement
// we can't use forEach loop.It does not work on that
// array like object support===> index, length, slice
// array like object not support===> forEach,map, reduce, filter

//change HTMLCollection into array
const newArr = Array.from(navLinks);
// console.log(Array.isArray(newArr));

// node List
const newAnchorElem = document.querySelectorAll("a");
// console.log(newAnchorElem);

// simple for loop
// for (let index = 0; index < newAnchorElem.length; index++) {
//     const Elem = newAnchorElem[index];
//     console.log(Elem)
// }

// for of loop
// for (const element of newAnchorElem) {
//     console.log(element)
// }

// forEach loop
// newAnchorElem.forEach(element => {
//     console.log(element)
// });

const newArr2 = Array.from(newAnchorElem);
console.log(Array.isArray(newArr2));

//we use all loop i.e simple for loop, for of, forEach loop on node list
// but in HTMLCollection forEach not work