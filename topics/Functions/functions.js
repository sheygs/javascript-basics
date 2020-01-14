/*
   - A function is a block of code/statements designed to perform a particular task
   - A function is executed when they are called. This is known as "invoking or calling" a function
   - Values can be PASSED into a function or used within a function
   - Functions ALWAYS "return" a value. In JS, if no return value is specified, the function will return
   - "undefined"
   - Function are "objects"
*/

/* 
----------------WAYS TO DEFINE A FUNCTION-------------------------------------
- Three primary ways:
  (i) Function Declaration
  (ii) Function Expression
  (iii) Arrow Functions
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

function doctorize(name = '') {
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

// anonymous function expression
let doctorize2 = function(name) {
  return `Dr. ${name}`;
};

// named function expression
let doctorize3 = function doctor(name){
  return `Dr. ${name}`;
}
console.log(doctorize2('Kola')); // Dr. Kola
console.log(doctorize3('Les'));  // Dr. Les

/*
3) Arrow Functions
  - It is shorter syntax of writing function expressions
  - Implicit return: returns a value without using the "return" keyword
  - If there's only one argument, remove the parenthesis (optional)
  - They do not create their own "this" value
  Steps to create an arrow function:
    (i) Create a function declaration
    (ii) convert (i) to a function expression
    (iii) convert (ii) to an arrow function
*/
// (i)
// function inchesToCM(inches) {
//   return inches * 2.54;
// }

// (ii)
// const inchesToCM = function(inches) {
//   return inches * 2.54;
// }

// (iii)
  // const inchesToCM = (inches) => {
  //   return inches * 2.54;
  // }

 // (iv)
// const inchesToCM = (inches) => inches * 2.54;

//(v)
//  const inchesToCM = inches => inches * 2.54;
//  console.log(inchesToCM(3));

// returning an object
// function makeABaby(first, last){
//   return {
//     name: `${first.concat(' ',last)}`,
//     age: 0
//   }
// }
// makeABaby('Ewa','Anjorin');

// //Improved arrow functions
 const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


/* eslint-enable */
/*
  4) IIFE - Immediately Invoked Function Expression
  - It is a way to execute functions immediately, as soon as they are created
  - can be defined with regular/anonymous/arrow functions
  - Don't pollute the global object and they isolate variable declarations
*/
(function(name) {
  console.log(`Immediately Invoked by ${name}!`);
})('Sheygs');

/*
  5) METHODS
  - Are functions that live inside an object
*/

const sheygs = {
  name: 'Olusegun',
  /* eslint-disable */
  // method 1
  sayHi: function(){ 
    console.log(this, 'Hey Sheygs!'); // this refers to the object
  },
  // short-hand method 2
  bio(){
    console.log(this,'I am Olusegun'); // this refers to the object
  },
  // Arrow functions
  whisper: () => {
    console.log(this, 'Whispering...'); // refers to the Window object
  }
};
console.log(sheygs);

/* eslint-enable */

/*
6) CALLBACK FUNCTIONS
  - It is a function that is passed as an argument to another function
  to be called at a later time
  - A function that accepts a function as an argument
  is a "higher-order function"
*/

// Click callbacks
const button = document.querySelector('.click-me');
// method 1
// button.addEventListener('click', sheygs.whisper);

// method 2
function handleClick() {
  console.log(this);
}
button.addEventListener('click', handleClick);

// method 3
// "this" refers to the window object
// button.addEventListener('click', () => console.log(this));

// "this" refers to the button
// button.addEventListener('click', function() {
//   console.log(this, 'Nice!');
// });

// Timer callbacks
// setTimeout(function() {
//   console.log(this);
// }, 3000); // "this" refers to the Window object

/*
 -----------FUNCTIONS: PARAMETERS & ARGUMENTS --------------
*/

// Parameters - placeholders when functions are defined
// arguments -  actual values when functions are called, run or invoked

// keyword // func. name // parameters  //default values
function calculateBill(bill, taxRate = 0.13, tipRate = 0.15) {
  // scope start
  return bill * (1 + taxRate + tipRate); // return statement/ function body
} // scope end

console.log(calculateBill(100)); // 127.999999999999
console.log(calculateBill(100, 0.15)); // 129.999999999999
console.log(calculateBill(100, undefined)); // 127.99999999999

// calling functions inside functions
function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize())); // HEY DR. ''
console.log(yell(doctorize('Samuel'))); // HEY DR. SAMUEL

/*
--------------------REST PARAMETERS AND ARGUMENTS ----------------- 
*/
// Old Approach Using arguments
/* eslint-disable */
function sum() {
  console.log(arguments, Array.isArray(arguments));
  return Array.from(arguments).reduce((prev,curr) => {
    return prev + curr;
  })
}
console.log(sum(1, 2, 3, 4, 5));
/* eslint-enable */

// New Approach using Rest parameters (rest of the arguments)
const sumRest = (...args) => {
  console.log(args, Array.isArray(args));
  return args.reduce((a, b) => a + b);
};
console.log(sumRest(3, 6, 9, 12));
