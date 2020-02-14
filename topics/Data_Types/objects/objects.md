## Objects

- Objects are used for collection of data & functionality i.e. properties and methods
- Nested objects are possible
- `const` means the binding to that object cannot be changed
- if you want to define an object who's keys have the same name as the variables passed-in as properties, you can use the shorthand and simply pass the key name.

```js
  // declare an object in ES6
  let cat = 'Miaow';
  let dog = 'Woof';
  let bird = 'Peet peet';

  let someObject = {
    cat,
    dog,
    bird
  }
  console.log(someObject);
  
  {
    cat: 'Miaow',
    dog: 'Woof',
    bird: 'Peet peet'
  }
```
```js
  // declare an object in ES5
  var cat = 'Miaow';
  var dog = 'Woof';
  var bird = 'Peet peet';

  var someObject = {
    cat: cat,
    dog: dog,
    bird: bird
  }
```
- If the object property key is of multiple words, it should be wrapped in a quoted string `""/''` and the property value can only be accessed using bracket `[]` notation.

- `Object.freeze()` freezes an object such that new properties cannot be added to the object, and existing properties cannot be removed or modified.

- Properties can be accessed using dot `.` or bracket  `[]` notation
- For bracket notation, property identifiers have to be a string or a variable that references a string

```js
    const person = {
      first: 'John',
      last: 'Doe',
      age: 15,
      'cool-dude': true,
    }
    const propertyToCheck = prompt('What property do you want to check ?');
    /* propertyToCheck is a string */
    console.log(person[propertyToCheck])
```

```js
    // checks if job is a property
    person.jobs // undefined

    // deep level check fails because 
    // job is not a property in the person object
    // Uncaught TypeError: cannot read property 'side' of undefined
    person.jobs.side 
```

```js  
    // Ternary approach 
    let jobs = segun.jobs ? segun.jobs.side : `Job doesn't exist`;
```
```js
    // Using optional chaining
    // Still experimental - won't work
    jobs = segun?.jobs?.side;
```

### Looping over an Object

- `for...in`: loops through the properties of an object
- `Object.keys()`:creates an array that contains the properties of an object.
- `Object.values()`: creates an array that contains the values of every property in an object.
- `Object.entries()`: creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.
 
The better way to loop through objects is first convert it into an array with one of these three methods above. Then you loop through the results using array's iteration methods like `for...in`/`forEach`/`for`/`while`/`do-while`.


### Object References vs Values

