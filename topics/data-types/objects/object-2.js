/* Object References vs Values */
/* eslint-disable */

// When we set one string variable to be another
// the value is copied from one to another
let name1 = 'segun';
let name2 = 'segun';

console.log(name1 === name2);
name1 = 'scott';
console.log(name1 === name2);

// update name1 to the value of name2
name1 = name2;
console.log(name1 === name2);
name2 = name1;
name2 = 'sege'

console.log('🔫🔫🔫🔫🔫🔫🔫OBJECTS🔫🔫🔫🔫🔫🔫🔫');

/* OBJECTS */
// when comparing objects, the comparison is 
// done by reference to the object 
const person1 = {
  first: 'segun',
  last: 'Ekoh',
  clothings: {
    shirts: 5,
    trousers: 6
  }
}

const person2 = {
  first: 'segun',
  last: 'Ekoh'
}
const person4 = person2;
// false, this is because they are not the same actual object
// even though they have the same content
console.log(person1 === person2); 
console.log(person4 === person2); 

/*
  - We are not copying the content(s) of 'person1' to 'person3' like we did with primitive types
  - Here, we are simply creating a 'person3' variable that references or points to the original 'person1' variable so any modification to the 'person3' object reflects in the 'person1'
  - This paradigm may occur in arrays, functions, maps & sets (reference types)
*/
// const person3 = person1;
// person3.first = 'Olaoluwa';
// console.log(person3.first); // 'Olaoluwa'
// console.log(person1.first); // 'Olaoluwa'

console.log('🦄🦄🦄🦄🦄🦄COPYING/CLONING AN OBJECT🦄🦄🦄🦄🦄🦄');

/*
  Copying An Object
*/

/* 
  A. Shallow Copy (one-level copy) 
  - Meaning that they only go one-level deep and take a copy of it 
  - spread operator, Object.assign()
*/
// i. Spread Operator
// const person3 = { ...person1 };
// person3.first = 'Mike';
// console.log(person3.first); // 'Mike'
// console.log(person1.first); // 'segun'

// person3.clothings.shirts = 100;
// console.log(person3.clothings.shirts); // 100
// console.log(person1.clothings.shirts); // 100 ? But I only modified 'person3' object😯

// ii. Object.assign()
//  const person3  = Object.assign({}, person1);

/*
  B. Deep Copy 
  - lodash is one of the most popular libraries for deep cloning
*/
 const person3 = _.cloneDeep(person1);
 person3.clothings.shirts = 100;
 console.log(person3.clothings.shirts); // 100
 console.log(person1.clothings.shirts); // 5

 /*
  Spread Operator notable uses
  i. cloning/copying  (replaces slice())
  ii. merging/concatenating  (replaces concat())
 */

 // Merging/concatenating 
 // N/B: If objects to be merged have the same properties, 
 // the properties are overwritten by other objects that have 
 // the same properties later in the parameters order.
 const meatInventory = {
   bacon: 2,
   sausage: 3,
   cramps: 10
 }

 const veggieInventory  = {
   lettuce: 5,
   tomatoes: 3,
   cramps: 7
 }

 const inventory = { 
   ...meatInventory, 
   ...veggieInventory,
   bacon: 10
 }

 console.log('✌️✌️✌️✌️✌️✌️FUNCTIONS✌️✌️✌️✌️✌️✌️');

 // Functions
 function printName(data){
   data = 'some data';
   console.log(data);
 }
 printName(name1); // only passes the value and doesn't reference the external variable

 function mutateData(data){
   data.first = 'Ade';
   console.log(data);
 }

 console.log(mutateData(person1)) // {first: "Ade", last: "Ekoh", clothings: {…}}

 // original 'person1' object mutated
 // a solution is to clone the obj first before 
 console.log(person1); // {first: "Ade", last: "Ekoh", clothings: {…}}