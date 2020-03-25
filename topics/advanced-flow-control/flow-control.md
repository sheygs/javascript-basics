## Async & Await
promise chaining
`promises.all` - only resolves when all promises have resolved; require a catch block if a promise is rejected
`promise.race` - waits for the first settled promise and gets its result or error
`promise.allSettled` - doesn't need a catch block;  waits for all promises to settle REGARDLESS of the whether they were rejected or resolved

> function declaration

```js
async function fd() {}
```

> arrow function

```js
const arrowFn = async () => {};
```

> callback function

```js
window.addEventListener("click", async function() {});
```

> methods

```js
const person = {
  // method
  sayHi: async function() {},

  // method shorthand
  async sayHello() {},

  // arrow function property
  sayHey: async () => {}
};
```

> await - asynchronously waiting

## Error Handling in Async & Await

There are four(4) ways of handling errors using async-await.

```js
  // 1. using  try/catch
  async function test() {
   try {
    const pizza = await makePizza(['pineapple']);
    console.log(pizza);
   } catch ({ message }) {
    console.log(message);
   }
  }
  test();

  // 2. mixing async/await with 'catch' keyword  inside the function definition
  function handleErrors({ message }){
    console.log('Something failed');
    console.log(message)
  }

   async function test() {
    const pizza = await makePizza(['pineapple']).catch(handleErrors);
    console.log(pizza);
  }
  test();


   // 3. mixing async/await with 'catch' keyword attached to the function call
  function handleErrors({ message }){
    console.log('Something failed');
    console.log(message)
  }

   async function test() {
    const pizza = await makePizza(['pineapple']);
    console.log(pizza);
  }
  test().catch(handleErrors);

  
  // 4. make a safe function using higher-order function


```