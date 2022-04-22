const students=[
    {name:"AP", subject:"JS"},
    {name:"SA", subject:"BE"}
]
//callback function means function inside function
// students.forEach() example of callback function

// function enrollStudent(student){
function enrollStudent(student,callback){ 
    setTimeout(function(){
        students.push(student);
        console.log("student has been enrolled");
        callback(); //this line means getStudent();
    },5000);//run on background after 3 second i.e Asynchronously work
}

function getStudent(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML=str;
        console.log("student have been fetched");
    },1000);
}

let newStudent={name:"MB",subject:"python"};
enrollStudent(newStudent,getStudent);// getStudent value of callback parameter
//  enrollStudent(newStudent);
//  getStudent();