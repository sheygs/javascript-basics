/* eslint-disable */

/* Logical Operators */
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

console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true || true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

/* Comparison (Relational) Operators */
console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(1 != '1'); // false
console.log(1 !== '1'); // true

console.log(1 >= '3'); // false
console.log(1 <= '1'); // true
console.log(2 > '1'); // true
console.log(2 < '3'); // true
