let nums = [4, 5, 6, 7, 2];

// const compare = (a,b) =>{
//     return a-b;
// };

// console.log(nums.sort(compare));

for(let i = 0; i<nums.length;i++){
    console.log(nums[i]);
}


// forEach Loop in JavaScript 
nums.forEach((element)=>{
    console.log(element**2);    // This will print square of each element of the array.
})


// Array.from is used to create an array from any other object ( for e.g, HTML collections are converted into array using Array.from)

let name = "Kartikey";
let arr = Array.from(name); // This will return an array of every character of string 'name'.

console.log(arr);   // output ['K','a','r','t','i','k','e','y']


// for of loop
for(let i of nums){
    console.log(i);
}
console.log();
// for in loop
for(let i in nums){
    console.log(i);
}