 ## Hoisting
  
  Hoisting is the default behavior of moving all declarations at the top of the scope before execution.
  It allows us to access variables & functions before they have been created. 

  __Note:__ variable declarations only get moved to the top and not initialisations/assignments.


- function declarations are hoisted while function expressions are not

- `var` variable declarations are hoisted while `let` and `const` are not. (They actually do get hoisted - Read more on __Temporal Dead Zone__)

```js
   /* sample 1, prints undefined */
   console.log(age);
   var age = 5;
   
   /* sample 1 will be compiled at run time as */
   var age;
   // prints undefined
   console.log(age);
   age = 5;
 
   // Cannot access 'age' before initialization
   console.log(age);
   let age = 6;

   // Cannot access 'sex' before initialization
   console.log(sex);
   const sex = 'Male';

```

```js
    // prints 'Hey 😃'
    // hey() gets moved to the top of the scope
    hey();

    /* function expression */
    function hey(){
      console.log('Hey 😃');
    } 
    
    /* ex. 2 */
    var x = 10; 

    function test() { 
       var x = 20; 
    } 
  
     test(); 
    // prints 10
    console.log(x); 

    /* ex. 3 */
    var x = 10; 

    function test() { 
    if (x > 20) { 
        var x = 50; 
    } 
    // prints undefined
    console.log(x); 
    } 
    test(); 

    /* ex. 3 Hoisting */
    var x = 10; 

    function test() { 
    var x;
    if (x > 20) { 
        x = 50; 
    } 
    // prints undefined
    console.log(x); 
    } 
    test(); 

    /* ex. 4 */

    var x = 10; 
    console.log(x); // 10
  
    if (true) { 
     var x = 20; 
     console.log(x); // 20
    } 
  
   console.log(x); // 20

   /* ex. 5 */

   var x = 10; 
   console.log(x); // 10
  
   function test() { 
    var x = 20; 
    console.log(x); // 20
  
    if (x > 10) { 
        let x = 30; 
        console.log(x); // 30
    } 
  
    console.log(x); // 20
    } 
  
    test(); 
    console.log(x); // 10

    /* ex. 6 */
    function test() { 
    if (false) { 
        var x = 50; 
    } 
  
    console.log(x); 
    console.log(y); 
  
    var y = 100; 
    console.log(y); 
    } 
  
    test(); 

    /* ex. 6 is interpreted as */
    function test() { 
    var x, y;
    if (false) { 
        x = 50; 
    } 
  
    console.log(x); // undefined
    console.log(y); // undefined
  
    y = 100; 
    console.log(y); // 100
    } 
  
    test(); 

    /* ex. 7 */
    function test() { 
    if (false) { 
        let x = 50; 
    } 
    // ReferenceError: x is not defined
    console.log(x); 
    console.log(y); // error
  
    let y = 100; 
    console.log(y); // 100
    } 
  
    test(); 

    /* ex. 8 */
    function test() { 
     foo(); 
     bar(); 
  
      // Function defined 
      // using function declaration 
      function foo() { 
        console.log('foo'); 
      } 
  
      // Function defined 
     // using function expression 
     var bar = function() { 
        console.log('bar'); 
     } 
    } 
  
    test(); 
``` 
    ```
      foo
      TypeError: bar is not a function
    ```
```js
    /* ex. 8 rewritten  */

    function test() { 
     // using function declaration

     function foo() {
       console.log('foo'); 
     }
     var bar;

     foo(); 
     bar();
  
     // using function expression 
     bar = function() { 
        console.log('bar'); 
     } 
    } 
  
    test();
``` 






