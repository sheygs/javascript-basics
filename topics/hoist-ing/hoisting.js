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
