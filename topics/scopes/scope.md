## Scope

- Scope of a variable roughly means the "availability of variables" in a code. 
- Global variables except `let` & `const` are attached to the window object
- functions can also be scoped to their parent functions.
- Three types of scope in JavaScript are: `Global Scope`, `Function/Local Scope` & `Blocked Scope`.
 
  - __Global Scope:__ Any variable that's not inside a function or block (a pair of curly braces), is inside a global scope.

    ```js
       var greeting = 'Hello World';
       
       function greet(){
         console.log(greeting);
       }
       // prints 'Hello World'
       greet();
    ```
  - __Function/Local Scope:__ Variables declared inside a function is inside the local scope. They can only be accessed from within that function, and can't be accessed from outside.
   
    ```js
       function greet(){
         var greeting = 'Good Morning';
         let sayHello = 'Hello World';

         // Good Morning Hello World
         console.log(greeting, sayHello);
       }
       greet();

       // Uncaught ReferenceError: greeting not defined
       console.log(greeting);
    ```
     
  - __Blocked Scope:__ `let` and `const` variables, unlike `var` variables can be scoped to the nearest pair of curly braces `{}`. This means that they can't be accessed from outside that pair of curly braces `{}`. 

    ```js
       {
          let mood = 'Happy 😄';
          var isAngry = false;
          console.log(mood); // prints 'Happy 😄'
       }
       // prints 'false'
       console.log(isAngry);
      
       // Uncaught ReferenceError: mood is not defined
       console.log(mood);
    ```

  ### Nested Scope

   Just like functions in JavaScript, a scope can be nested inside another scope.

    ```js
      var name = 'Olusegun';

      function greet(){
        var greet = 'Hello';
        {
          let lang = 'English';
          console.log(`${lang}: ${greet} ${name}`)
        }
      }
      
      greet();

    ```
    Here, we have 3 scopes: the block scope nested inside the function scope which in turn is nested inside the global scope.

- Lexical Scope ( a.k.a Static Scope ) simply means scope look-up happens where the function is defined and not where they are called/invoked. In other words, scope is determined at compiling rather than at runtime.

    ```js
     let age = 24;
     function printAge(){
       console.log(age);
     }

     function log(){
       let age = 25;
       printAge();
     }

     log(); // 24
    ```

   Here, `console.log(age)` will always print `24` no matter where the function `printAge()` is called.
   This is different from languages with the __dynamic scoping__ where `console.log(age)` will print different values depending on where the `printAge()` is called.

   __Note:__ Using lexical scope we can determine the scope of the variable just by looking at the source code whereas in dynamic scoping, the scope can't be determined until the code is executed.

  ### Scope Chain (look-up)

   When a variable is declared. The JavaScript engine checks for the value of that variable in its current scope, if the variable is not found, it checks for the variable in the outer scope and will continue to do so until if finds the variable or reaches global scope.

   If it can't find the variable, it will return an error.


   ```js
      var global = 'Outer Global';

      function scopeChain(){
        let local = 'Inner Local';

        // prints 'Inner Local'
        console.log(local);

        // prints 'Outer Global'
        console.log(global);

        number = 30;

        // prints 30
        console.log(number);
      }
      scopeChain();
   ```
