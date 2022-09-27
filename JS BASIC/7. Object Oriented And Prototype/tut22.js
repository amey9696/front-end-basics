// Static methods and properties
class Person {
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    static classInfo() { // this type of methods are directly related with class
        return 'this is person class';
    }
    static desc = "this is person class description";
    get fullName() {
        return `${this.fName} ${this.lName}`
    }
    set fullName(fullName) {
        const [fName, lName] = fullName.split(' ');
        this.fName = fName;
        this.lName = lName;
    }
    setName(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    eat() {
        return `${this.fName} is eating.`
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }
}

const person1 = new Person('Amey', 'Palshetkar', 25);
console.log(person1);
console.log(person1.eat());
// console.log(person1.classInfo()); //Uncaught TypeError: person1.classInfo is not a function
console.log(Person.classInfo());
// Person.classInfo() !=person1.classInfo() both are differenet
// Person is className and person1 is objectName
console.log(Person.desc);