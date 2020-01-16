/*
  - Scope of a variable roughly means "the availability of variables in a code"
  - functions can also be scoped to their parent functions
  - Global variables (with the exception of "let" & "const") are attached to the window object
  - Scoping types are: global, function/local, and blocked
*/

/* eslint-disable */

/*
 N/B:
- Anything in the global scope is attached to the Window object 
- with the exception of 'let' & 'const'
*/
var first = 'Olusegun';  // window.first => 'Olusegun';
let age = 24; // window.age => undefined
const last = 'Olaoluwa'; // window.last => undefined

// Function Scope

// function go(){
//   const hair = 'blonde';
// // scope look-up for age in the global scope as age is not found in local go()
//   console.log(hair, age); // blonde, 24
// }  
// go();
// console.log(age); // 24


// function go(){
//   const hair = 'blonde';
//   const myAge = 25;
//   console.log(hair, myAge);
//   console.log(age);
// }


function isCool (name){
  // let cool;  
  if (name === 'Sheygs'){
     var cool = true;  // or cool = true;
  }
  console.log(cool);
  return cool;
}
 isCool('Sheygs');


 function logOutput(){
  for (var i = 0; i < 9; i++){
    console.log(i);
  }
  console.log(i); // i = 9; i is leaked out of the blocked-scope
 }

 logOutput();


 // Scope look-up
 const dog = 'Tim';

// lexical scope/ static scope: simply means scope look-up happens
// where the function is defined and not where they are called/invoked
 function logDog(dog){
   console.log(dog);
 }

 function go(){
   const dog = 'sunny';
   logDog(dog);
 }

go();

// function scoping
function sayHi(name){
  function yell(){
    console.log(`${name.toUpperCase()} yelling...`);
  }
  yell();
}

sayHi('Kkols');
// yell();  Reference Error: yell is not defined
// N/B: function are going to be scoped to the parent function
