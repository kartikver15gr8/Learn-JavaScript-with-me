let a = prompt("How old you are");
a = Number.parseInt(a); // Converting the string into a number(integer)

console.log(a);

console.log(typeof (a));

if (a > 20) {
  alert("This is Awesome!");
}
else if (a < 0) {
  alert("Are you serious!")
}
else {
  alert("Hey Teen!");
}

console.log("You are", (a < 18 ? "Teen" : "Adult!"));  // This is ternary operator.

