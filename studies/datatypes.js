/*
* DATA TYPES:
* 
* Data type are how we catagorize different types of data in JS.They allow the 
* interpreter to effectivly work with different kinds of data.
*
* ->NUMBER
* ->STRING
* ->BOOLEAN
* ->ARRAY
* ->OBJECT
* ->FUNCTION
* ->undefined
* ->null
* ->NaN
* ->INFINITY AND -INFINITY
*/

/*
*
* 1.NUMBER
* - a data type that consist of numeric data.
*/
var apples = 12; // 12 is a number 

// 2.STRING //
// - a data type that consist of character data in single '' or "" quotation.
// - strings are zero indexed like arrays
var school = "Chamblee High School"; // the characters in the quotation are a string

// 3.BOOLEAN//
// - a boolean consist of a true or false statement

var isPretty = true; // a true statement
var isHandsome = false; // a false statement

//4.ARRAY//
// - an array is used for storing and managing multiple ordered data items.
// - a collection of variables of the same type
// - zero indexed ; can access array element in bracket notation 

var home =["house", "townhome", "apartment", "condo"]; // arrays are in brackets
console.log(home[0]);// will print home at 0 index which will be "house"

// to create an array you simply assign brackets to a variable

var array = [ ]; // this creates an empty array

//5.OBJECT//
// - containers for named values called properties or methods
// - values are written as key:value pairs (seperated by colon)


//You create and define an object with a object literal//

var nameTags = { nameFirst:"Winntana", nameLast:"Beyene", age:25}

/*
* In the above example the object is opened and closed with curly brackets as 
* should any object literal.Each key:value pair should be written with a colon 
* inbetween each other. There should also be a comma to seperate each pair from 
* the next.
*/

// Object Properties//

// - the key:value pairs in object are called properties

/*
*     Property      Property Value
*     nameFirst      Winntana
*     nameLast       Beyene
*     age             25
*/

// To access the object properties you can do it in these ways:

// objectName.propertyName   or    objectName["propertyName"]

nameTags.nameFirst; // this will print "Winntana"
nameTags["nameLast"]; // this will print "Beyene"

//6.FUNCTION//
/*
* A function is a block of code that can be used multple times. We use functions
* to avoid writing code over and over again. When creating a function you will
* need to have a Name for the function, Parameters/Arguments (which are place 
* holders / values placed in place holders) are place in (), Function's body 
* (what is inside the curly braces),Return Statement is a statement that is within
* the body of the function.This statement is after the keyword return , it executes 
* once the function is called.
*/

// When a function is defined it looks like this(syntax):

/*
function name(parameter) {
    function body 
    function body
    return statement;
}
*/
function add(num1,num2){
    let result = num1 + num2;
    return result;
}
// When a function is called it looks like this (syntax) :

/*

name(arguments); <== The arguments are placed in the parenthesis to replace the
                    parameter.

*/
add(1,1);
 
//7.undefined//
/*
* The undefined property shows that a variable isn't asssigned a value. The
* example below will show the undefined property.
*/

var sweets = "candy"; // this variable is assigned a value therefore is defined
var candy; // this variable is not assigned a value therefore is undefined

//8.null//
/*
*Null is the value that represents the intentional absence of any object value.
*/
var dog = null; // this represents the value of null

//9.NaN//
/*
* The NaN property is a value that represents not-a-number.NaN is a property of 
* the global object.The NaN property is also the same as Number.NaN.You can also 
* use the isNaN() global function to check if a value is a NaN value.
*/
//For example

var x = "winntana" - 100; 
console.log(x); // this will print NaN

//10.Infinity and -Infinity//
/*
* The global Infinity property is a numeric value representing infinity.It is 
* represented with a capital I , for Infinity.-Infinity is the same except it is
* a negative value of infinity.
*/
var plane = -2 * Infinity;
console.log(plane); // this will print -Infinity

var plane = 2 * Infinity;
console.log(plane); // this will print Infinity because it is a positive value

// Primative/Simple & Complex Data Types//
/*
*
* A primitive data value is a simple data value with no additional
* properties.Which means they can't change thier values unless they 
* are reassigned, also meaning they are immutable.Primative values are copied by 
* values not by reference. Values that are immutable are : Numbers,Booleans,Strings,
* Null, and Undefined.
*
* These data types can change their value without reassigning them. They copy the
* first reference and manipulate it instead of copying the same value that was 
* initially declared. Complex data types include objects, arrays, and functions.
*/
