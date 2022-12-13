// Q1 Use logical operators to find whether the age of a person lies between 10 and 20
let age = 25;
age = Number.parseInt(age);
if (age>10 && age<20) {
    console.log("The age lies between 10 to 20, and is ",age);    
}else{
    console.log("The age does not lie between 10 and 20.");
}

// Q2 Demonstrate the use of switch case statements in JavaScript
let alpha = "Banana";

switch (alpha) {
    case "Banana":
        console.log("Its banana.");
        break;
    case "Pinapple":
        console.log("Its pinapple.");
        break;
    case "Kiwi":
        console.log("Its Kiwi.");
        break;
    case "Dragon Fruit":
        console.log("Its Dragon Fruit.");
        break;
    case "Apple":
        console.log("Its Apple.");
        break;

    default:
        console.log("Its",alpha);
        break;
}

// Q3 Write a javaScript program to find whether a number is divisible by 2 and 3.

let num = 4;
num = Number.parseInt(num);
if(num % 2 == 0 && num % 3 == 0){
    console.log("The number is divisible by both 2 and 3.");
}

else {
    console.log("The number is not divisible by both 2 and 3.");
}

// Q4 Write a JavaScript program to find whether a number is divisible by either 2 or 3

num = Number.parseInt(num);
if(num % 2 == 0 || num % 3 == 0){
    console.log("The number is divisible by either 2 or 3.");
}

else {
    console.log("The number is not divisible by both 2 and 3.");
}

// Q6 Print "You an Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator.

console.log("You can", (age >= 18? "Drive":"Not Drive!"));
