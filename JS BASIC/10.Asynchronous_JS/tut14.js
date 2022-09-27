// Fetch API
// Error Handling in Fetch API
const URL = "https://jsonplaceholder.typicode.com/posts";
const ans = fetch(URL);
// console.log(ans); //return promise i.e promise is pending
ans.then(response => {
    // console.log(response.json()); //return promise i.e promise is pending
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("something went wrong..!");
    }
})
    .then(data => {
        console.log(data);
    })
    .catch(err => { //connot run  this catch
        // console.log("Inside Catch");
        console.log(err);
    })

// fetch reject promise when error related with network