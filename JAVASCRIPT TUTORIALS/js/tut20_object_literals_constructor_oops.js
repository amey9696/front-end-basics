/*
OOPS CONCEPTS:-
ABSTRACTION
ENCAPSULATION
INHERITANCE
POLYMORPHISM
*/

//OBJECT LITERALS
// let a={
//     name:'amey',
//}
// console.log(a); // op is {name:'amey'}
// console.log(typeof a);//op is object


// let info={
//     name:'amey',
//     qual:function(){
//         console.log("BE");
//         // return 'Full Stack'; 
//     }
// }
// console.log(info);

//Real life Object example:
//car{color:'red',brand:'bmw',gear:'auto',sttering:'powerSteering'...etc}
//methods:-car.Opendoor(),car.break(),car.setMirror(),car.stop(),car.incSpeed(),car.decSpeed()...etc

//===============================CONSTRUCTORS==================================================
//we have already scene this constructor new Date();
//creating a constructor for general car
function generalCar(GivenName, givenSpeed){
    this.name=GivenName;
    this.topspeed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log(`This car is slower by ${200-this.topspeed} Km/H than Mercedez`)
    }
}
car1=new generalCar('Nissan',180);
car2=new generalCar('Maruti Alto',80);
console.log(car1,car2);
//By using this concept we can easily write for 100 cars..
// TEMPLATE?