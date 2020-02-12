/*  Functions */

/* eslint-disable */
console.log(doctorize('Olusegun'));  // Dr. Olusegun

function doctorize(name = '') {
  return ` Dr. ${name}`;
}

console.log(doctorize2('Ade')); // cannot access doctorize before initialization

/* Anonymous function expression */
let doctorize2 = function(name) {
  return `Dr. ${name}`;
};

/* Named function expression */
let doctorize3 = function doctor(name){
  return `Dr. ${name}`;
}
console.log(doctorize2('Kola')); // Dr. Kola
console.log(doctorize3('Les'));  // Dr. Les


/*Arrow Functions*/

// Returning an object
// function makeABaby(first, last){
//   return {
//     name: `${first.concat(' ',last)}`,
//     age: 0
//   }
// }
// makeABaby('Ewa','Anjorin');

// Improved arrow functions
 const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


/* FUNCTIONS: PARAMETERS & ARGUMENTS */

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


/* REST PARAMETERS AND ARGUMENTS  */

// Old Approach Using arguments
function sum() {
  /* eslint-disable prefer-rest-params */
  console.log(arguments, Array.isArray(arguments));
  return Array.from(arguments).reduce((prev, curr) => prev + curr);
}
console.log(sum(1, 2, 3, 4, 5));


// New Approach using Rest parameters
const sumRest = (...args) => {
  console.log(args, Array.isArray(args));
  return args.reduce((a, b) => a + b);
};
console.log(sumRest(3, 6, 9, 12));
