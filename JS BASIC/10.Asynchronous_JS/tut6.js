// promise
// promise represent future value
// current/default status of ptomise is pending and value is undefined
// if promise is done then status is fullfilled/approve and value is change
// if promise is reject then status is rejected and value is change
console.log("Script Start");

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

//promise create/produce
const myPromise = new Promise((resolve, reject) => { //inside executer function
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice"); //pass value in resolve.. value can be num string array object
    } else {
        reject("Couldn't do it");
    }
});

// promise consume
// browser consume the promsie so promise is asynchronous
myPromise.then((value) => {
    console.log("Lets eat", value);
}).catch((err) => {
    console.log(err);
});

setTimeout(() => {
    console.log("Set Timeout Function");
}, 0);

console.log("Script End");

// first display script start, then run scrit end then promise output
// first run promise then run timeout function
// because promise has higher priority in asynchronous call than set timeouts
// promises data store in micro-task queue and set timeout store in callback queue in js memory