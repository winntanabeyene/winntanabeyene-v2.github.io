//WITH OPERATORS//
/*
Using the "+" operator on strings will concatenate the string.
*/

//EXAMPLE//

var apple = "red";
var orange = "orange";
var peach = apple + " " + orange; //<== this will print red orange to the console

/*

When concatenating a string you must take in account for spaces as well , if you
do not space correctly your code will not work and may give you different types
of error messages or your string will be printed incorrectly.

*/

//WITH STRING METHODS//

/*

String methods are built in methods used in JS to alter strings. There are many 
string methods that are accessible , some consist of :

.concat() <== this combines two strings and returns a new string
.slice() <== takes away a section of a string and returns a new string
.split() <== this splits a string object into an array of strings
.toLowerCase <== this returns the string value to be lowercased
.toUpperCase <== this returns the string value to be uppercased
 
 
 */
let firstName = "Winntana";
let lastName = "Beyene";

let fullName = firstName.concat(" ", lastName); 
console.log(fullName); // this will print "Winntana Beyene"
fullName.slice(9); // this will print Beyene
fullName = firstName.concat(" ", lastName);
fullName.split(" ") // this will print ["Winntana", "Beyene"]
firstName.toLowerCase(); // this will print winntana
lastName.toUpperCase(); // this will print BEYENE
