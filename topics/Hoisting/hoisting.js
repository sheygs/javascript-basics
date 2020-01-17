/*
  - Hoisting is the default behavior of moving all declarations 
  - at the top of the scope before execution.

  - It allows us to access variables & functions before they have been created

  - JavaScript ONLY hoist variables & functions declarations/regular functions, not initialisations

*/

// Function Declarations
/* eslint-disable */
sayHi();

function sayHi() {
  console.log('Hi');
  console.log(add(2,10));
}

function add(x,y) {
  return x + y;
}

// By default, the declarations are moved to the top of their scope

// Variable Declaration
// JavaScript hoist variable declarations
console.log(age); // undefined
var age = 100;

// JavaScript engine converts the above code to:
/*
   var age;
   console.log(age);
   age = 100;
*/
