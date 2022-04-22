//example for asychronous programming
setTimeout(()=>{
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log("this is index number ",index);
    }
},5000);
console.log("done work"); //first call this then for function

