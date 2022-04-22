import Swal from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const name=document.getElementById('name');
const password=document.getElementById('password');
const form=document.getElementById('form');

form.addEventListener('click',(e)=>{
    // let message=[];
    if(name.value=='' || name.value==null){
        // alert("name is required");
        sweetAlert("Oops..!","name is required","error");
        // message.push("name is required")
    }
    else if(password.value=='' || password.value==null){
        alert("password is required");
        // message.push("name is required")
    }
    else if(password.value.length<=6){
        alert('password must be greater than 6 character');
        // message.push('password must be greater than 6 character');
    }
    else if(password.value.length>=10){
        alert('password must be less than 10 character');
        // message.push('password must be less than 20 character');
    }
    else if(password.value=='password'){
        alert('password cannot be password');
        // message.push('password cannot be password');
    }
    else{
        // alert('Login success');
        Swal.fire( 'Good job!','Login success!','success')
    }
    // if(message.length>0){
    //     e.preventDefault()
    //     errorElement.innerText=message.join(', ')
    // }
})