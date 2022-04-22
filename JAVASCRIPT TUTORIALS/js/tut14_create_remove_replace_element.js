//create element
let ele=document.createElement('li');
let text=document.createTextNode('I am text node'); //element created
ele.appendChild(text);
ele.className='child1';
ele.id='createdLi';
ele.setAttribute('title','mytitle');
ele.innerText="hello this is amey";
ele.innerHTML='<b>Bold</b>';

let ul=document.querySelector('ul.this');
ul.appendChild(ele);
// console.log(ul);
// console.log(ele);

//Replace element
let ele2=document.createElement('h3');
ele2.id='ele2';
ele2.className='ele2';
let tnode=document.createTextNode('this is created node for ele2');
ele2.appendChild(tnode)
ele.replaceWith(ele2); //element replace

let myul=document.getElementById('myul');
// myul.replaceChild(ele,document.getElementById('fui'));

//remove element/child
// myul.removeChild(document.getElementById('lui'));
// console.log(ele2);
pr=ele2.hasAttribute('class');
ele2.removeAttribute('id'); // id removed <h3 class="ele2">this is created node for ele2</h3>
console.log(ele2,pr);