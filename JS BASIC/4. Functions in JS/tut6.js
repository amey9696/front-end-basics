// Lexical Scope
const myVar = "Palshetkar"; //global variable

function myApp() {
    // const myVar = "amey"; //lexical variable

    function One() { // this function has lexical environment is myApp function
        // const myVar = "ap"; // if you comment this then below myVar which call in below console. that variable scope is now lexical scope.
        console.log("First Func", myVar);

        // first js search function in One function
        // if not found then go to lexical environment i.e inside myApp function
        // if not found then search global environment
    }

    const Two = function () {
        const myVar = "ap";
        const Third = () => {
            console.log("Third Func", myVar);
        }
        Third()
    }


    console.log(myVar);
    One();
    Two()
}
myApp()