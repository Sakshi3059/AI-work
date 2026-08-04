/**Parsing a list of lists and convert into a JSON object:
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
Output:
var object = {
make : 'Ford'
model : 'Mustang',
year : 1964
}

Sample Function proto:

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject = {};
 
 return newObject;
}
*/

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
    var newObject = {};
    arr.forEach(ar => { //[make, Ford]
        //ar.forEach(a=>{ ///sakshi is wrong here 
            newObject[ar[0]]=ar[1];
        //})
    })
    return newObject;
}

console.log(fromListToObject(arr));