// Deeply understand dom tree, root node , element nodes, text nodes
// const rootNode = document.getRootNode();
// console.log(rootNode); //#document
// console.log(rootNode.childNodes[1]); // show all html file i.e all tags, data
// console.log(rootNode.childNodes[1].childNodes); //NodeList(3) [head, text, body]
// console.log(rootNode.childNodes[1].childNodes[0].childNodes); //NodeList(11) [text, meta, text, meta, text, meta, text, title, text, script, text]
// console.log(rootNode.childNodes[1].childNodes[2].childNodes); //NodeList(7) [text, div.container, text, comment, text, script, text]

// //Sibling Relation
// // sibling means one parent has to many child they are sibling i.e brother
// console.log(rootNode.childNodes[1].childNodes[0].nextSibling); //text

//browser automatically sets white space to normal. we can set white space also using white-space:pre; css property

//parentNode
// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// // const div = h1.parentNode.parentNode;// body tag
// div.style.color = "#efefef"; //div
// div.style.backgroundColor = "#333";

//childNode
// const head = document.querySelector("head");
// console.log(head); // <head>.....</head>
// const title = head.querySelector("title");
// console.log(title.childNodes);//NodeList [text]
const container = document.querySelector(".container");
// console.log(container.childNodes); //NodeList(5) [text, h1, text, p, text]
console.log(container.children); //HTMLCollection(2) [h1, p]
