/* 
  - Number Literal, Functions & Constructor Syntax
*/
// number literal - most recommended
const literalNumber = 99;
console.log(literalNumber);

// functions
console.log(Number(66)); // 66
// converts a stringed-number to integer/number
console.log(Number('66')); // 66
console.log(Number('44px')); // NaN

/* eslint-disable no-new-wrappers */
console.log(new Number(43)); // 43
console.log(new Number('43px')); // NaN

/*
 Integers and Floating Points
*/
console.log(0.1 + 0.2); // returns 0.300000000000000004
console.log(Number((0.1 + 0.2).toFixed(2)));
const price = 9.33;
const quantity = 3;
console.log(price * quantity); // returns 27.999999999999999

const anotherPrice = 9.33 * 100;
const anotherQuantity = 3;
console.log((anotherPrice * anotherQuantity) / 100);
