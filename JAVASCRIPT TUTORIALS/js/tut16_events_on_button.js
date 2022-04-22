let btn=document.getElementById('btn');
// btn.addEventListener('click',func1);//<input type="submit" id="btn" value="ok">
// function func1(e) {
//     console.log("thanks this is single click",e);//thanks MouseEvent {isTrusted: true, screenX: 252, screenY: 404, clientX: 252, clientY: 334, …}
//     e.preventDefault();//for input type is submit so use e.preventDefault(); to stop submit the form otherwise page is break i.e error 404...but for this e is req for callback function
//}

// btn.addEventListener('dblclick',func2); //<input type="button" id="btn" value="ok">
// function func2(e) {
//     console.log("thanks this is double click",e);
//     e.preventDefault();    
// }

// btn.addEventListener('mousedown',func2); // mouse down means you can click also rolldown button as well as left button..normally right button of mouse used for click
// function func2(e) {
//     console.log("thanks this is double click",e);
//     e.preventDefault();  
// }

// document.querySelector('.container').addEventListener('mouseenter',function(){
//     console.log("you entered no");
// })

// document.querySelector('.container').addEventListener('mouseleave',function(){
//     console.log("you exited no");
// })

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log("you triggered mouse move event");
    // console.log(e.offsetX,e.offsetY);
    // document.body.style.backgroundColor="yellow";
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},154)`;
    
})
