
var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
        {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
        },
        {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
        }
    ]
}
console.log(cat);

// Add height and weight to Fluffy
cat.height = 10;
cat.weight = 20;
console.log(cat);

// Fluffy name is spelled wrongly.Update it to Fluffyy
cat.name="fluffyy";
console.log(cat);

// List all the activities of Fluffyy’s catFriends

cat.catFriends.forEach((activity,index)=>{
    console.log(index, " ", activity.activities);
});

const act=cat.catFriends.flatMap((activity=>activity.activities));
console.log(act);

cat.catFriends.forEach((friends,index)=>{
    console.log(friends.name," ",friends.activities);
});

// Print the catFriends names.
cat.catFriends.forEach((friends,index)=>{
    console.log(friends.name," ",friends.activities);
}); 


var friendss=cat.catFriends.flatMap((friends=>friends.weight));
var weights = friendss;
var totalWeight=0;

weights.forEach((weight,index)=>{
   totalWeight=totalWeight+weight;
});

console.log(totalWeight);


// Print the total activities of all cats(op: 6)
const acts = cat.catFriends.flatMap((activity => activity.activities));
console.log(acts.length);

// Add 2 more activities to bar & foo cats bby index
cat.catFriends[0].activities.push("jogging","running"); //0th item of array which is 1st object in array of objects
console.log(cat);
const actss = cat.catFriends.flatMap((activity => activity.activities));
console.log(actss);

//add to activity for just foo 
const fooCat=cat.catFriends.find(foo=>foo.name==="foo"); //here no index coz find iterates over 
console.log(fooCat);



// Update the fur color of bar
const barCat=cat.catFriends.find(bar=>bar.name==="bar");
barCat.furColor="balck"; //will create new key value and pair as case-sensitive;
barCat.furcolor="purple";
console.log(cat);