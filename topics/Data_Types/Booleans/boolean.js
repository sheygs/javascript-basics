/*
  - Booleans are either ture or false
  - used for logic statements
*/

/*
 - Boolean literal, Functions & Constructor
 - Falsy values: "" or '' (empty string), 0, null, undefined, NaN
 - Truthy values: Everything NOT falsy
*/
const arg = 'X';
console.log(Boolean(arg)); // true
console.log(!!arg); // true

console.log(Boolean([])); // true
console.log(Boolean({})); // true
/* eslint-disable no-new-wrappers */
console.log(new Boolean(arg)); // true

/*
 - Correctly Type-Checking Booleans
*/
console.log(typeof false); // "boolean"
console.log(true instanceof Boolean); // false
console.log(new Boolean('X') instanceof Boolean); // true
console.log(Object.prototype.toString.call(true)); // [object Boolean]

/*
 - Equality: == vs === 
*/
