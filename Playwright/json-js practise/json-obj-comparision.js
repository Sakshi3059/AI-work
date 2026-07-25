/**
 * Parsing two JSON objects and Compare:
Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
Success Case:
Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed
Failure Case:
Input:var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code here
}
 */

var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 }
function assertObjectsEqual(actual, expected, testName) {
    // your code here
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log(JSON.stringify(actual));
        console.log("Passed");
    } else {
        console.log("FAILED [" + testName + "] Expected " + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
    }
}

assertObjectsEqual(actual,expected,'verify');