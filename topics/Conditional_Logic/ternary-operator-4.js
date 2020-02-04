/* eslint-disable */
/*
 - Type Coercion
 - Ternary (Conditional) Operator
 - Conditional Abuse
*/

// Type Coercion - converting a value from one type to another
const isCool = true;
if(!isCool) {
   console.log('You are not cool');
}

// Ternary: short-hand (if-else) statement
(() => {
const count = 4536;
let word;
// if (count === 1){
//   word = 'item';
// }else {
//   word = 'items';
// }

/*Ternary Conversion
  1. condition
  2. what to do if true
  3. what to do if false
*/

// Scenario 1

word = (count <= 1) ? 'item' : 'items';
const sentence = `You have ${count} ${word} in your cart`

// OR
// const sentence = `You have ${count} item${count > 1 ? 's' : ''} in your cart`;
console.log(sentence);
})();


// Scenario 2
(() => {
  function showAdminBar() {
    console.log('Showing Admin Bar...');
  }
  const isAdmin = true;
  // return isAdmin ? showAdminBar() : null;
  //OR
  // if (isAdmin) { showAdminBar(); }
  return isAdmin && showAdminBar();
})();


// Scenario 3
(() => {
  function check1() {
    console.log('Running check 1...');
    return true;
  }

  function check2() {
    console.log('Running check 2...');
    return true;
  }

  function check3() {
    console.log('Running check 3...');
    return false;
  }

  if (check1() && check2() && check3()){
    console.log('All checks passed 😄');
  } else {
    console.log(`Some checks failed 😔`);
  } 
})();