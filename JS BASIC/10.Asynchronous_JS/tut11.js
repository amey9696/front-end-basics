// Intro to Ajax, HTTP Request

// AJAX: Asynchronous Javascript And XML
// HTTP request = client and server communicate to each other using this protocol.

// is a set of "web development techniques" using many web technologies
// on the "Client-side" to create asynchronous web applications.

// with AJAX, web applications can send and retrieve data from a server
// asnchronously (in the background) without interfacing with the
// display and behaviour of the existing page.

// we don't use data in XML format anymore.
// We use JSON now.

// we have 3 most common ways to create and send request to server:
// 1. XMLHttpRequest (old way to doing)
// 2. fetch API (new way of doing)
// 3. axios (this is third party library)

// | value | state              | Description                                                    |
// |  0    | UNSENT             | Client has been created open() not called yet.                 |
// |  1    | OPENED             | opne() has ben called.                                         |
// |  2    | HEADS IS REACEIVED | send() has been called, end headers and status are available.  |
// |  3    | LOADING            | Downloading responseText  holds partial data.                  |
// |  4    | DONE               | The operation is complete.                                     |


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// step 1- use open method
// console.log(xhr.readyState);// 0
xhr.open("GET", URL);
// console.log(xhr.readyState); //1 

// if state is change then given function is run
// xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState); //2 3 4
//     if (xhr.readyState === 4) {
//         // console.log(typeof xhr.response); // response is in string format
//         const response = xhr.response;
//         const data = JSON.parse(response); // convert into js object/json
//         // console.log(typeof data);
//     }
// }

// run when readyState is 4
xhr.onload = function () {
    // console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);
    // console.log(data);
}
xhr.send()