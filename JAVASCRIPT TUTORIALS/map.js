//old approach
const oldArr=['Amey','Sanket','Parth'];
// console.log(oldArr[0]);
// console.log(oldArr[1]);
// console.log(oldArr[2]);

//using for each (this is also old but used for sorthing)
oldArr.forEach(element => {
    // console.log(element);
});

//using for loop (this is also old but used for sorthing, but it is complex for understand)
for (let index = 0; index < oldArr.length; index++) {
    const element = oldArr[index];
    // console.log(element);
}

//new approach using map()
const newArr=oldArr.map(function(cvalue, index, arr){
    // return cvalue;
    // return cvalue +" git";
    // return index +" :" + cvalue;
    // console.log(arr); //it represent currently which array use for working
})
// console.log(newArr);
//here cvalue re fer the element present in oldArr

//================== Map using advance level array ===================

const studentData=[
    {id:1, name:"abc", degree:"BE"},
    {id:2, name:"pqr", degree:"ME"},
    {id:3, name:"xyz", degree:"BCS"},
];
// console.log(studentData[0].name);

const newStud=studentData.map( (svalue)=>{
    // return svalue;
    return `My name is ${svalue.name}. My highest qualification is ${svalue.degree}.`;
});
console.log(newStud);