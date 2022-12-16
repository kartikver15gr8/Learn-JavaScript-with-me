// Guess the number between 0 to 10

let x = Math.floor(Math.random() * 10) + 0;
x = Number.parseInt(x);
let a;
a = Number.parseInt(a);
count = 0;
while (a != x) {
    a = prompt("Guess the number!");
    a = Number.parseInt(a);
    if (a < x) {
        console.log("The number is Greater");
        count++;
    } else if (a > x) {
        console.log("The number is Smaller");
        count++
    }
}
count++;
console.log(`You guessed the number, its ${a} and attempts you made were ${count}`);