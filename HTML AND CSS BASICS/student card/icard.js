// let inName=document.getElementById("inName").value;
// let inCollege=document.getElementById("inCollege").value;
// let inLocation=document.getElementById("inLocation").value;
    
let preview=document.getElementById("preview");
preview.addEventListener("click",function prev(){
    sessionStorage.clear()
    let addName=document.getElementById('addName');
    let addCollege=document.getElementById('addCollege');
    let addLocation=document.getElementById('addLocation');

    let id=sessionStorage.getItem("id");
    if(id==null){
        idObj=[];
    }
    else
    {
        idObj=JSON.parse(id);
    }
    let myObj={
        name:addName.value,
        college:addCollege.value,
        location:addLocation.value
    }
    idObj.push(myObj); 
    sessionStorage.setItem("id", JSON.stringify(idObj));
    addName.value=""; 
    addCollege.value="";
    addLocation.value="";
    showId();
})

function showId(){
    let id=sessionStorage.getItem("id");
    if(id==null){
        idObj=[];
    }
    else
    {
        idObj=JSON.parse(id);
    }
    let html=""; 
    idObj.forEach(function(element){
        html+=`<ul>
        <li>name:${element.name}</li>
        <li>college:${element.college}</li>
        <li>location:${element.location}</li>
    </ul> `;
    });
    let idStudent=document.getElementById("idStudent");
    if(idObj.length!=0){
        idStudent.innerHTML=html;
    }
}

function loadImage(event){
    const image=document.getElementById('imgDisplayed');
    image.src=URL.createObjectURL(event.target.files[0]);
}