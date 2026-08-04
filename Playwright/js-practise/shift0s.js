//{ 34, 0, 9, 5, 7, 4, 0, 4, 0, 23 }

function shiftZeros(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
           temp= arr[counter]
           arr[counter]=arr[i]
           counter++;
           arr[i]=temp;
        }

    }
    return arr;
}

arr = [1, 2, 3, 4, 0, 5, 0];
console.log(arr);

console.log(shiftZeros(arr));