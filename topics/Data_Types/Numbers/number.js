/* 
  - Number Literal, Functions & Constructor Syntax
*/

/* number literal */
const literalNumber = 99;
console.log(literalNumber);

/* functions */
console.log(Number(66)); // 66
// converts a stringed-number to integer/number
console.log(Number('66')); // 66
console.log(Number('44px')); // NaN

/* eslint-disable no-new-wrappers */
/* constructor syntax */
console.log(new Number(43)); // 43
console.log(new Number('43px')); // NaN

/*
 Integers and Floating Points
*/
console.log(0.1 + 0.2); //  0.300000000000000004
console.log(Number((0.1 + 0.2).toFixed(2)));
const price = 9.33;
const quantity = 3;
console.log(price * quantity); // 27.999999999999999

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

/*
 - Correctly Type-Checking Numbers
*/
console.log(typeof 99); // number
console.log(99 instanceof Number); // false
console.log(Number('99') instanceof Number); // false
console.log(new Number('99') instanceof Number); // true
console.log(Object.prototype.toString.call(99).slice(8, -1)); // Number

/*
- Exploring Number Methods
*/
console.log(Number.prototype);
console.log(Number((56.34565).toFixed(2)));
console.log(parseFloat((99.333999).toFixed(3)));
console.log((34.34545454).toPrecision(2));
