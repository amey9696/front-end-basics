// What is prototype

function hello() {
    console.log("hello world");
}

//javascript function is combo of function & object i.e we can treat function as object also
// js function ===> function + object
console.log(hello.name); // get function name

//you can add your own properties
hello.myProp = "unique"; // treat as object i.e look like key value pair
console.log(hello.myProp);

// function provides more useful properties
// function provides you free space
// free space means object that provides a prototype

console.log(hello.prototype);
// if you add another function like key value pair treat then you can using prototype you can easily add

// only functions provide prototype property
// const hello = { key1: 'value1' }; //prototype is not present
// const hello = ['value1' ]; //prototype is not present
if (hello.prototype) {
    console.log("prototype is present");
} else {
    console.log("prototype is not present");
}

//add property in prototype
hello.prototype.bc = "mc";
hello.prototype.sing = function () {
    return "kombdi palali";
};
console.log(hello.prototype);