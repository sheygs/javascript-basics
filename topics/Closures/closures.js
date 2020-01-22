/*
 - Closure - Ability to access a parent level-scope from a child/inner
   scope/function even after the parent function has been terminated

  
 - Lexical/static scope
   A lexical scope or static scope in JavaScript refers to the accessibility of the variables, functions,and objects based on their physical location in the source code. Nested functions have access to variables declared in their outer scope.

 - Lexical environment


 - Closure scope chain:
   For every closure, we have 3 scopes:
   - local scope(own scope)
   - Outer Function scope
   - Global scope

 - Use cases for closure:
  - Data encapsulation
  - Higher-Order functions
  - Currying/partial application
*/

// Ex.1 Closures creating a function
function outerScope() {
  const outerVar = 'OuterScope';
  function innerScope() {
    const innerVar = 'InnerScope';
    console.log(innerVar);
    console.log(outerVar);
  }
  return innerScope;
}

// const outer = outerScope();
// outer();

// OR
outerScope()();

// Ex.2 Closures creating private variables
function createGreeting(greeting = '') {
  const greet = greeting.toUpperCase();
  return function(name = 'Ade') {
    return `${greet} ${name}`;
  };
}

const sayHi = createGreeting('Hi');
sayHi(); // HI Ade

createGreeting('Hello')('Sheygs'); // HELLO Sheygs

// Ex.3 Data Privacy
function createGame(gameName = '') {
  let score = 0;
  return function win() {
    score += 1;
    return `Your ${gameName} score is ${score}`;
  };
}

/* eslint-disable  */
const baseball = createGame('Baseball');
const soccer = createGame('Soccer');


// EX:1 
// global scope
function makeAdder(x){
  // outer function scope
  return function(y){
    // local scope
    return x + y;
  }
}

const add5 = makeAdder(5);
const add7 = makeAdder(7);
console.log(add5(2)); // 7
console.log(add7(3)); // 10


// Emulating private methods with closures
// 1. Using Anonymous function
const count = (function(){
     let x = 0;
     return {
        increment: function() { return ++x; },
        decrement: function() { return --x; },
        get: function(){ return x; },
        reset: function(){ return x; }
     }
})();
count.increment(); // 1
count.decrement(); // 0

// 2. Without Using Anonymous function
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
console.log(counter1.increment()); // 1
console.log(counter1.decrement()); // 0
console.log(counter1.value()); // 0




