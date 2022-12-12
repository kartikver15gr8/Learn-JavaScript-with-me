// Before ES6 (ECMAScript), var was used to declare variables, but after ES6 or at present, var is not used often because it increase the chances of bugs in the code. We should always avoid the use of 'var' to declare a variable, and should use 'let' and 'const'.

console.log("Understanding the differences between var, let and const.");

var a = 45;     // var is global scoped
var b = "Michael Jordan";
var c = false;

console.log(b);

{
    let b = "Kartikey"; // let is block scoped
    console.log(b);
}

console.log(b);


const owner = "Papa";
// owner = 8;  
// let owner = 10;
// var owner = 9; // things declared as 'const' can't be changed.
console.log(owner);
