/* 
Loops:
Loops repeat an action x amount of times. Loops have a starting condition, a
stopping condition, and an iterator (increment or decrement). 

While Loops:
 A while loop executes as long as the condition given is true.Once the given 
 condition is false the loop will stop executing and go to the statement after
 the loop.
 
 Syntax ====> while(conditon){
               statement;
                 }
*/

var a = 0;
var b = 0; 
while (a < 4){
 a++;
 b += a;
}
console.log(a, b); // this will print 4, 10

/* 
After each iteration the while loop increments a and adds its value to b until 
the while condition is false.


For Loops:
A for loop will repeat itself until the condition evaluates to false.

Syntax ====> for(var i = "starting condition"; i "stopping condition"; i "increment" ){
 "statement";
}
Example:
*/

var ab = [0, 1, 2, 3];


for(var i = 0; i < ab.length; i++){
 console.log(i * 5)
};

for(var j = ab.length - 1; j >= 0; j--){
 console.log(j * 2);
};

/*
the first loop will start at 0 and execute until the end of ab array. The increment 
indicates to keep going up 1 until its stopping condition which is the length of
the ab array.Next it will console log i times 5 each time it iterates over the
array, which will give you the result of [0,5,10,15].

the second loop will start at the last element in the ab array and will stop at 0.
The decrement indicates to keep running the function 1 down until the stopping
conditon which is 0.Next it will console log j times 2 each time it iterates over
the array, which will give you the result of [6, 4, 2, 0].

For In Loops:
The for in loop is designed to iterate over an object. 

Syntax ===> for (var key in object){
 statement;
};


Example:

*/
let car = {
 make: "Benz",
 model: "SS550",
 yearMade: "2015"
};
function remodelObj(obj){
 for(var key in obj){
 obj.make = "Mercedes Benz";
 }
 return obj;
}
console.log(remodelObj(car));

/*
The example given above will iterate through the object car and if there is a key 
named make it will reassign it , if the key make is not there it will create a key
named make and give it the value "Mercedes Benz".When we console.log the function
remodelObj the console will print the following:
{ make: 'Mercedes Benz', model: 'SS550', yearMade: '2015' }.
*/
