//OPERATORS//
/*
ASSIGNMENT OPERATORS

This operator assigns the value on the left to the value on the right.

Example:
*/
var a = 1; //<== the Number 1 is assigned to a
var b = 2; //<== the Number 2 is assigned to b
var ab = b + 1;  //<== the value of b + 1 is assigned to ab with "=" sign being the assignment operator.
a += b; //<== this is an addition assignment which is the same as a = a + b
a -= b; // <== this is a subtraction assignment which is the same as a = a - b
a *= b; // <== this is a multplication assignment which is the same as a = a *b
a /= b; // <== this is a division assignment which is the same as a = a / b
//ARITHMETIC OPERATORS//


/*
Arithmetic Operators are basic math componets used to return single numerical
values.They consist of :
*/

// " + "           <--- addition operator
let sum = 1 + 1; // this will print 2
// " - "           <--- subtraction operator
let sub = 1 - 1; // this will print 0
// " * "           <--- multiplication operator
let multi = 1 * 1; // this will print 1
// " / "           <--- division operator
let divide = 1 / 1 ; // this will print 1
// " % "           <--- remainder of operator
let remain = 1 % 2; // this will print 1
// " ++ "          <--- increment operator
let inc = 1; 
let inc1 = inc++; 
console.log(inc); //this will print 2
// " -- "          <--- decrement operator
let dec = 1;
let dec1 = dec--;
console.log(dec); // this will print 0




//COMPARISON OPERATORS//
/*

Comparison Operators compare values two values and result a Boolean (which is a 
true or false statement).There are two types of comparison operators , binary and
strict.

Binary

*/

// " < "      <--- less than
let num = 2;
function less(num){
if(num < 3){
    return "less than";
}
};
less(num); // this will print less than

// " > "       <--- greater than
let num1 = 4;
function greater(num){
if(num > 3){
    return "greater than";
}
};
less(num1); // this will print greater than
// " <= "      <--- less than or equal to 
let num2 = 3;
function lessThanEqualTo(num){
if(num <= 3){
    return "less than or equal to";
}
};
lessThanEqualTo(num2); // this will print less than or equal to
// " >= "      <--- greater than or equal to 
let num3 = 4;
function greaterThanEqualTo(num){
if(num >= 4){
    return "greater than or equal to";
}
};
greaterThanEqualTo(num3); // this will print greater than or equal to 


/*
Strict Comparison Operators evaluate value and data type unlike binary who evaluate
only value.

Strict
===     <-- strictly equal
!==     <-- strictly not equal to 

*/
//EXAMPLE//
4 === 4; //<== returns true because both values are equal in value and data type
4 !== 4 //<== returns false because the values are equal to each other in value and data type
//LOGICAL OPERATORS//
/*
Logical Operators are also Boolean Operators that return Boolean values.These 
operators will take the argument to check the truthy-ness or falsy-ness of an 
expression.

These operators consist of :

||          <--- the OR operator : one condition must resolve to true
&&          <--- the AND operator : both conditions must resolve to true
!           <--- the bang operator : flips the truthiness of the value

*/
//Example//

var a = 2
var b = 3

console.log(a < 10 || b > 10); // returns true; a is less than 10 and only one condition must resolve to true
console.log(a < 10 && b < 10); // returns true; a and b are less than 10,both resolve true
console.log(a != b); // returns true because a IS NOT equal to b 

//UNARY OPERATORS//
/*
Unary operators only work with one operand.

delete <== deletes the property of an object
typeof <== returns the type of operand
+ <== tries to convert expression to a number
- <== tries to convert expression to a number , then make it negative
! <== negates an expression

*/

let myObj = {
    a: 1,
    b: 2,
    c: "three",
    d: [1,2,3],
    e: "4"
}
delete myObj.a; // this will delete the a property in myObj
typeof myObj.c; // this will return "string"
myObj.a = -myObj.a; // this will convert the value of a to -1
myObj.e = +myObj.e; // this will convert the string of "4" to the number 4
myObj.a != myObj.b; /* this will negate the expression and print true as they do
not equal
*/



//TERNARY OPERATORS//
/*
Ternary operator takes three operands.It is usually used as a shortcut for an if 
statement.A condition with two values will be assigned to a variable , the first 
value to return if true and the second to return if false.

Syntax:
variablename = (condition) ? value1:value2;

EXAMPLE:

*/
var age;
var smoke = (age < 18) ? "You are not allowed to smoke":"You are allowed to smoke";
