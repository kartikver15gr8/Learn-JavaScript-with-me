// There are Seven types of Primitive Data types
// Boolean, String, Null, Symbol, BigInt, Undefined, Number.

let a = null;
let b = 4343; // Number
let c = "Hello"; // String
let d = false;   // Boolean
let e = Symbol("I am a nice symbol");
let f = undefined;  // This is undefined
let g = BigInt("897");

console.log(a, b, c, d, e, f, g);

console.log(typeof a);

// Objects of Non-Primitive Data types in JavaScript

const item = {
    "Jerry": true,
    "Tom": false,
    "Spike": 10,
    "Nibbles": undefined
};

console.log(item);
console.log(item["Jerry"], item["Spike"]);