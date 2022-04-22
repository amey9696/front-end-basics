// Button with id myBtn
let myBtn=document.getElementById('myBtn');

//div with id content
let content=document.getElementById('content');//<div id="content"></div>

//===============================fetch txt data ========================================================================
// function getData(){
//     console.log("started getData")
//     // url="ajax.txt";   
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside senond then")
//         console.log(data);
//     })
// }
// console.log("before running getData")
// getData(); //getData run in background (i.e asynchronous function) so run console.log("after running getData")
// console.log("after running getData")

//===================================== Fetch JSON Data =================================================================
function getData(){   
    url="https://api.github.com/users"; 
    fetch(url).then((response)=>{
        return response.json(); //here not use text otherwise data noy parse(show in text format not json format)
    }).then((data)=>{
        console.log(data);
    })
}

function postData(){ 
    url="https://reqres.in/api/users?page=2"; 
    data='{"name": "ww","job": "employer","id": "81280"}' //id data is object then se stringfy, if data is already in string format then don't use JSON.stringify(__); here data is already in string format
    params={
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:data
    }
    fetch(url,params).then((response)=>response.json())
    .then((data)=>console.log(data))
}

// getData();
postData();

/*
WHY 2 .then() used?
first .then() fetch all datat from ajax file..(fetch means in simple word copy)
second .then() used for display the fetched data..
*/