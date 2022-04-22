let x=6;
let y=3;
let z;
z=x+y;
z=x-y;
z=x*y;
z=x/y;

//Exploring the Math Object
z=Math.PI;
z=Math.round(5.3);//op is 5(round figure)
z=Math.ceil(5.3);//op is 6(it is also round figure but it consider as next no i.e if 6.1 then ans is 7)i.e max no
z=Math.floor(5.9)//op is 5 take minimum no for round figure
z=Math.floor(-5.9);//op is -6 (3 2.5==> 2 then -1 -2 -2.5==>-3) less no
z=Math.abs(-5);//op is 5 i.e it can convert value into +ve 
z=Math.abs(5.5);//op is 5.5
z=Math.sqrt(9);//op is 3
z=Math.pow(2,3);//op is 8
z=Math.min(2,-3,-7,25,40);//op is -7
z=Math.max(2,-3,-7,25,40);//op is 40
z=Math.random();//this method generate random float no between 0 to 1 only i.e 0.757598, 0.154675 etc a(0,1)
/*How we can generate no between 0 to 100
formula:-
generate no between 0 to 100: a100=a*100=(0,100)
generate no between 10 to 100: a10_100=10+a*(100-10)
*/
z=100*Math.random();//this method generate random float no between 0 to 100 only i.e 45.757598, 78.154675 etc a(0,100)
z=50+(100-50)*Math.random();//this method generate random float no between 50 to 100 only i.e 58.757598, 67.154675 etc a(50,100)
//for display int value use ceil or floor method it is depend on u
z=Math.ceil(50+(100-50)*Math.random());//this method generate random int no between 50 to 100 only i.e 58, 67,54,75 etc a(50,100)
z=Math.floor(50+(100-50)*Math.random());//this method generate random int no between 50 to 100 only i.e 58, 67,54,75 etc a(50,100)
console.log(z);
