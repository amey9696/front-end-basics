function quotes(str){
    let arr=str.split(' ');
    if(arr.includes('not')){
        console.log("Real Fancy");
    }
    else{
        console.log("regular fancy");

    }
}
quotes("not in");