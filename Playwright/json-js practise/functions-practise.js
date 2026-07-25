/**Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}

Sample Function proto:

var arr = [“GUVI”, “I”, “am”, “a geek”];
function transformFirstAndLast(arr) {
 
 return newObject;
} */

var arr = ['GUVI', 'I', 'am', 'a geek'];

function transformFirstAndLast(arr) {
 
    newObject={};
    newObject={
        [arr[0]]: arr[arr.length - 1]   /**Summary RuleTo make a dynamic Object Key in JS: Use [ ] inside the object.To make a dynamic String Value in JS: Use ${ } inside backticks. */
    }

    //both ways are correct
    //newObject[arr[0]]= arr[arr.length - 1]   /**Summary RuleTo make a dynamic Object Key in JS: Use [ ] inside the object.To make a dynamic String Value in JS: Use ${ } inside backticks. */
 return newObject;
};

console.log(transformFirstAndLast(arr));