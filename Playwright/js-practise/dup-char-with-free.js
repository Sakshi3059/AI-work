const arr = [1, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9];


function repeatedCharWithFree(arr){
    
    let count = 1;
    const mapWithFree = new Map();

    for(let i=0;i<arr.length;i++){
        
        if(!mapWithFree.has(arr[i])){
            mapWithFree.set(arr[i],count);
        }
        else{
            count=mapWithFree.get(arr[i])+1;
            mapWithFree.set(arr[i],count);
            count=1;
        }
    }

    return mapWithFree;
}

const mapwithFree=repeatedCharWithFree(arr);
console.log(mapwithFree);

// const arr = [1, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9];


// function repeatedCharWithFree(arr) {
//     let count = 0;

//     const mapWithFree = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         if (!mapWithFree.has(arr[i])) {
//             count = count + 1;
//             mapWithFree.set(arr[i], count);
//             count =0;
//         }
//         else {
//             count = mapWithFree.get(arr[i]) + 1;
//             mapWithFree.set(arr[i], count);
//             count = 0;
//         }
//     }

//     return mapWithFree;
// }

// const mapwithFree = repeatedCharWithFree(arr);
// console.log(mapwithFree);