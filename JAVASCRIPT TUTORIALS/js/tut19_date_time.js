// let today=new Date();
// console.log(today); //current date & time
// console.log(typeof today);// op is object
// let otherDate=new Date('7-9-1996 14:55:57'); //mm-dd-yy hh:mm:ss GMT 
// // console.log(otherDate); //op is Tue Jul 09 1996 04:55:57 GMT+0530 (India Standard Time)
// let a;
// a=otherDate.getDay();//op is 2
// a=otherDate.getDate();//op is 9
// a=otherDate.getMonth(); //op is 6
// a=otherDate.getHours();// op is 14
// a=otherDate.getMinutes(); //op is 55
// a=otherDate.getSeconds(); // op is 57
// a=otherDate.getTime(); //op is 836904357000
// a=otherDate.getMilliseconds(); //op is 0 
// a=otherDate.getFullYear(); //op is 1996
// console.log(a); 
// console.log("DATE IS "+otherDate.getDate(),"/"+otherDate.getMonth(),"/"+otherDate.getFullYear()); //op is DATE IS 9 /6 /1996
// console.log("time IS "+otherDate.getHours(),":"+otherDate.getMinutes(),":"+otherDate.getSeconds()); //op is time IS 14 :55 :57


//SET DATE TIME ETC using set___() method
// otherDate.setDate(23);// op is Tue Jul 23 1996 14:55:57 GMT+0530 (India Standard Time)
// otherDate.setMonth(2); //Sat Mar 23 1996 14:55:57 GMT+0530 (India Standard Time)
// otherDate.setFullYear(2003);// op is Sun Mar 23 2003 14:55:57 GMT+0530 (India Standard Time)
// otherDate.setHours(1);// op is Sun Mar 23 2003 01:55:57 GMT+0530 (India Standard Time)
// otherDate.setMinutes(45);//op is Sun Mar 23 2003 01:45:57 GMT+0530 (India Standard Time)
// otherDate.setSeconds(07);//op is Sun Mar 23 2003 01:45:07 GMT+0530 (India Standard Time)
// // otherDate.setMilliseconds(55);
// console.log(otherDate);

/*
format is MM/DD/YYYY

you can also write in this format also==
'9-May-1996 4:55:57'
'May-9-1996 4:55:57'
'7-17-1998'=>op is July-17-1998 00:00:00 GMT+0530 (India Standard Time)  
'7/17/1998'=>op is July-17-1998 00:00:00 GMT+0530 (India Standard Time) 

BUT DON'T write this ==>
'7-9-06 4:55:57' it conside 06 as July 9,2006
'7-9-76 4:55:57',it conside july 09,1976 not 2076
'17-9-1998'INVALID DATE
'17/9/1998' INVALID DATE 
*/

/*
getDay() values:-
sun=0
mon=1
tues=2
wed=3
thur=4
fri=5
sat=6
*/

/*
getMo=nth() value
jan=0
feb=1
mar=2
apr=3
may=4
jun=5
july=6
aug=7
sept=8
oct=9
nov=10
dec=11
*/

//FAQ
// 1. HOW TP DISPLAY ONLY DATE SKIP TIME?
// console.log("DATE IS "+otherDate.getDate(),"/"+otherDate.getMonth(),"/"+otherDate.getFullYear());

// 2. HOW TO DISPLAY TIME ONLY?
// console.log("time IS "+otherDate.getHours(),":"+otherDate.getMinutes(),":"+otherDate.getSeconds());