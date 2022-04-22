class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision; 
    }
    slogan(){ //slogan is function
        return `One Team, One Dream..Welcome ${this.name} to our family..` 
    }
    joiningYear(){
        return 2021-this.experience;  
    }
    static add(a,b){ //static method -we do not use any argument of class 
        return a+b;
    }
}

a=new Employee('amey',10,2);
// console.log(a);//Employee {name: "amey", experience: 10, division: 2}
// console.log(a.slogan());//One Team, One Dream..Welcome amey to our family..
// console.log(a.joiningYear());//2021
// console.log(Employee.add(4,5)); //calling static function using class name

//================================= INHERITANCE ==================================
class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,givenLanguage,givenGithub){
        super(givenName,givenExperience,givenDivision) //this method calling using super
        this.language=givenLanguage;
        this.github=givenGithub; 
    }
    favLang(){
        if (this.language=='python'){
            return 'python';
        }
        else{
            return 'javascript';
        }
    }
    static mux(a,b){
        return a*b;
    }
}
son=new Programmer('sonal',3,10,"java","Sona99");
console.log(son);
console.log(son.favLang());
console.log(Programmer.mux(7,8));