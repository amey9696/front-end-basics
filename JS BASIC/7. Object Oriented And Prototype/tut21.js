// Getters and setters
class Person {
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
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
}

const person1 = new Person('amey', 'palshetkar', 25);
console.log(person1);
// console.log(person1.fullName());
// how can i use fullName as property (without using parenthesis()))i.e console.log(person1.fullName); answer is show full name
// for that use get keyword before assign method then call method
console.log(person1.fullName);
person1.setName('neha', 'kadam'); // we can also use person1.fName='neha';person1.fName='kadam';
console.log(person1.fullName);

// now how can i use person1.fullName='neha kadam'; after use this we want auto change fName and lName also
person1.fullName = 'mayur sawant';
console.log(person1);