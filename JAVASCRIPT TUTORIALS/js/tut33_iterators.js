
function fruitsIterator(values){
    let nextIndex=0;
    return {
        // we will return an object
        next:function(){
            if(nextIndex <values.length){
                //we will return this object
                return {
                    value:values[nextIndex++],
                    done:false
                }
            }
            else{
                return {
                    done:true
                }
            }
        }
    }
}
const myArr=["apple","mango","chiku","peru"];
console.log("my Array is ",myArr);

//using the interator
const fruits= fruitsIterator(myArr);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);