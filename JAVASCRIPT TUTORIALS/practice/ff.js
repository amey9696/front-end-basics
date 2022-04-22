let fruitBtn = document.getElementById('fruitBtn');

fruitBtn.addEventListener('click', buttonClickHandler)
function buttonClickHandler() {
    console.log('You have click on fruitBtn')

    // Instantiate an xhr/XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //GET REQUEST
    xhr.open('GET', 'flower.json', true);

    // POST REQUEST
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'application/json');

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
    xhr.send();

    console.log('we are done.!')
}

let flowerBtn = document.getElementById('flowerBtn');
flowerBtn.addEventListener('click', buttonClickHandler)
function buttonClickHandler() {
    console.log('You have click on flowerBtn')

    // Instantiate an xhr/XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //GET REQUEST
    xhr.open('GET', 'fruit.json', true);

    // POST REQUEST
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'application/json');

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
    xhr.send();

    console.log('we are done.!')
}
