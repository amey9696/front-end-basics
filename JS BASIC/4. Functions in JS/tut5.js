// Function inside function

const app = () => {
    const insideFunc = () => {
        console.log(" Hello from insideFunc App");
    }
    insideFunc();
    const add = (num1, num2) => {
        return num1 + num2;
    }
    console.log(add(5, 9));
    console.log(" inside Main App");
}

app();