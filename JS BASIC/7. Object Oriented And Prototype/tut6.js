// Short syntax for methods

const user1 = {
    fName: 'amey',
    age: 25,
    about() {
        console.log(this.fName, this.age);
    }
}
user1.about();