// Q1 Write a program to print the marks of a student in an object using for loop

let marks = {
    Adam: 32,
    Gilchirst: 34,
    Jokovic: 64,
    Dodge: 87
}
for(let a = 0; a<Object.keys(marks).length;a++){
    console.log(Object.keys(marks)[a] + " => " + marks[Object.keys(marks)[a]]);
}

// Q2 Write the program in Q1 using for in loop
let key = 0
for(key in marks){
    console.log(marks[key]);
}

// Q3 Write a program to print "Try Again" until the  user enters the correct number.
let correctNum = 5;
let num;

// while(num != correctNum){
//     num = prompt("Enter the num.");
//     console.log("Try Again!");
// }

// Q4 Write a function to find mean of 5 numbers

let p;
let q;
let r;
let s;
let t;

function meanOfFiveNums(p,q,r,s,t){
    return (p+q+r+s+t)/5;
}

console.log("The mean of p, q, r, s ,t is: ", meanOfFiveNums(1,2,3,4,5));