let ele=document.querySelector('.no');
ele=document.querySelector('.container');
// console.log(ele.childNodes); //op is NodeList(17) [text, comment, text, h1#heading, text, div#myfirst.child.red.good, text, div.child, text, div.child.red, text, div.child, text, img, text, form, text]
// console.log(ele.children); //op is HTMLCollection(7) [h1#heading, div#myfirst.child.red.good, div.child, div.child.red, div.child, img, form, heading: h1#heading, myfirst: div#myfirst.child.red.good]
// console.log(ele);
// let nodeName=ele.childNodes[5].nodeName;// show element present at 5 position in NodeList(17)
// console.log(nodeName); //op is DIV
// let nodeType=ele.childNodes[5].nodeType; //op is 1
// console.log(nodeType);

let container=document.querySelector('div.container');
// console.log(container.children[1].children[0].children);// it can gives children inside children
//this is also called as traversing
// console.log(container.firstChild); //op is #text
// console.log(container.firstElementChild);// op is <h1 id="heading">Welcome to my site</h1>
// console.log(container.lastChild);//op is #text
// console.log(container.lastElementChild); //op is <form action="none.html" method="post">----to </form>
// console.log(container.childElementCount); //op is 7
// console.log(container.firstElementChild.parentNode); //op all line between <div class="container"> to </div>
// console.log(container.firstElementChild.nextSibling);// op is #text
// console.log(container.firstElementChild.nextElementSibling); //op is<div id="myfirst" class="child red good">child 1 <ul class="this"> to------</div>
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling); // op is <div class="child">child 4</div>
// this is called as chaining, we can chaining in firstElementChild,lastElementChild.....so many others also
//sibling means next/after

// childNodes vs children
// childNodes= show all content in html i.e comment,text,tags,element with id or class also
// children= show only tags also i. e elemnt only with with id or class
// for more run line no 1 to 4 then see diff
//for development purpose use children for less bugs


/*
Node Type:-
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType 
*/ 