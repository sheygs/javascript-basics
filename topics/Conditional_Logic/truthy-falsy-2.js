/* eslint-disable */
/*
Falsy values: 0, "" (empty string), false, undefined, null, NaN
Truthy Values: All non-falsy values
*/

console.log(!!0); // false
console.log(!!""); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!false); // false

console.log(!!1); // true
console.log(!!"0"); // true
console.log(!!{}); // true
console.log(!![]); // true
console.log(!!new Date()); // true
console.log(!!-4); // true
console.log(!!Boolean(true)); // true

console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(1 != '1'); // false
console.log(1 !== '1'); // true
