## Strings

They are used to hold texts. The three(3) ways to create a string are using double quotes `""`, single quotes `''`, and using back ticks ````.

Backticks are more conveniently used for multi-line strings, string interpolation and concatenation. Concatenation is the joining of two or more strings while string interpolation is inserting a variable inside a string.

```js
// backticks
const greetings = 'Welcome to the JavaScript basics';
const name = 'Sam';
const html = `
              <div>
                <h2>Hi ${name}, ${greetings}!</h2>
             </div>
            `;
document.body.innerHTML = html;
```
```js
    // concatenation (old way)
    let name = 'Segun';
    const sentence = 'Hi,' + ' I am ' + name + '.'; // Hi, I am Segun
```

```js
  // string interpolation (new way)
  let name = 'Segun';
  const sentence = `Hi, I am ${name}.`; // Hi, I am Segun
```  

Appending is another way to add two or more strings.

```js
let definition = 'Science';
    definition+= ' is the study of ';
    definition+= 'living & non-living things.';
    console.log(definition); // Science is the study of living & non-living things.
```

## String Properties & Indexes

