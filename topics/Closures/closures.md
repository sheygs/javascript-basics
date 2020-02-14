  ## Closures

- A lexical (static ) scope in JavaScript refers to the accessibility of the variables, functions,and objects based on their physical location in the source code. Nested functions have access to variables declared in their outer scope.

- __Closures__ are nested function which have access to the scope of the outer function. After the outer function is returned, by keeping a reference to the inner function (`closure`), we prevent the outer scope from being destroyed.

```js
    // we can greet anyone now!
    function greet(name = 'Olusegun'){
       return function(sayHello = 'Hello'){
          return `${sayHello} ${name}`;
       }
    }

```
  Use it like so...

```js
    const greetSegun = greet();
    const greetKola = greet('Kola');

    greetSegun(); // Hello Olusegun
    greetKola('Hi'); // Hi Kola
```

 ## We used a Closure 🔥
 
 In the above code, the outer function takes `name` but the inner function uses it later. This is closure in action!

 When a function returns (without returning a function), its lifecycle is complete. This means that its _local variables_ are cleaned up. However, when a function returns a function, the returned/inner function still has access to those outer variables, even after the parent function is has been called.


## Benefits of Closures

1) __Data privacy__
  
  Data privacy is important for savely sharing code. Without data privacy, its inner implementations can be maliciously manipulated.

  ### A bank with no privacy

  Consider the code below. `accountBalance` is exposed globally meaning that it can be reset to any value 😁

  ```js
     let accountBalance = 0;
     const manageAccountBalance = function (){
        return {
             getBalance: function () { return accountBalance; },
             makeDeposit: function (amount){
               accountBalance+=amount;
             },
             withDraw: function (amount){
                if ( accountBalance < amount ) { return 'Insufficient Balance!'; }
                accountBalance-=amount;
             }
        }
     }
  ```
   Nothing stops me from maliciously inflating my/someone's accountBalance 

   ```js
      // later in the script
      accountBalance = 5000000 🤑

   ```
   __Note:__ Closures is the only way to enable data privacy for now. 

   ### A bank with proper privacy
   
   Here, accountBalance sits inside the parent function

   ```js
       const manageAccountBalance = function (initialBalance = 1000){
         let accountBalance = initialBalance;
        return {
             getBalance: function () { return accountBalance; },
             makeDeposit: function (amount){
               accountBalance+=amount;
             },
             withDraw: function (amount){
                if ( accountBalance < amount ) { return 'Insufficient Balance!'; }
                accountBalance-=amount;
             }
        }
     }
  ```
  And perhaps use it like so...

  ```js
     const manager = manageAccountBalance();

     manager.getBalance(); // 1000
     manager.makeDeposit(1000);
     manager.getBalance(); // 2000
     manager.withDraw(4000); // Insufficient Balance!

  ```
  Now, I can't directly access `accountBalance` anymore, I can only view it through the `get` and `set` methods.

2) __Currying__: Simply, It is when a function takes its arguments one at a time.

   Insted of this...

  ```js
    const add = function (a,b) {
      return a + b;
    }
  ```
  You can _curry_ `add` by leveraging closures.

  ```js
    const add = function(a){
      return function(b){
        return a + b;
      }
    }
 ```

 ```js
    const add5 = add(5);

    add5(5); // 10
    add5(10); // 15
 ```