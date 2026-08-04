/**
 * Parsing a list of lists and convert into a JSON object:
Write a function called 'transformGeekData' that transforms some set of data from one format to another.

Input (Array):
var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
Output:
[
{firstName: 'Vasanth', lastName: 'Raja', age: 24, role: 'JSWizard'},
{firstName: 'Sri', lastName: 'Devi', age: 28, role: 'Coder'}
]

Sample Function proto:

var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 //Your code
 
 return tranformEmployeeList;
}
 */


var arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function objFromArr(arr) {
    var obj = {};
    arr.forEach(a => {
        obj[a[0]] = a[1];
    });
    return obj;
}

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
     
    obj = {};
    arr.forEach(ar=>{
        // ar.forEach(a => { //['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']
         tranformEmployeeList.push(objFromArr(ar));
        //})
    })

    //Your code

    return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));