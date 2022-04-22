/*
Promise:-(same meaning as in real life)
-resolve(complete)
-reject
-pending
*/
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("your promise has been resolved");
                resolve();
            } else {
                console.log("your promise has been rejected");
                reject('not found');
            }
        }, 2000);
    })
}
//.then() call when promise is resolve
func1().then(function () {
    console.log("thanks for resolving")
    //.then() call when promise is reject
}).catch(function (error) {
    console.log("bad request  "+error)
})
