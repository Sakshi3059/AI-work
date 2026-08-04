var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
        {
            date: "3/15/2019",
        damage_points: "5000",
        atFaultForAccident: true
 },
    {
        date: "7/4/2022",
damage_points: "2200",
atFaultForAccident: true
 },
{
    date: "6 / 22 / 2021",
    damage_points: "7900",
    atFaultForAccident: true
}
 ]
}

// 1. Loop over the accidents array. Change atFaultForAccident from true to false.
//const faultTaul = myCar.accidents.flatMap(accident => accident.atFaultForAccident === true);//Return type is array but returing here boolean value not object

const faultTaul = myCar.accidents.filter(accident => accident.atFaultForAccident === true);//Return type is array and subset is returned based on condition
faultTaul.forEach(accident => accident.atFaultForAccident = false); 


console.log(myCar);

// 2. Print the dated of my accidents
console.log(myCar.accidents.map(accident => accident.date)); //map keeps nested structure but flatmap returns array 

/**
 * const mapResult = cat.catFriends.map(friend => friend.activities);
console.log(mapResult);

// Output (Nested Array):
// [ [ 'be grumpy', 'eat bread omblet' ], [ 'sleep', 'pre-sleep naps' ] ]

 */

/**
 * const flatMapResult = cat.catFriends.flatMap(friend => friend.activities);
console.log(flatMapResult);

// Output (Single Flat Array):
// [ 'be grumpy', 'eat bread omblet', 'sleep', 'pre-sleep naps' ]

 */