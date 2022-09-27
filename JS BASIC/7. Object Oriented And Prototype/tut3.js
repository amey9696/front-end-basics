// Call , apply and bind method

// function hello() {
//     console.log("hello world");
// }
// hello.call();
function about(hobby, favMovie) {
    console.log(this.fName, this.age, hobby, favMovie);
}
const user1 = {
    fName: 'Rohit',
    age: 33,
}

// now create user2 object and call about method of user1 object in user2 object
const user2 = {
    fName: 'Virat',
    age: 34,

}
// user1.about.call(user2, 'youtube', 'MS Dhoni:the untold story'); // this refer to user2 object
about.call(user2, 'youtube', 'MS Dhoni:the untold story'); // this refer to user2 object
// about.call();  // undefined undefined
// about.call(user1, 'sleeping', 'Shershah'); // this refer to user1 object

// apply
about.apply(user1, ['sleeping', 'Shershah']); // this refer to user1 object

// bind
const func = about.bind(user1, 'playing', 'Singham'); // this refer to user1 object
func()