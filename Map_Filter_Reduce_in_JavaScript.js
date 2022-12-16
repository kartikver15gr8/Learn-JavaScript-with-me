let array = [21, 52, 51, 5656, 4];

array.map((val) => {
    console.log(val);
})  // Map looks like forEach loop in arrays but unlike forEach loops, Map create a new array and then perform the operation on it. on the other hand forEach loops just perform operations over array without creating a new array.

// Both 'Map' and 'forEach' loop can take THREE arguments as shown below.

let num = [2, 3, 5, 1, 6];
num.forEach((element, index, array) => {
    console.log(element, index, array);
});

console.log();

let tum = [1, 2, 3, 5, 6];
tum.map((element, index, array) => {
    console.log(element, index, array);
    return element;
});




// Array filter Method

let list = [12, 345, 634, 63, 662, 6245];

let filteredList = list.filter((value) => {
    return value > 600;
})
// Filter method in array is used to filter the elements of array as per our desire. In the above filter method, we created a function that will return the array of elements greater than 600, hence the array 'filteredList' will only contain those elements whicha are greater than 600.
console.log(filteredList);
// Output => [ 634, 662, 6245 ]




// Reduce method of Arrays

list = [12, 345, 634, 63, 662, 8245];

let sumOfList = list.reduce((a,b)=>{
    return a+b;
});
console.log(sumOfList);


// Map, Filter, Reduce three of the methods of Arrays returns an array.