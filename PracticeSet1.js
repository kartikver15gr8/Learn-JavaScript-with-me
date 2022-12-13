// Q1 Create a variable of type string and try to add a number to it.

const a = "Hello world";
let b = 8;
console.log(a+b);

// Here in the program, we declared 'a' as a string and then added '8' into it. but remember here is taken as 'string' not 'integer', because we know that we can't add string to numbers.

// Q2 use 'typeof' operator to find the datatype of the string in last question

console.log(typeof(a));
console.log(typeof(b));

// Q3 Create a const object in JavaScript. Can you change it to hold a number later?

 const item = {
    Harry : "Nimbus 2000",
    Potter :"Hogwartz",
    Harmine : "Vingardium Lavioursa"
 };
 console.log(item);

//  item = 8;      // We can't change item as it was declared as const.

// Q4 Try to add a new key to the const object in problem 3, were you able to do so?

item["Ron"] = "Weisley";        // We can add elements in an object despite of declaring it as const. 
console.log(item);

// Also we can change the value of keys declared inside the object 'item'

item["Harry"] = "Potter";
console.log(item);

// Q5 Write a JavaScript program to create a word-meaning dictionary of 5 words

const Dictionary = {
    Realm : "Area",
    JavaScript : "Awesome",
    Kartikey : "Brilliant",
    Tata : "Ratan JI",
    Elon : undefined
};

console.log(Dictionary);

// we can access the value of 'key' as given below

console.log(Dictionary["Realm"]);
console.log(Dictionary.Kartikey);
