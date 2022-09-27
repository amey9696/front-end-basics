// Closure example 3
function func() {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log('Hi, You called Me !!');
            counter++;
        } else {
            console.log('You already call it');
        }
    }
}

const myFunc = func();
myFunc();
myFunc();