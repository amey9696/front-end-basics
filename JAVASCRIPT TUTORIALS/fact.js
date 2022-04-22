let i;
let fact=1;  
let number=5;
if(number<0){
    console.log("You enter -ve number");
}
else if(number==0){
    console.log("You enter 0");
}
else{
    for(i=1;i<=number;i++){    
        fact=fact*i;    
    }    
    console.log(`Factorial of ${number} is: ${fact}`);    
}  
