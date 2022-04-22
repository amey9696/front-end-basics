const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

// console.log(name,email,phone);
name.addEventListener('blur',()=>{
    // console.log("name is blur")
    let regex=/^[a-zA-Z]/;
    let str=name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("is matched")
    }
    else{
        console.log("is not matched")
    }
});

email.addEventListener('blur',()=>{
    // console.log("email is blur")
    // let regex=//;
});

phone.addEventListener('blur',()=>{
    // console.log("phone is blur")
    // let regex=//;
}); 
// 00:23:00