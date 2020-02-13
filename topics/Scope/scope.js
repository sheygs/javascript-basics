/* eslint-disable */

var first = 'Olusegun';  // window.first => 'Olusegun';
let age = 24; // window.age => undefined
const last = 'Olaoluwa'; // window.last => undefined

/* Function Scope */

function display() {
  const hair = 'blonde';

  // scope look-up for age  
  console.log(hair, age); // blonde, 24
}  
display();
console.log(age); // 24


function go() {
  const hair = 'blonde';
  const myAge = 25;
  console.log(hair, myAge);
  console.log(age);
}


function isCool(name) {
  // let cool;  
  if (name === 'Sheygs'){
     var cool = true;  // or cool = true;
  }
  console.log(cool);
  return cool;
}
 isCool('Sheygs');


 /* blocked-scoping with var */
 function logOutput() {
  for (var i = 0; i < 9; i++){
    console.log(i);
  }
  // i is leaked out 
  console.log(i); // i = 9
 }

 logOutput();


 /* Scope look-up */
 const dog = 'Tim';

 function logDog(dog){
   console.log(dog);
 }

 function log(){
   const dog = 'sunny';
   logDog(dog);
 }

log();

/* function scoping */
function sayHi(name){
  function yell(){
    console.log(`${name.toUpperCase()} yelling...`);
  }
  yell();
}

sayHi('Kkols');
yell();  // reference error; yell() out of reach

