/*
 - Closure - Ability to access a parent level-scope from a child/inner
   scope/function even after the parent function has been terminated

 - Lexical/static scope
   A lexical scope or static scope in JavaScript refers to the accessibility of the variables, functions,and objects based on their physical location in the source code. Nested functions have access to variables declared in their outer scope.

 - Lexical environment
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

/* eslint-disable no-unused-vars */
const baseball = createGame('Baseball');
const soccer = createGame('Soccer');
