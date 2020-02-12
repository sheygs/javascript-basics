## Functions

A _function_ is a block of code/statement designed to perform a specific task. 
A _function_ is executed when they are called. This is known as "invoking or calling" a function.
_functions_ __always__ return a value.  If no return value is specified, the function will return `undefined`.
_functions_ are objects
Values can be passed into a function or used within a function.


## Ways to define a Function

The three main ways of defining a function are:

- Function Declaration/Regular Functions
- Function Expression
- Arrow Functions

Other ways of defining a function are:

- IIFEs (Immediately Invoked Function Expression)
- Methods
- Callbacks:  (click & timer callbacks)

### Function Declaration

- It is a named function.
- To create a regular function, you use the `function` keyword followed by the name of the function.

```js
    function myFunction(){
      // some code
    }
```
- The function definition is `hoisted` thereby allowing it to be used before it is defined.

### Function Expressions

- It is either a named or anonymous  function expression.
- An `anonymous` function is a function without a name.
- They are not `hoisted` and therefore, cannot be used before they are defined.

```js
     // anonymous function expression
     const func1 = function (){
       // some code
     }
     
     // named function expression
     const func2 = function anotherFunction(){
       // some code
     }
```

### Arrow Functions

- It is a shorter syntax of writing function expressions.
- If you're returning a piece of code, you can simply return it without using the `return` keyword (implicit return).
- If there's only one argument, remove the parenthesis (optional).
- They do not create their own `this` value.

#### Steps To Create an Arrow function

1) Create a function declaration
2) Convert 1) to an anonymous function expression
3) Convert 2) to an arrow function

```js
    // step 1
    function inchesToCM(inches){
      return inches * 2.54;
    } 
```

```js
    //step 2
    const inchesToCM = function(inches) {  
       return inches * 2.54;
    }
```

```js
    // step 3
    const inchesToCM = (inches) => {
       return inches * 2.54;
    }
```
```js
    // step 4
    const inchesToCM = (inches) => inches * 2.54;
```
```js
    //step 5
    const inchesToCM = inches => inches * 2.54;
```


### Immediately Invoked Function Expressions

- It is a way of executing functions immediately as soon as they are created.
- It can be defined with regular/anonymous/arrow functions.
- They don't pollute the global object and they isolate variable declarations.

```js
    // regular function
   (function IIFE(name) {
      console.log(`Immediately Invoked by ${name}!`);
   })('Olusegun');

   // anonymous function
   (function (){
      console.log('Immediately Invoked anonymous function 😁');
   })()

   // arrow function
   (() => {
     console.log('Immediately Invoked Arrow Function ↔️');
   })()
```

## Methods

- Methods are functions that live inside an object.

```js
  const olusegun = {
      name: 'Olusegun',
      // method 1
      sayHi: function(){ 
         console.log(this, 'Hey Sheygs!'); // this refers to the object
      },
      // method 2
      bio(){
         console.log(this,'I am Olusegun'); // this refers to the object
      },
      // Arrow functions
      whisper: () => {
         console.log(this, 'Whispering...'); // refers to the window object
      }
 };

```

## Callback Functions

- It is a function that is passed as an argument to another function to be called at a later time.
- A function that accepts a function as an argument is a "higher-order function"

```js
   // click callbacks
   const button = document.querySelector('.click-me');

  /* method 1 */
  // "this" refers to the window object
  button.addEventListener('click', olusegun.whisper);

  /* method 2 */
  // "this" refers to the button
  function handleClick() {
    console.log(this);
  }
  button.addEventListener('click', handleClick);

  /* method 3*/
  // "this" refers to the button
  button.addEventListener('click', function() {
    console.log(this, 'Nice!');
  });

  // Timer callbacks
  // "this" refers to the Window object
  setTimeout(function() {
    console.log(this);
  }, 3000); 

```

## Default Parameters

- It is a way to set default values for function parameters if an argument value is not passed in.

```js
    function sayHello(name = 'Olusegun'){
      return `Hello ${name}`;
    }
    sayHello(); // Hello Olusegun
    sayHello('Bolaji'); // Hello Bolaji
```

## Rest Parameters 

- The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```js
    const sum = (...args) => args.reduce((elt,next) => elt + next);
    sum(1,2,3,4); // 10
```
