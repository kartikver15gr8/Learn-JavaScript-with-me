let name1 = "Joshua";
console.log(name1.length);

let Karan = "Awesome";

console.log(Karan +" "+ name1);

// We can access a particular character of string as shown below.

let ch = name1[4];
console.log(ch);// This will print 'u' as 'u' is at '4th' index.

console.log(Karan[2]);



// Template Literals

let man1 = "Harman";
let man2 = "Miller";

let text = `${man1} is associated with ${man2}, and together both of them are ${man1} ${man2}`
console.log(text);

// Escape Sequence Characters

let food = 'Broccoli\'s Pasta';

console.log(food);
console.log(food.length);

let Dish = "Lasagna\"s";

console.log(Dish);
console.log(Dish.length);