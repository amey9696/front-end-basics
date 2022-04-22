const students = [
    { name: "AP", subject: "JS" },
    { name: "SA", subject: "BE" }
]

function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 5000);
    })
}

function getStudent() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("student have been fetched");
    }, 2000);
}

let newStudent = { name: "MB", subject: "python" };
enrollStudent(newStudent).then(function () {
    getStudent();
}).catch(function () {
    console.log("some error occur")
})