/*
  Null & Undefined

*/
// undefined means a variable has been declared but not assigned yet
// It has a typeof 'undefined'
let age;
console.log(age); // undefined

// null is an assigned value; it means nothing,
// It is an object
const nothing = null;
console.log(nothing); // null

/* eslint-disable */
const walter = {
  first: 'Walter'
};
console.log(walter.last);

const teller = {
  first: 'Raymond',
  last: 'Teller'
}
teller.first = 'Teller';
teller.last = null;
console.log(teller); 
