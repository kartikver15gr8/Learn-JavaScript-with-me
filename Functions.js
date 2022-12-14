function avgOfTwoNumbers(a, b){
    return (a+b)/2;
}

let a = 49;
let b = 48;
console.log("The average of a and b is: ", avgOfTwoNumbers(a,b));

// The roundof of average of a and b

function roundoffAvg(a, b){
    return Math.round((a+b)/2);
}

console.log("The roundoff average of a and b is: ", roundoffAvg(a,b));

// Another way of creating a function in JavaScript, This types of functions are known as "Arrow Funcitions".

const twoSum = (a,b)=>{
    return a+b;
}

console.log("The sum of a and b is: ", twoSum(a,b));

// We can also create a function without giving any parameters or arguments as shown below.
const Greet = () =>{    
    console.log("Hello there!, Its Kartikey this side.");
}

Greet();    // To call functions with no arguments, we call them as done here.