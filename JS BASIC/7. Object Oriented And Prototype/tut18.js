// Example using class keyword

class Animal { // it is base class (parent class)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // isEat(food) {
    //     this.food = food;
    //     return `${this.name} is ${this.age} year old and eat ${this.food}.`
    // }
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

// const anim1 = new Animal("tiger", 15);
// const anim2 = new Animal("cow", 8);
// console.log(anim1.isEat('meat'));
// console.log(anim2.isEat('grass'));

// dog class
class Dog extends Animal { //it is subclass (derived class)

}

const dog1 = new Dog('moti', 3);
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.isCute());