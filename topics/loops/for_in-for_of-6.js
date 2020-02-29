/* for...in */

//  for in - used for looping over all enumerable properties 
// of an object that are keyed by strings (loop over keys of an object)

const object = {a: 1, b: 2, c: 3};


for (let key in object){
  console.log(`${key}: ${object[key]}`);
}


// used for looping over an object's prototype

const baseHumanStats = {
  feet: 2,
  arms: 2,
  eyes: 2,
  head: 1
}
// constructor
function Human(name){
  this.name = name;
}
// 
Human.prototype = baseHumanStats;

// create an object
const person = new Human('kkols');

// loop over an object's prototype
 for (const prop in person){
   console.log(prop);
 }


/* for...of */

const names = 'Olusegun Ekoh💯🎅👨‍👨‍👦‍👦';
const numbers = ['😄',2, 34, 3, 23, 42, 3, 1, 65, 264, 5, 645, 6];

// for of - used for iterating over iterables (something that have a length property)
// can iterate over emojis 

for (let i of names){
    console.log(i);
}

// for (let i of numbers){
//   console.log(i);
// }
