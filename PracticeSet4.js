// Q1 What will the following print in JavaScript?
console.log("Har\"".length);    // This will print 4

// Q2 Explore the includes, startsWith, & endsWith functions of a string.

let str = "Hello my name is Kartikey Verma!";

console.log(str.startsWith("H"));   // This will return 'boolean' value i.e "TRUE or FALSE", if the string is starting with the 'char' you've given in the argument.
console.log(str.endsWith("!"));     // This will return 'boolean' value i.e "TRUE or FALSE", if the string is ending with the 'char' you've given in the argument.

console.log(str.includes("Kartikey"));      // This will return 'boolean' value i.e "TRUE or FALSE", if the string contains the character or string you've given in the argument.

// Q3 Write a program to convert a given string to Lowercase.

let newstr = str.toLowerCase();
let newstr1 = str.toUpperCase();
console.log(newstr);
console.log(newstr1);

// Q4 Extract the amount out of the string "Please give Rs 1000"

let phrase = "Please give Rs 1000";
console.log(phrase.slice(-4));  // "-4" will give the 4th index of the string from the last.

// Q5 Try to change 4th character of a given string, Were you able to do so?

// ==> The answer is 'we can't change strings as they are immutalbe.

