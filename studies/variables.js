/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//4.Const //
/*
* Constants are containers that have values that NEVER change.They are block
* scoped and are never hoisted to the top of thier block scope. To create
* constants you must use the keyword const and assign it a value at declaration.
* You cannot leave a constant undefined.
* Constants are also blocked scoped which means they can only be scoped to if
* statements, functions, or loops.
*/

const uniqueName = "Winntana";
console.log(uniqueName); // prints => Winntana

//You cannot do this//

const myUniqueName = "Winntana";
//myUniqueName = "Winntana Beyene";
console.log(myUniqueName); // prints SyntaxError: Identifier 'myUniqueName' has already been declared

// constants are forever within thier scope//

//5.Let //
/*
*Lets are containers used for reassignable values and they are also not hoisted 
* to thier code blocks as well, like const.The let keyword is a blocked scoped 
* variable, which means it is only scoped to functions, if statements, or loops.
*/

let a = 10

if (a === 10) {
    let a = 100;

    console.log(a); // this would print 100 because it is within the code block
}

console.log(a); // this would print 10 because the reassignment is within the code block

//6. Hoisting //
/*
* Hoisting in JS is moving declarations to the top of the current scope in the background.
* While declartions are hoisted intialization aren't. Variables that are declared 
* with the let and const keywords are not hoisted.
*/

// EXAMPLE 1:

var ab = 1; // initialize ab
var ba = 2; // initialize ba

var bonus = ab + ba; // display ab and ba

// EXAMPLE 2:

var c = 1; // initialize bc

var bonus = c + bc; // display c and bc 

var bc = 2; // initialize bc

/*
* In EXAMPLE 2 var bc is hoisted to the top but with no value, because of
* hoisting bc has been declared before it is used but since intializations 
* are not hoisted, the value of bc is undefined.
*/
