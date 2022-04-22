//************************** Normal function *******************************
// function add(a,b){
//     let c=a+b;
//     console.log(c);
// }
// add(4,5)

// const great=function(){
//     return "Great Morning"
// }
// let g=great();
// console.log(g);

//******************************** Arrow function ****************************
// const sub=(x,y)=>{
//     let z=x-y;
//     console.log(z);
// }
// sub(9,2)

// const good=()=>{
//         return "Good Morning"
// }
// let g=good();
// console.log(g);

// one line has not compulsory to write { "    " }
// const m=()=> "Good Morning" //const m=()=> {"Good Morning"}
// let gm=m();
// console.log(gm);

// const good=()=>({name:"amey"})
// let g=good();
// console.log(g);

//one agrument/parameter has not require parenthesis
// const a=name=>"Good Morning "+name; //const a=(name)=>"Good Morning "+name;
// console.log(a('amey'));

const a=(name,sirname)=>"Good Morning "+name +" "+sirname; //parenthesis is require when u insert 2 parameter, do not write this type itherwise show error const a=name,sirname=>"Good Morning "+name +" "+sirname;
console.log(a('amey',"palshetkar"));