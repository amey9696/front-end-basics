// Error handling in XHR requests
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response;
        const data = JSON.parse(response);
        // console.log(data);

        // XHR request Chaining example
        const id = data[3].id;
        // console.log(id);
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        // console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = function () {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2)
        }
        xhr2.send();

    } else {
        console.log("Something went wrong..!")
    }
}

//below method handle network related error such as network failure etc
xhr.onerror = () => {
    console.log("Network error")
}

xhr.send();