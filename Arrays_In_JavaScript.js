let arr = [2.3,6,6,2,1];
console.log(arr);

// Arrays are the collection of elements of either same or different data types


let marks = [92,94,89,91,97,99,undefined, "Absent", false];

console.log(marks);

for (let index = 0; index < marks.length; index++) {
    console.log(marks[index]); 
}

// Arryas are mutable

marks[3] = 100;
console.log(marks);
console.log(marks.length);