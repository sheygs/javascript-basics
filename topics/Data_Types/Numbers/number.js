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

/*
   Parsing Strings to Numbers
   -parseInt(string, radix)
   -parseFloat(string)
   -Number()
   - Unary plus +
*/
console.log(parseInt('34px', 10)); // 34
console.log(parseFloat('34.559px')); // 34.559

console.log(Number('50e10')); // 50 * 10000000000
console.log(Number('f50'), Number('50r')); // NaN, NaN

console.log(+'3.142', +'3'); // 3.142, 3
console.log(9 + +'3.45'); // 12.45

/*
- Understanding Not-a-Number
*/
const result = Number('55px');
/* eslint-disable no-restricted-globals */
console.log(isNaN(result)); // true
console.log(isNaN('I am a String!')); // true

console.log(Number.isNaN(result)); // true
console.log(Number.isNaN('I am another String!')); // false

console.log(Number.isInteger(66.99)); // false
console.log(Number.isFinite(34), Number.isFinite(Infinity)); // true, false
