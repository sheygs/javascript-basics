/* line below necessary to disable eslint rules  for illustration */
/* eslint-disable */ 
'use strict';
var name;  // declaration
console.log(name);  // undefined

var first = 'Olusegun'; // Declaration & Assignment
first = 'Segun'; // Reassignment

let age = '24'; // Declaration & Initialisation
age = '25'; // Reassignment

let a; // Declaration
a = 100; // Assignment
console.log(a); // usage

const gender = 'Male';
//gender = 'Female'; //error, can't reassign const variables


// N/B: All undeclared variables are global variables in non-strict mode
// In strict mode, returns undefined

// isMarried = false;  
// console.log(isMarried); 
