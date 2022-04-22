
function add(){
    return new Promise(function(resolve,reject){
        let error=true;
        if(!error){
            resolve();
        }
        else{
            reject();
        }
    })
}
add().then(function () {
    console.log("thanks for resolving")
}).catch(function (error) {
    console.log("bad request  "+error)
})