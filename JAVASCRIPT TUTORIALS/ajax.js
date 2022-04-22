let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have click on fetchBtn')

    // Instantiate an xhr/XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //open the object

    //GET REQUEST
    // xhr.open('GET', 'ajax.txt', true); //true means asyn req ..true is compulsory
    // xhr.open('GET', 'ajax.json', true);
    // xhr.open('GET', 'www.google.com', true);

    // POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'application/json');
    //what to do on progress(Optional)
    xhr.onprogress = function () {
        console.log('on Progress');
    }

    //which state is now(old function not use todays mostly)
    // xhr.onreadystatechange=function(){
    //     console.log('ready state is:'+xhr.readyState);
    // }

    //what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("some error occurs")
        }
    }

    //send the request
    // xhr.send(); //this for get request
    params = `{"name":"tes1","salary":"123","age":"23"}`;
    // xhr.send(params);

    console.log('we are done.!')
}

//--------------------------Populate button coding-------------------------------
let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have click on popHandler ')

    // Instantiate an xhr/XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //open the object

    //GET REQUEST
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    //which state is now(old function not use todays mostly)
    // xhr.onreadystatechange=function(){
    //     console.log('ready state is:'+xhr.readyState);
    // }

    //what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) { 
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            //below logic for display 10 employee out of 24 employee
            let list=document.getElementById('list');
            // var str="";
            // for (key in obj)
            // {
            //     str+=`<li>${obj[key].employee_name}</li>`;
            // }
            // list.innerHTML=obj;
        } else {
            console.log("some error occurs")
        }
    }

    //send the request
    xhr.send();

    console.log('we are done fetching employee!')
}
