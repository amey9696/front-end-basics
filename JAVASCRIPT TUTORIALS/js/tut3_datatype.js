// 2 types
// 1. primitive: memory location like stack
//     string: "collection of characters";
            let name="amey";
            console.log("my name is "+name);
            console.log("Datatype is "+typeof(name));
//     number: 35;
            let n=35;
            console.log("Datatype is "+typeof(n));
//     boolean: true/false,i.e let a=true;
            let isStudent=true;
            console.log("Datatype is "+typeof(isStudent));
//     null: Intentionally empty value;
            let v=null;
            console.log("Datatype is "+typeof(v)); //js show datatype is object but it is primitive datatype
//     undefined: user not gives value to variable;
            let a;
            console.log("value of a is "+a);
            console.log("Datatype is "+typeof(a));

// 2. Reference: memory location like heap
//     Array:
            let arr=[1,1.5,true,"save"];
            console.log("Datatype is "+typeof(arr));
//     Object Literal:
            let stmarks={Amey:64,'Rohan Das':44, RohanBoss:55}
            console.log(stmarks);
            console.log("Datatype is "+typeof(stmarks));
//     Function:
            function findName() {
                
            }
            console.log("Datatype is "+typeof(findName));
//     Dates:
            let date=new Date();
            console.log("Datatype is "+typeof(date ));

