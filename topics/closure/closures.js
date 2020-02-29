/* eslint-disable  */

 /* Closures creating a function */
function outerScope() {
  const outerVar = 'OuterScope';
  function innerScope() {
    const innerVar = 'InnerScope';
    console.log(innerVar);
    console.log(outerVar);
  }
  innerScope();
}

outerScope();


 /* Data Privacy 1 */
function createGreeting(greeting = '') {
  const greet = greeting.toUpperCase();
  return function(name = 'Ade') {
    return `${greet} ${name}`;
  };
}

const sayHi = createGreeting('Hi');
sayHi();
/* createGreeting('Hello')('Sheygs'); */


/* Data Privacy 2 */
function createGame(gameName = '') {
  let score = 0;
  return function win() {
    score += 1;
    return `Your ${gameName} score is ${score}`;
  };
}
const baseball = createGame('Baseball');
const soccer = createGame('Soccer');


/* Emulating private methods with closures */
/* Using IIFEs */
const count = (function(){
     let x = 0;
     return {
        increment: function() { return ++x; },
        decrement: function() { return --x; },
        get: function(){ return x; },
        reset: function(){ return x; }
     }
})();
count.increment(); 
count.decrement();

/* Without Using IIFEs */
const makeCounter = function(){
   let privateCounter = 0;
   function changeBy(val){
     privateCounter+=val;
   }
   return {
     increment: function(){
       changeBy(1);
     },
     decrement: function(){
       changeBy(-1);
     },
     value: function(){
       return privateCounter;
     }
   }
}

const counter1 = makeCounter();
console.log(counter1.increment()); 
console.log(counter1.decrement()); 
console.log(counter1.value()); 




