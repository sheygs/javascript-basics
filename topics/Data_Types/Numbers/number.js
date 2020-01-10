/* 
  - Number Literal, Functions & Constructor Syntax
*/
// number literal - most recommended
const literalNumber = 99;
console.log(literalNumber);

// functions
console.log(Number(66)); // 66
// converts a stringed-number to integer
console.log(Number('66')); // 66
console.log(Number('44px')); // NaN

/* eslint-disable no-new-wrappers */
console.log(new Number(43)); // 43
console.log(new Number('43px')); // NaN
