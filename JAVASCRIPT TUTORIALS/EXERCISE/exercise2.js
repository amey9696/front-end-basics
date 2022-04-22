// // Problem statement
// /* You have to create a div and inject it into the page which contain a heading. Whenever someone click on div, 
// it should be converted into the editable item. whenever user clicks away(use blur event). save the note into localStorage */
 
// /* Requirement:- event, element selector, */
// /* Required js file:- tut 12 to 17 */

// //steps:-
//(for the following code this js add in exercise.html)
// //1. create div with propery contenteditable="true" and display with heading
// // 2. click event on div




// //this code for create content this js add in website.html
// let divElem=document.createElement('div');

// //add text to that create element for edit
// let val=localStorage.getItem('text');
// let text;
// if(val==null){
//     text=document.createTextNode("this is simple code for edit it");
// }
// else
// {
//     text=document.createTextNode(val);
// }
// divElem.appendChild(text);

// //give element id, style and class
// divElem.setAttribute('id','elem');
// divElem.setAttribute('class','elem');
// divElem.setAttribute('style','border:2px solid black; width:170px; margin:20px; padding:10px;');

// //grab the main container 
// let container=document.querySelector('.container');
// let first=document.getElementById('myfirst')

// //Insert element before the element id first
// container.insertBefore(divElem,first);

// divElem.appendChild(text);

// console.log(divElem,container,first);

// // add event listener to divElem
// divElem.addEventListener('click',function(){
//     let noTextAreas=document.getElementsByClassName('textarea').length;
//     if(noTextAreas==0){
//         let html=elem.innerHTML;
//         divElem.innerHTML=`<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`
//         // let html=`<textarea class="form-control" class="textarea" id="textarea" rows="3"></textarea>`;
//         // divElem.innerHTML=html;
//     } 
//     //listen for the blur event on textarea
//     let textarea=document.getElementById('textarea');
//     textarea.addEventListener('blur',function(){
//         elem.innerHTML=textarea.value;
//         localStorage.setItem('text',textarea.value);
//     });
// });