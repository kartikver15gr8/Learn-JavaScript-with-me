// Q1 Write a program using prompt function to take input of age as a value from the user and use alert ot tell him if he/she can drive or not.

let age = prompt("Enter your age.");
a = Number.parseInt(a);
if(age>=18){
    alert("You can drive");
}else{
    alert("You are not allowed to drive kid.")
}

// In Q1, use confirm to ask the user if he wants to see the prompt again.

let a = prompt("Enter your age.");
let pro = confirm("Are you willing to see the prompt again?");
if (pro) {
    prompt("Enter your age.");
}
else {
    document.write(`My age is ${a}`)
}
if (a >= 18) {
    alert("You can drive");
} else {
    alert("You are not allowed to drive kid.")
}

// Q3 In the previous question use 'console.error' to log the error if the age entered is negative.

let b = prompt("Enter your age.");
if (b < 0) {
    alert("Are you crazy, you entered negative number.")
} else if (b >= 18) {
    alert("You can drive");
} else {
    alert("You are not allowed to drive kid.")
}


// Q4 write a program to change the url to google.com(redirection) if user enters a number greater than '4'.

let num = prompt("Enter a number.");

if (num > 4) {
    window.location.href = "https://www.google.com/";
}
else{
    document.write(`The number is ${num}`);
}

// Q5 Change the background of the page to yellow, red or any other color basedon user input through prompt.

let color = prompt("Enter a color");
document.body.style.background = color;