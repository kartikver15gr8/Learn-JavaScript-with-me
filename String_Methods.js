// Note: Strings are immutable 

let naam = "Sambhav";
console.log(naam.length);
console.log(naam.toUpperCase());
console.log(naam.toLowerCase());

 console.log(naam.slice(3,6));      // This will print substring of 'naam' starting from character at index 3 to the index 5. Note it will not include the element at index 6.

console.log(naam.slice(4)); // When we don't give the second argument, then this will print the element from index equals to the given argument to the last element of rest of the string.

let nayaNaam = naam.replace("bhav", "arth");
let ekAurNaam = naam.replace("Sam", "Anu");

console.log(nayaNaam);
console.log(ekAurNaam);

let greet = "            Ayeeeeeee!    ";

let newGreet = greet.trim();    // Removes extra spaces from the beginning and the ending of the string.

console.log(newGreet);


let newGreet2 = newGreet.concat(" Kesan ba!");
console.log(newGreet2);

let anotherGreet = newGreet2.concat("Take this",greet.trim(),newGreet2);

console.log(anotherGreet);

let str = "Kartavya";
let newStr = str.concat(" ",greet.trim()," is a nice guy");
console.log(str);
console.log(newStr);
