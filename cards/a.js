// let even=[]
// let odd=[]
// const fiterOddEven=(num)=>{
//     num.map((no)=>{
//         if(no%2==0){
//             even.push(no)
//         }else{
//             odd.push(no)
//         }
//     })
// }
// // let run=fiterOddEven([1,24,,14,21,30,55,60]);
// console.log(fiterOddEven([1,24,,14,21,30,55,60]));
// // run();
// console.log(even)
// console.log(odd)

// var htmlString = "<h2>How to make tea?</h2>"
// var plainString = htmlString.replace(/<[^>]+>/g, '').toLowerCase();
// console.log(plainString );

// var someStr = 'He SAID, Hello, MY name is AmEy?';
// console.log(someStr.replace(/[?]+/g, '').toLowerCase());


var string1 = 'ghost harrasment hunter';
var string2 = "what is ghost what is hunter what is ghost what is hunter";
var str3 = string2.trim().split(' ');
var str4 = str3.forEach(element => {

    switch (string1.includes(element)) {
        case true:
            console.log("Please change the title");
            break;
        default:
            console.log("all ok")
            break;
    }
    // str5 = string1.indexOf(element)
    // if (string1.includes(element)) {
    //     console.log("Please change the title");
    // console.log(string1.includes(element));
    // }
    // else {
    //     console.log("all ok");
    // }
    // str5 = string1.includes(element)
});
// console.log(str5)
// if (str5 > -1) {
//     console.log("The specific word exists");
// } else {
//     console.log("The specific word doesn't exist");
// }
