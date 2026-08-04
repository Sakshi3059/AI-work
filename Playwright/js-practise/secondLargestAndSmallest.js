// In an array print the second smallest and second largest element 

const arr = [3, 3, 45,1, 5, 6, 6, 0,7, 8, 9, 9];

const sortedArr = arr.sort((a, b) => a - b);

const sortedset = [...new Set(sortedArr)]       //returns Array
const sortedSet = Array.from(new Set(sortedArr)); //returns Array

console.log(`sec Smallest is ${sortedset[1]}`);
console.log(`sec Largest is ${sortedSet[sortedset.length - 2]}`);
console.log(sortedset)
console.log(sortedArr)