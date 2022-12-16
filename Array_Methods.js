// Methods of Arrays 

let num = [3, 5, 6, 2, 7, 1];

let b = num.toString(); // This method convert an array into string.
console.log(b);

let c = num.join("__"); // This method is used to join every element of the array.
console.log(c);

console.log(typeof (c));


// Pop method is used to remove an element of the array from the last index

num.pop();
console.log(num);

// Push method is used to add an element in the last index of the array, and also return the new length of the array.

num.push("I just pushed an element in the array.");
console.log(num);

// Shift method in array removes the first element and returns it

num.shift();
console.log(num);

// unshift method in array adds an element in the beginning of the array, and returns it.

num.unshift("I added an element using 'unshift' method of arrays.|");
console.log(num);

// Delete operator

delete num[0];  // This will delete the element at zeroth index of the 'num' array, but the length of the array will remain same.
delete num[4];
console.log(num);

let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 10, 11];
let a3 = [6, 7, 8, 9, 10, 11];
let a4 = [6, 7, 8, 9, 10, 11];

let a5 = a1.concat(a2, a3, a4);
console.log(a5);        // We can concatenate multiple arrays


// Sort method sorts the array.

console.log(num);
console.log(num.sort());    // This method changes the original array, also sort method sorts the array in alphabetial order.

console.log(num);


let compare = (a, b) => {
    return a - b;
}   // we created this function to sort the elements in ascending order
let unSorted = [8, 7, 4, 2];
console.log(unSorted.sort(compare));



// Splice and Slice.

let array1 = [1, 4, 66, 77, 33, 63, 97, 34];

array1.splice(3, 3, 12, 43, 97);        // Splice method is used in arrays to add element in specific index, remove some element from a specific index, and return deleted values.
console.log(array1);
array1.splice(3, 1, 12, 43, 97);
console.log(array1);


let deletedVals = array1.splice(3, 3, 4, 5, 7);
console.log(deletedVals);



// Slicing is used to create a sub-array from a given index to a given index of an array. it doesn't change the original array.

let amigos = [3, 6, 67, 2, 1];

let slicedAmigos = amigos.slice(1,4);
console.log(slicedAmigos);