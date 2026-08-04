// I have a list {apple, bat, banana, cat,dog, orange} I want to store it in a hashmap so that the elements are grouped according to their length

// output:
// [bat, cat, dog]
// [apple]
// [banana, orange]

const list = ["apple", "bat", "banana", "cat", "dog", "orange"];
const mapWithKeys = new Map();

for(let i=0; i<list.length; i++) {
    const word = list[i];
    const length = word.length;
    if(mapWithKeys.has(length)) {
        mapWithKeys.get(length).push(word);
    } else {
        mapWithKeys.set(length, [word]);
    }
}

console.log(mapWithKeys);