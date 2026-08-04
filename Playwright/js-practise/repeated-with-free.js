//{1,3,3,4,5,6,6,7,8,9,9}
/**
 * when user enters a search element, the program should display the index number where the element is found. If the element is repeated it should display all those indices. If it is not present in the given array program should display "element not found"

 */
const arr = [1, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9];

const freeWithIndex={
    free:0,
    index: []
};


let searched_el=6;

// function searchedElWithIndex(arr,serached_el){

//     for(let i=0;i<arr.length;i++){
//        if(arr[i]===searched_el){
//         freeWithIndex.free++;
//         freeWithIndex.index.push(i);
//        }
//     }
//     return freeWithIndex;
// }

//console.log(searchedElWithIndex(arr,searched_el));  

function searchedElWithFreq(arr,el){
    const maa=new Set();

    let free=0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === el) {
            free++;
            maa.add(i);
        }

        
    }


    if (free === 0) { return 'not found' }

    let index=[]
     for(let ind of maa){ 
      index.push(ind)
    }
   

    return `Frequence is ${free} and indexes are ${index}`;
}


console.log(searchedElWithFreq(arr,9))
console.log('Hiii' + '5'+'2')

const fruits = ['apple', 'banana', 'cherry'];

// Syntax: splice(start_index, delete_count, item1, item2, ...)
fruits.splice(1, 2, 'mango');

console.log(fruits); // ['apple', 'mango', 'cherry'] ('banana' was replaced)

const showArgs = (...allMyArgs) => {
    console.log(allMyArgs[0]); // Output: "Apple"
    console.log(allMyArgs[1]); // Output: "Banana"
};

showArgs("Apple", "Banana");

const items = ['a', 'b', 'c'];

items.forEach((item, index) => {
    if(index==2){
        //  break; // C:\Users\gc\Projects\AI-work\Playwright\js-practise\repeated-with-free.js:77  not allowed in forEach loop
        // break;
        // ^^^^^

        //     SyntaxError: Illegal break statement
    }
    console.log(index, item);
});
// Outputs: 0 'a', 1 'b', 2 'c'


