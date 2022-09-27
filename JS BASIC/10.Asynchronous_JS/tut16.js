// Consume Promises with async and Await
const URL = "https://jsonplaceholder.typicode.com/posts";

//using fetch
// fetch(URL)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

//using async await

//using normal function
// async function getPosts() { //this function gives you promise
//     const response = await fetch(URL);
//     if (!response.ok) {
//         throw new Error("Something went wrong..!");
//     }
//     const data = await response.json();
//     // console.log(data);
//     return data;
// }

// using arrow function
const getPosts = async () => {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("Something went wrong..!");
    }
    const data = await response.json();
    // console.log(data);
    return data;
}

getPosts()
    .then(myData => {
        console.log(myData)
    })
    .catch(err => {
        console.log(err);
    })