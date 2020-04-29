## Call, Apply & Bind

- `this` keyword in JavaScript is always defined by where the function/method is being `called` and not where the function/method is being  `defined`

- The `call()` allows for a function/method belonging to one object be assigned and called for a different object.
`call()` provides a new value of `this` to the function/method. With `call()`, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object. 
- `call()` accepts an __argument list__.

- The `apply()` method calls a function with a given `this` value, and `arguments` provided as an array. 
- `apply()` accepts a __single array of arguments__.


- `.bind()` returns a function that needs to be called by itself; `.call()` runs the function immediately