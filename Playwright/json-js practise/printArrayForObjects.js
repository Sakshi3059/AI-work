// sing an JSON object’s Values:
// Write a function called “printAllValues” which returns an newArray of all the input object’s values.

//     Input(Object):

// var object = { name: “RajiniKanth”, age: 33, hasPets: false };
// Output:

// [“RajiniKanth”, 33, false]

// Sample Function proto:

// var obj = { name: “RajiniKanth”, age: 33, hasPets: false };
// function printAllValues(obj) {
//     // your code here
// }


function printAllValues(obj) {
    return Object.values(obj);
}

console.log(printAllValues({ name: 'RajiniKanth', age: 33, hasPets: false }));

function printAllKeys(obj){
    return Object.keys(obj);
}
console.log(printAllKeys({ name: 'RajiniKanth', age: 33, hasPets: false }));

function ObjToList(obj){
    //return obj.map(objs=>objs=>obj);  Sakshi failed here

    //As per Sakshi Logic
    // 1. Object.keys(obj) turns the object into an array: ['name', 'age', 'hasPets']
    // 2. Now that it is an array, you can use .map()!
    // return Object.keys(obj).map(key => {
    //     return [key, obj[key]]; 
    // });
    return Object.entries(obj);
}

console.log(ObjToList({ name: 'RajiniKanth', age: 33, hasPets: false }));

