// Promise.resolve 
// Promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then(value => {
//     console.log(value);
// });

// then() method again return a promise
// use of then this promise which is return by then used for creating a chaining

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("ek");
    });
}

myPromise().then(value => {
    console.log(value);
    value += " bar";
    return value; // here not return value, return a promise, if you dont return value here then return undefined in next promise
}).then((value) => {
    console.log(value);
    value += " aaja";
    return value;
}).then((value) => {
    console.log(value);
});
// this is called as promise chaining