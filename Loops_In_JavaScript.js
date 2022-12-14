let a = 50;
a = Number.parseInt(a);
let b = 0;
b = Number.parseInt(b);
for(let i = 0; i <= a; i++){
    b+=i;
};
console.log(b);

// Factorial program using for loop

let alpha = 5;
alpha = Number.parseInt(alpha);
let beta = 1;
beta = Number.parseInt(beta);
for(let i = 1; i <= alpha; i++){
    beta*=i;
};
console.log(beta);

// "for-in" loop

let marks = {
    Jay: 98,
    Aryaman: 99,
    Viru: 100,
    Shlok: 97,
    Saloni: 99,
    Sakshi: 90,
    Praveen: 98,
    Bouncer: 99,
    Akarshi: 100
}

for(let i in marks){
    console.log("The marks of " + i + " are " + marks[i]);
}

// "for-of loop"

let arr = ["hello", "pal"];
for(let i of arr){
    console.log(i);
}