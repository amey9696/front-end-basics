const proto={
    slogan:function(){
        return `One Team, One Dream`;
    },
    changeName:function(newName){
        this.name=newName;
    }
}

//This creates amey object
const amey=Object.create(proto);
amey.name="amey";
amey.role="web developer";
amey.changeName("AP");
console.log(amey);
// console.log(amey.slogan());

//This also creates amey object, but this is not mostly used
// const amey1=Object.create(proto, {
//     name:{value:"sA",writable:true},
//     role:{value:"my css"},
// })
// amey1.changeName("AP2");
// console.log(amey1);

//===================PROTOTYPE INHERITANCE===========================
//Employee constructor

function Employee(name, salary, experience){
    this.name=name;   
    this.salary=salary;
    this.experience=experience;
}
//slogan
Employee.prototype.slogan=function(){
    return `One Team, One Dream. Regards, ${this.name}.`;
}

let am=new Employee('AMEY',350000,5);
// console.log(am);
console.log(am.slogan());

//programmer
function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language=language;
}
// //let avi=new Programmer("avinash",40000,1,'node js');
// //console.log(avi);
// //console.log(avi.slogan()); error 

//Manually Inherit the prototype (here gives slogan to programmer)
Programmer.prototype=Object.create(Employee.prototype);


//Manually set the constructor
Programmer.prototype.constructor=Programmer;

let avi=new Programmer("avinash",40000,1,'node js');
console.log(avi); 
console.log(avi.slogan());

//...........this part is old is gives as a knowlwedge.....