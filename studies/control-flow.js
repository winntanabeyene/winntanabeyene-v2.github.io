//CONTROL FLOW//
/*
The control flow in JS is the way the server executes code. Code is run from top
to bottom unless the flow is changed , which can be possible with conditonal 
statements or loops.
*/

//IF STATEMENTS//
/* 
If statements are used to see if a statement is "truthy", to return the value
that is given in the body of the statement
*/

//EXAMPLE//
var a = 1;
var b = 0;

function greaterThan(){
 if (a > b) {
    return "One is greater than zero";
} 
    return " One is not greater than zero";
}
greaterThan();
/*
In the example above if the statement placed in the parenthesis (a > b) is truthy
the return statement will execute otherwise it will bump it and return the next 
or default return statement.
*/

//ELSE-IF//
/*
When your if statement isnt true or truthy and you have another condition you
want to test , you would use an else if statement for each condition you 
want to test.
*/

//EXAMPLE//

var a = 2;
var b = 0;
function maybeGreaterThanEqualTo(){
if (a > b) {
    return "a is greater than b";
} else if (a == b) {
    return " a is equal to b";
}
}
maybeGreaterThanEqualTo();

/*
In this else-if statement if the first condition is run and doesn't 
evaluate to true then the else-if statement will run and if it is true it will
execute that return statment. 
*/

//ELSE STATEMENT//
/*
An else statement is considered a default statement because if all other 
condtions resolve to false the else statement or condition will excute as 
that return value is to be excuted when all other statements resolve to false.
*/

var a = 2;
var b = 0;
function isGreaterEqualToOrLessThan(){
if (a > b) {
    return "a is greater than b";
}else if (a == b) {
    return " a is equal to b";
}else {
    return "a is less than b";
}
}
isGreaterEqualToOrLessThan();
/*
In this else statement , it states to return "a is less than b" if all other
conditions resolve to false.Only if they all resolve to false will this code 
execute.
*/

//SWITCH//

/*
We use a switch statement to specify many different conditions to be executed.
We usually use this statement to do different actions based on different conditions.
*/
//SYNTAX//

/*

switch(expression) {
    case a:
    code block
    break;
    case b:
    code block
    break;
    default:
    code block
}
*/

let z = 2 + 1;

switch (z) {
  case 3:
    console.log( 'wow, its three.' );
    break;
  case 4:
    console.log( 'this is too large.' );
    break;
  case 5:
    console.log( 'way to big.' );
    break;
  default:
    console.log( "I don't know such values" );
}

/*
The above switch statement will console log "wow, its three." because the result 
of z evaluates to three. In this switch statement case 3 prints that message.
*/
