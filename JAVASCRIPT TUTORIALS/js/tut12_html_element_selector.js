/*
class is repeated but id cannot be repeated by the tag
i.e <div class="center">
<div class="center"> it is ok
but
<div id="container">
<h1 id="container"> cannot be ok
*/

// Element Selector:-
// 1. single element seletor
// let ele=document.getElementById('myfirst'); //op is <div id="myfirst" class="child red good">child 1</div>
// ele=ele.className; //op is child red good
// ele=ele.childNodes;
// ele=ele.parentNode; //op is <div class="container"> all passage between this</div>
// ele.style.color='red'; //op is child 1 color is now red i.e<div class="container"> all passage between this</div>
// ele.innerText='Good Morning to everyone...!'; //op this line added in display
// console.log(ele.innerText);
// ele.innerHTML='<h1>Good Morning to everyone...!</h1>'; //op this line added in display but change is you can add html tag also
// console.log(ele.innerHTML); 
// console.log(ele); 

//Query selector
// let qSel=document.querySelector('#myfirst'); //op is <div id="myfirst" class="child red good">child 1</div>
// qSel=document.querySelector('.child');
// qSel=document.querySelector('div');
// qSel.style.color='red';
// console.log(qSel);

// 2. multi element slector
let elem=document.getElementsByClassName('child');
elem=document.getElementsByClassName('container');
// console.log(elem[0].getElementsByClassName('child'));
elem=document.getElementsByTagName('div');
// console.log(elem);

// Array.from(elem).forEach(element => {
//     console.log(element);
//     element.style.color="blue";
// });

for (let index = 0; index <elem.length; index++) {
    const element = elem[index];
    console.log(element);
    element.style.color="blue";
}


//What is difference beyween elementSelector and querySelector?
//simply comment out following two statement one by one 
// qSel.style.color='red';(line no 12,16 & 21) AND ele.style.color='red';(line no 24 to 29)
//then u understand what is querySelector
// querySelector can apply css changes to all element present in particular tag (here div class container, so red color goes to all element present in this tag) but elementSelector can apply changes to only one element 

// it is simply means you can change the css properties by using js