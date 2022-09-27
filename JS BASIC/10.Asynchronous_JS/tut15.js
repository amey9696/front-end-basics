
//post method using fetch
const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
    method: "POST",
    body: JSON.stringify({ //convert into string
        title: "Foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        'content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("something went wrong..!");
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
