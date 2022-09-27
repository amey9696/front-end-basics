// Method overriding

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }
}

// dog class
class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age); // it is animal class i.e use parent class property
        this.speed = speed;
    }
    eat() {
        return `Our new member ${this.name} is eating.`
    }
    run() {
        return `${this.name} is running at ${this.speed} kmph.`
    }
}

const dog1 = new Dog('moti', 3, 25);
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.isCute());
console.log(dog1.run());

// object and instance both are same.
