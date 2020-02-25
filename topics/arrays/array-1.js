const names = ['Olusegun', 'John', 'Adebisi'];
const countries = ['Nigeria', 'United Kingdom', 'Canada', 'France'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const comments = [
  {text: 'Cool beans', id: 100},
  {text: 'Not Nice', id: 200},
  {text: 'Really Awesome', id: 300},
  {text: 'Bad Idea', id: 400},
  {text: 'Cool Work', id: 500}
]

// creating an array
let list = new Array(5);

//getting the length of an array
const len = names.length;

// accessing items in an arrays
const firstName = names[0];
const lastName = names[len - 1];

/* Mutable Methods */

// create a copy of the original array
// before applying a mutable method
// so that it doesn't modify the original data

// Method 1. Using spread syntax
const numbersReversed = [...numbers].reverse();

// Method 2. Using slice() method
const numbersSliced = numbers.slice(0).reverse();

console.log(numbers);
console.log(numbersReversed);
console.log(numbersSliced);

// const addName = names.push('Katrine');
const add = [...names,'Katrine'];

console.log(names);
console.log(add);

// const addToFront = countries.unshift('Iraq');
const immutableAddToFront = ['Brazil', ...countries];

console.log(countries);
console.log(immutableAddToFront);


/* Immutable Method */

const part = numbers.slice(3);
console.log(numbers);
console.log(part);

// add an item to the middle of an array

const newBikes = [
  ...bikes.slice(0, 2),
  'Sonyata',
  ...bikes.slice(-2)
]
console.log(bikes);
console.log(newBikes);

// remove an item (4th-item)
const modifiedBikes = [
  ...newBikes.slice(0, 3),
  ...newBikes.slice(4)
]
console.log(newBikes);
console.log(modifiedBikes);


// delete a comment from a given id

// Method 1
// function deleteComment(id, comments){
//   const index = comments.findIndex(comment => comment.id === id);
//   return [
//     ...comments.slice(0, index),
//     ...comments.slice(index + 1)
//   ]
// }

// Method 2
function deleteComment(id, comments){
  const index = comments.findIndex(comment => comment.id === id);
  const commentsCopy = [...comments];
  commentsCopy.splice(index, 1);
  return commentsCopy;
}

const result = deleteComment(500, comments);
console.log(comments);
console.log(result);
