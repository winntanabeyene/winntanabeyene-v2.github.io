//FUNCTIONS://
/*
* First we must define a function then we can execute the function by calling it.
*/
// When a function is defined it looks like this:

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

// When a function is called it looks like this :

/*

name(arguments); <== the arguments are placed in the parenthesis to replace the parameter

*/
add(1,1);

/*
* The difference between parameters and arguments passed to a function are as follows:
* Parameters = place holder values 
* Arguments= values that get passed in to the place holders
*/

/*
The syntax for a named function is as follows :

function myGrandFunction(x, y) {
    return x + y;
}
*/

// how to assign a function to a variable //
/* 
* To assign a function to a variable you should create a function expression
* which should be done as follows:
*/

var add = function(a,b) {
return a + b;
}

// how to specify inputs and outputs of functions //

/* Functions can optionally take inputs and optionally return a single value, by 
* having parameters they can optionally take inputs. Functions can optionally 
* return outputs by having a return value as well.
*
*
*
*EXAMPLE:1

function myFunction(parameter) "<==== input" {
    
};

EXAMPLE:2

function myFunction(){
    return 100 "<==== output"
};

*/

//Scope//

/*

Scope identifies the accessbility of variables in your code. In JS 
there are global and local scopes where variables can be accessed.When variables 
are stored in a local scope they can only be accessed in the local scope. Global 
scope variables ,although, can be accessed in the local and global scope. Local
scope variables cannot be accessed in the Global scope as well.

*/

var c = "caramel";
var ch = "chocolate";
function twix(){
 return   c + " " + ch;
};
console.log(c); // this will print caramel because var c is global scoped



function twix(){
var c = "caramel";
var ch = "chocolate";
 return   c + " " + ch;
};
console.log(c);/* if c is console logged this will print c is not defined because 
var c is local scoped */


// Closures //
/*
*
* Closures are functions that are inside of other functions.These functions
* can access the outer functions parameters and variables but the outer function 
* cannot access the inner functions variables nor parameters. Closures have access 
* to the variables in their function,the variables in the outer function,and the variables
* in the global scope.
*/
