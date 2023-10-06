//1]a) Is the InnerFunction() a closure?
/*The InnerFunction provided in the given code is a closure*/
//b) What is output of this program
function OuterFunction()
{ 
    var outerVariable = 100;
function InnerFunction() 
{
    alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();
/*the output will be 100*/

//2]What is the difference between a closure and a scope ?
/*Scope in JavaScript defines the accessibility and visibility of variables and functions during the runtime of a program. 
It determines where in the code you can access a particular variable or function*/

/*A closure is a function that remembers its lexical scope (the scope where it was created) even when the function is executed outside that lexical scope. 
Closures have access to variables from their own scope, the scope of the outer function, and the global scope.*/

//3]What is a lexical scope and how is it related to closure?

/* Lexical scope refers to the way in which variable names or identifiers are resolved in a programming language.
Closures capture the entire lexical scope in which they are created, including all variables and functions in that scope,
allowing the inner function (the closure) to access those variables and functions even after the outer function has completed its execution.*/

//4]
for (var i = 0; i < 3; i++) 
{
setTimeout(function log() 
{
    console.log(i); 
}, 1000);
}
/* the output for the following code will be 
3
3
3
They will print after 1000milliseconds gap
*/