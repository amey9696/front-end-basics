const num = 10;
let n1 = 0;
let n2 = 1;
let nextTerm;

for (let i = 0; i <= num; i++) {
    if (n1 % 2 == 0) {
        console.log(n1);
    }
    // console.log(n1);
    nextTerm = n1 + n2;

    n1 = n2;
    n2 = nextTerm;
}