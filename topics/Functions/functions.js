/*
   - A function is a block of code/statements designed to perform a particular task
   - A function is executed when they are called. This is known as "invoking or calling" a function
   - Values can be PASSED into a function or used within a function
   - Functions ALWAYS "return" a value. In JS, if no return value is specified, the function will return
   - "undefined"
   - Function are "objects"
*/

function calculateBill() {
  console.log('Calculating Bill...');
  // total + tax
  return 100 * 1.13;
}

calculateBill();

/* 
  - WAYS TO DEFINE A FUNCTION
*/

/* 
1) Function Declaration
- It is a named function
- To create a function declaration, you use the 
 'function' keyword followed by the name of the function
- The function definition is "hoisted" thereby allowing it to
  be used before it is defined.
*/

/* eslint-disable-next-line */
console.log(doctorize('Olusegun'));  // Dr. Olusegun

function doctorize(name) {
  return ` Dr. ${name}`;
}

/*
2) Function Expressions
- It is a named or anonymous function
- Anonymous function is a function without a name
- They are not "hoisted", and therefore can not be used before they are defined.
*/

/* eslint-disable */
//console.log(doctorize2('Ade')); // cannot access doctorize before initialization

let doctorize2 = function(name) {
  return `Dr. ${name}`;
};
console.log(doctorize2('Kola')); // Dr. Kola


/*

*/
