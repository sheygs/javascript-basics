/* eslint-disable*/

// truthy/falsy values

/* boolean literal */
const arg = 'X';
console.log(Boolean(arg)); // true
console.log(!!arg); // true

/* boolean functions */
console.log(Boolean([])); // true
console.log(Boolean({})); // true

/* boolean constructors */
console.log(new Boolean(arg)); // true

/* Correctly Type-Checking Booleans */
console.log(typeof false); // "boolean"
console.log(true instanceof Boolean); // false
console.log(new Boolean('X') instanceof Boolean); // true
console.log(Object.prototype.toString.call(true)); // [object Boolean]


console.log(10 == '10'); // true
console.log(10 === '10'); // false
console.log(10 != '10'); // false
console.log(10 !== '10'); // true
