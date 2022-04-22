//e inside function means it is object of_____________
//==CLICK EVENT===if u click on particular element then event run
// document.getElementById('heading').addEventListener('click',function(){
//                                      OR
// document.getElementById('heading').addEventListener('click',function(e){
//     console.log("you have clicked the heading");// op is if u click on headin then display this msg
//     // console.log(e)//Mouse event
//     // console.log(e.target) //display tag i.e <h1>tag 
//     // location.href='www.facebook.com'
//     let v=e.target; // op is <h1 id="heading" class="yourhead so ad">Welcome to my site</h1>
//     // v=e.target.className; //op is yourhead so ad
//     v=e.target.id; //op is heading id display
//     // v=e.target.classList;//op is DOMTokenList(3) ["yourhead", "so", "ad", value: "yourhead so ad"]
//     // v=Array.from(e.target.classList); //op is (3) ["yourhead", "so", "ad"]
//     // v=e.offsetX;//display x-axis value where u clicked on heading
//     // v=e.offsetY;//display y-axis value where u clicked on heading
//     // v=e.clientX;
//     // v=e.clientY;
//     console.log(v);
// });

//MOUSE OVER EVENT===if u move mouse cursor on particular element then event run
document.getElementById('heading').addEventListener('mouseover',function(e){
    console.log("you have clicked the heading");// op is if u click on headin then display this msg
    // console.log(e)//Mouse event
    // console.log(e.target) //display tag i.e <h1>tag 
    // location.href='www.facebook.com'
    let v=e.target; // op is <h1 id="heading" class="yourhead so ad">Welcome to my site</h1>
    // v=e.target.className; //op is yourhead so ad
    v=e.target.id; //op is heading id display
    // v=e.target.classList;//op is DOMTokenList(3) ["yourhead", "so", "ad", value: "yourhead so ad"]
    // v=Array.from(e.target.classList); //op is (3) ["yourhead", "so", "ad"]
    // v=e.offsetX;//display x-axis value where u clicked on heading
    // v=e.offsetY;//display y-axis value where u clicked on heading
    // v=e.clientX;
    // v=e.clientY;
    console.log(v);
});