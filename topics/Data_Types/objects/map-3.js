/* eslint-disable */
/*
  Map - abstract data structure
  - Map is a collection of keyed data items similar to Objects
  - The main difference between Map & Objects is that Map allows keys & values of any type
  -  Original order of elements (pairs) in Maps is preserved, while in Object, it isn’t.
  - some methods & properties are:
    - new Map()
    - map.set(key,value)
    - map.get(key)
    - map.has(key)
    - map.delete(key)
    - map.clear()
    - map.size
*/

// create a new Map object
const map = new Map();

const person = {
  name: 'olusegun',
  age: 20
}

// set(key,value) using 'chain' calls
map.set('name','Segun')
   .set(100, 'This is a number')
   .set(true, () => console.log('Woof'))
   .set(person, 'Handsome Dude 😎');

const score = 90;
const prizes = new Map();
prizes.set(100, 'Win a Mac book')
      .set(90, 'Win a laptop')
      .set(80, 'Win a phone')
console.log(`${prizes.get(score)} for a score of ${score}`);

// get length of prizes
prizes.size; // 3
map.size; // 4

// iterate over a Map 
// forEach(), .keys(), .values(), .entries() 
const ul = document.querySelector('.prizes');
 for (const [points, award] of prizes){
    console.log(points, award);
    const li = `<li>${points} - ${award}</li>`;
    ul.insertAdjacentHTML('beforebegin', li);
 }

 // delete key
 map.delete(true);