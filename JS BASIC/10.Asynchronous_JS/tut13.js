// Promisifying XHR requests and chaining using then method

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            }
            else {
                reject(new Error("Something Went Wrong"));
            }
        }
        xhr.onerror = () => {
            console.log("Network error")
        }
        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response => {
        // console.log(response);
        const data = JSON.parse(response);
        // console.log(data);
        return data;
    })
    .then(data => {
        // console.log(data);
        // console.log(data[3]); //display post no 4
        const id = data[3].id;
        return id;
    })
    .then(id => {
        // console.log(id);
        const newURL = `${URL}/${id}`;
        // console.log(newURL);
        return sendRequest("GET", newURL)
    })
    .then(newResponse => {
        // console.log(newResponse);
        const newData = JSON.parse(newResponse);
        // console.log(newData);
    })
    .catch(err => {
        console.log(err);
    })