/*
  Null & Undefined
*/
let age;
console.log(age); // undefined

const nothing = null;
console.log(nothing); // null

/* eslint-disable */
const walter = {
  first: 'Walter'
};
console.log(walter.last); // undefined

const teller = {
  first: 'Raymond',
  last: 'Teller'
}
teller.first = 'Teller';
teller.last = null;
console.log(teller); // { first: 'Teller', last: null }
