let obj={
    name:'amey',
    qual:'BE',
    isDeveloper:true
}
console.log(obj); 
/*op is name: "amey", qual: "BE", isDeveloper: true}
isDeveloper: true
name: "amey"
qual: "BE"
__proto__: Object //here what is proto?
proto means prototypes i.e obj gives you some defaults method to create your own logic
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
*/
function Obj(givenName){
    this.name=givenName;
}

Obj.prototype.getName=function(){
    return this.name;
}

Obj.prototype.setName=function(nweName){ //in console use obj2.setName("name here") after use obj2
    this.name=nweName;
}

let obj2=new Obj("SA");
console.log(obj2);