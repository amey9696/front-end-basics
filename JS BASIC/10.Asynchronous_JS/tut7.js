// Function that returns promise

function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve("Fried Rice"); //pass value in resolve.. value can be num string array object
        } else {
            reject("Couldn't do it");
        }
    });
}

ricePromise().then((value) => {
    console.log("Lets eat", value);
}).catch((err) => {
    console.log(err);
});