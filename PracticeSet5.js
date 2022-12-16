// Q1 Create an array of numbers and take inpout from the user to add numbers to this array

// let array = [1, 23, 4, 5, 6];
// let a = prompt("Enter a number!");
// a = Number.parseInt(a);
// array.push(a);
// console.log(array);


// Q2 Keep adding numbers to the array in 'Q1' until 0 is added to the array.

// while (a != 0) {
//     a = prompt("Enter a number");
//     array.push(a);
// }
// console.log(array);

// Another approach given below

// do {
//     a = prompt("Enter a number");
//     a = Number.parseInt(a);
//     array.push(a);
// } while (a != 0);
// console.log(array);

// Q3 Filter for numbers divisible by 10 from a given array.

let nums = [12, 70, 50, 110, 4, 6, 90];

let divisibleByTen = nums.filter((a) => {
    return a % 10 == 0;
})
console.log(divisibleByTen);

// Q4 Create an Array of square of given numbers.

let sqNums = nums.map((element) => {
    return element ** 2;
});

console.log(sqNums);

// Q5 Use reduce to calculate factorial of a given number from an array of first 'n' natural numbers ('n' being the number whose factorial needs to be calculated)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let factNums = num.reduce((ag, bg) => {
    return ag * bg;
})

console.log(factNums);