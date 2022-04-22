let a=["1","1","2","3","3","1"];

//old approach
let unique=a.filter((item,i,ar)=>ar.indexOf(item)===i);
console.log(unique);

// new technique launch by ES6
let uniques=new Set(["1","1","2","3","3","1",1,1,2,2,3,3,44,4,4,5,4,]);
console.log(uniques);