////============================================== LOCAL STORAGE ==========================================================
// // //use console..in console goto application...in application goto storage-->local storage
// ////Add key value pair inside localStorage
// localStorage.setItem('Name','Amey');
// localStorage.setItem('Name2','abc');

// ////see key value pair inside localStorage using browser console
// ////in console use window.localStorage, then press enter---op is Storage {Name: "Amey", length: 1}
// //// in console type these after window.localStorage==>typeof window.localStorage //op is "object"
// //// in console type these after window.localStorage==>window.localStorage.Name //op is "Amey"

// ////clear all key value pair in localStorage
// // localStorage.clear();//clear all localStorage,sets key value pair is null

// ////clear particular key value pair in localStorage
// localStorage.removeItem('Name2');

// ////get/Retrieve key value pair inside localStorage
// // let name=localStorage.getItem('Name'); //op is Amey
// // console.log(name); 
// // let named=localStorage.getItem('Named'); //op is null because value does not exist i.e Named not in setItem('...)
// // console.log(named); 

// //LIMITATIONS=>1. you cannot add array directly in this localStorage .ie eg=
// let impArray=['red','yellow','orange','pink'];
// localStorage.setItem('color',JSON.stringify(impArray));//JSON.stringify(impArray) convert array into string 

// // let col=localStorage.getItem('color');//op is ["red","yellow","orange","pink"]
// let col=JSON.parse(localStorage.getItem('color'));//op is (4) ["red", "yellow", "orange", "pink"]
// console.log(col);

////============================================== SESSION STORAGE ==========================================================
// sessionStorage.setItem('Name','Amey');
// sessionStorage.setItem('Name2','abc');
// let impArray=['red','yellow','orange','pink'];
// sessionStorage.setItem('color',JSON.stringify(impArray));

////Difference between localStorage AND sessionStorage
////localStorage=after closing your browser/localhost/liveserver data cannot be erased i.e permanent storage
////sessionStorage=after closing your browser/localhost/liveserver data is erased .ie temporary storage

/* IMP TOPIC
JSON.stringify
JSON.parse
localStorage.getItem
localStorage.setItem
sessionStorage.getItem
sessionStorage.setItem */
